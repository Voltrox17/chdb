"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { brand, contact, quote } from "@/config/site";
import { checkRateLimit } from "@/lib/rate-limit";
import { fieldErrors, quoteSchema, type QuoteFormState, type QuoteInput } from "@/lib/quote-schema";

/** Submissions completed faster than this are treated as automated. */
const MIN_FILL_MS = 3000;

export async function submitQuote(_prev: QuoteFormState, formData: FormData): Promise<QuoteFormState> {
  // Spam: honeypot field must stay empty; bots that fill it get a generic error.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "error", message: "Your request could not be submitted. Please try again." };
  }
  const elapsed = Number(formData.get("_elapsed"));
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return {
      status: "error",
      message: "Your request could not be verified. Please review the form and submit again.",
    };
  }

  const parsed = quoteSchema.safeParse({
    fullName: formData.get("fullName") ?? "",
    workEmail: formData.get("workEmail") ?? "",
    company: formData.get("company") ?? "",
    jobTitle: formData.get("jobTitle") ?? "",
    dataType: formData.get("dataType") ?? "",
    indication: formData.get("indication") ?? "",
    datasetSize: formData.get("datasetSize") ?? "",
    intendedUse: formData.get("intendedUse") ?? "",
    description: formData.get("description") ?? "",
    timeline: formData.get("timeline") ?? "",
    dataFormat: formData.get("dataFormat") ?? "",
    consent: formData.get("consent") ?? "",
  });
  if (!parsed.success) {
    return {
      status: "invalid",
      errors: fieldErrors(parsed.error),
      message: "Please correct the highlighted fields.",
    };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!checkRateLimit(ip)) {
    return { status: "rate_limited", message: "Too many requests. Please wait a few minutes and try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return {
      status: "not_configured",
      message: contact.email
        ? `Online submission is not yet enabled, so your request was not sent. Please email ${contact.email} instead.`
        : "Online submission is not yet enabled on this site, so your request was not sent. Please try again later.",
    };
  }

  const data = parsed.data;
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: data.workEmail,
      subject: `[${brand.name} Quote] ${data.company} — ${data.dataType}`,
      text: renderText(data),
    });
    if (error) {
      console.error("[submit-quote] Resend error:", error.name);
      return { status: "error", message: "We couldn't send your request right now. Please try again shortly." };
    }
  } catch (err) {
    console.error("[submit-quote] Unexpected error:", err instanceof Error ? err.message : "unknown");
    return { status: "error", message: "We couldn't send your request right now. Please try again shortly." };
  }

  return {
    status: "success",
    message: `Thank you. Your request has been received. Qualified, sufficiently specified requests receive a preliminary response within ${quote.turnaroundHours} hours.`,
  };
}

function renderText(d: QuoteInput) {
  const rows: [string, string | undefined][] = [
    ["Full name", d.fullName],
    ["Work email", d.workEmail],
    ["Company", d.company],
    ["Job title", d.jobTitle],
    ["Data type", d.dataType],
    ["Target indication / cohort", d.indication],
    ["Estimated dataset size", d.datasetSize],
    ["Intended use", d.intendedUse],
    ["Target timeline", d.timeline || "—"],
    ["Preferred data format", d.dataFormat || "—"],
    ["Business-contact consent", "Yes"],
  ];
  return [
    `New ${quote.turnaroundHours}-hour quote request`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Project description:",
    d.description,
  ].join("\n");
}
