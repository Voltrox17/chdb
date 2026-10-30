"use client";

import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Info, Loader2 } from "lucide-react";
import { submitQuote } from "@/app/actions/submit-quote";
import { brand, quote } from "@/config/site";
import { trustSignals } from "@/content/buyer";
import {
  dataTypeOptions,
  datasetSizeOptions,
  fieldErrors,
  formatOptions,
  intendedUseOptions,
  quoteSchema,
  timelineOptions,
  type QuoteField,
  type QuoteFormState,
} from "@/lib/quote-schema";
import { Button, cx } from "@/components/ui/primitives";
import { SelectField, TextAreaField, TextField } from "./Fields";

const initialState: QuoteFormState = { status: "idle" };

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const [clientErrors, setClientErrors] = useState<Partial<Record<QuoteField, string>>>({});
  const startedAt = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  const errors =
    Object.keys(clientErrors).length === 0 && state.status === "invalid" ? state.errors : clientErrors;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = quoteSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs = fieldErrors(parsed.error);
      setClientErrors(errs);
      const first = Object.keys(errs)[0];
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setClientErrors({});
    fd.set("_elapsed", String(Date.now() - startedAt.current));
    startTransition(() => formAction(fd));
  }

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-[2px] border border-teal-500/30 bg-white p-8 outline-none sm:p-12"
      >
        <CheckCircle2 aria-hidden className="size-8 text-teal-600" strokeWidth={1.5} />
        <h2 className="mt-6 font-serif text-3xl text-navy-950">Request received.</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-slate-600">{state.message}</p>
        <p className="mt-4 max-w-xl text-sm text-slate-500">{quote.qualifier}</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-600">
          Return to homepage <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
    );
  }

  const banner =
    state.status === "invalid" || state.status === "error" || state.status === "rate_limited"
      ? { tone: "error" as const, text: state.message }
      : state.status === "not_configured"
        ? { tone: "info" as const, text: state.message }
        : Object.keys(clientErrors).length
          ? { tone: "error" as const, text: "Please correct the highlighted fields." }
          : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="relative" aria-describedby="form-note">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {banner && (
          <div
            role={banner.tone === "error" ? "alert" : "status"}
            className={cx(
              "mb-8 flex gap-3 rounded-[2px] border p-4 text-sm",
              banner.tone === "error" ? "border-danger/30 bg-danger/5 text-danger" : "border-navy-900/15 bg-paper-100 text-navy-950",
            )}
          >
            {banner.tone === "error" ? (
              <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
            ) : (
              <Info aria-hidden className="mt-0.5 size-4 shrink-0" />
            )}
            <p>{banner.text}</p>
          </div>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mb-10 flex flex-col gap-2 border-l border-teal-500/60 pl-5 text-sm text-slate-600">
        <p className="font-medium text-navy-950">About 3 minutes. Details can be approximate.</p>
        <p>
          Not sure yet? Choose &ldquo;Not sure yet&rdquo; or &ldquo;To be determined&rdquo; — we&apos;ll scope the rest
          with you before quoting.
        </p>
        {trustSignals.length > 0 && <p className="text-xs text-slate-500">{trustSignals.join(" · ")}</p>}
      </div>

      <fieldset>
        <legend className="eyebrow text-slate-500">01 · About you</legend>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <TextField name="fullName" label="Full name" required autoComplete="name" error={errors.fullName} />
          <TextField name="workEmail" label="Work email" type="email" required autoComplete="email" error={errors.workEmail} />
          <TextField name="company" label="Company" required autoComplete="organization" error={errors.company} />
          <TextField name="jobTitle" label="Job title" required autoComplete="organization-title" error={errors.jobTitle} />
        </div>
      </fieldset>

      <fieldset className="mt-12 border-t border-navy-900/10 pt-10">
        <legend className="eyebrow float-left w-full text-slate-500">02 · Data requirements</legend>
        <div className="clear-both grid gap-6 pt-6 sm:grid-cols-2">
          <SelectField name="dataType" label="Data type" required options={dataTypeOptions} error={errors.dataType} />
          <TextField
            name="indication"
            label="Target indication / cohort"
            required
            placeholder="e.g. Non-small cell lung cancer, adults 40+"
            hint="A working definition is fine — we'll refine it with you."
            error={errors.indication}
          />
          <SelectField name="datasetSize" label="Estimated dataset size" required options={datasetSizeOptions} error={errors.datasetSize} />
          <SelectField name="intendedUse" label="Intended use" required options={intendedUseOptions} error={errors.intendedUse} />
          <SelectField name="timeline" label="Target timeline" options={timelineOptions} error={errors.timeline} placeholder="No timeline yet" />
          <SelectField name="dataFormat" label="Preferred data format" options={formatOptions} error={errors.dataFormat} placeholder="No preference" />
          <TextAreaField
            name="description"
            label="Project description"
            required
            className="sm:col-span-2"
            placeholder="Describe inclusion/exclusion criteria, required variables, modalities, follow-up period, and how the data will be used."
            hint="Do not include patient names, identifiers, medical records, or any protected health information."
            error={errors.description}
          />
        </div>
      </fieldset>

      <div className="mt-10 border-t border-navy-900/10 pt-8">
        <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-teal-600"
          />
          <span>
            I agree that {brand.name} may process the business contact information I provide to respond to this request and
            follow up about it, as described in the{" "}
            <Link href="/privacy" className="text-teal-700 underline underline-offset-2 hover:text-teal-600">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 pl-7 text-xs text-danger">
            {errors.consent}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" disabled={pending} variant="dark" className="w-full sm:w-auto">
            {pending ? (
              <>
                <Loader2 aria-hidden className="size-4 animate-spin" /> Submitting…
              </>
            ) : (
              <>
                Request My Preliminary Quote <ArrowRight aria-hidden className="size-4" />
              </>
            )}
          </Button>
          <p id="form-note" className="max-w-sm text-xs text-slate-500">
            {quote.qualifier}
          </p>
        </div>
      </div>
    </form>
  );
}
