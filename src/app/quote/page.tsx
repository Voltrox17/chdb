import type { Metadata } from "next";
import { Clock, FileText, Lock, ShieldAlert } from "lucide-react";
import { brand, contact, policies, quote } from "@/config/site";
import { quoteProcess } from "@/content/home";
import { Container } from "@/components/ui/primitives";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: `Get Your ${quote.turnaroundHours}-Hour Quote`,
  description: `Request a preliminary quote for custom imaging, EHR, or multimodal clinical datasets. Qualified requests get a response within ${quote.turnaroundHours} hours.`,
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        compact
        eyebrow="Request a Quote"
        title={
          <>
            Tell us the cohort. <span className="italic text-teal-200">We&apos;ll map the way forward.</span>
          </>
        }
        lead={`Share your data requirements below. Qualified, sufficiently specified requests receive a preliminary commercial response within ${quote.turnaroundHours} hours.`}
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          <aside className="space-y-10 lg:col-span-4 lg:border-l lg:border-navy-900/10 lg:pl-10">
            <div>
              <Clock aria-hidden className="size-5 text-teal-600" strokeWidth={1.5} />
              <h2 className="mt-4 font-serif text-xl text-navy-950">What happens next</h2>
              <ol className="mt-4 space-y-4 text-sm text-slate-600">
                {quoteProcess.steps.map((s) => (
                  <li key={s.title}>
                    <span className="font-mono text-xs text-teal-700">{s.hour}</span>
                    <p className="font-medium text-navy-950">{s.title}</p>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <FileText aria-hidden className="size-5 text-teal-600" strokeWidth={1.5} />
              <h2 className="mt-4 font-serif text-xl text-navy-950">Your preliminary quote includes</h2>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-600 marker:text-teal-600">
                {quoteProcess.includes.map((i) => (
                  <li key={i.title}>{i.title}</li>
                ))}
              </ul>
            </div>

            {(policies.requestConfidentiality || policies.noObligationQuote) && (
              <div>
                <Lock aria-hidden className="size-5 text-teal-600" strokeWidth={1.5} />
                <h2 className="mt-4 font-serif text-xl text-navy-950">Your information</h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                  {policies.requestConfidentiality && (
                    <li>
                      Your company name and project details are not shared with source institutions without your
                      agreement.
                    </li>
                  )}
                  {policies.mutualNdaAvailable && <li>We&apos;re willing to sign a mutual NDA before detailed scoping.</li>}
                  {policies.noObligationQuote && <li>Requesting a quote creates no obligation.</li>}
                </ul>
              </div>
            )}

            {contact.calendarUrl && (
              <p className="text-sm text-slate-600">
                Prefer to talk first?{" "}
                <a className="text-teal-700 underline underline-offset-2" href={contact.calendarUrl}>
                  Book an introductory call
                </a>
              </p>
            )}

            <div className="border border-navy-900/10 bg-paper-100 p-5">
              <ShieldAlert aria-hidden className="size-5 text-slate-500" strokeWidth={1.5} />
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Please do not share patient identifiers, medical records, or protected health information through this
                form. {brand.name} only needs a description of your requirements.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{quote.qualifier}</p>
            </div>

            {contact.email && (
              <p className="text-sm text-slate-600">
                Prefer email?{" "}
                <a className="text-teal-700 underline underline-offset-2" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
