import type { ReactNode } from "react";
import { Container } from "./primitives";
import { PageHeader } from "./PageHeader";

/** Shared shell for legal pages that still await counsel-approved text. */
export function LegalPlaceholder({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} />
      <section className="bg-paper py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div role="note" className="rounded-[2px] border border-amber-600/30 bg-amber-50 p-5 text-sm text-amber-900">
            <strong className="font-medium">Placeholder.</strong> This page is a draft outline and has not been reviewed
            by legal counsel. It must be replaced with approved text before public launch.
          </div>
          <div className="mt-10 space-y-8 leading-relaxed text-slate-700 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-navy-950 [&_p]:mt-3">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
