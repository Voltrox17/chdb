import type { ReactNode } from "react";
import { Container, Eyebrow, cx } from "./primitives";

/**
 * Inner-page masthead. `compact` keeps conversion pages (the quote form)
 * close to the fold, especially on mobile.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="grain relative overflow-hidden bg-navy-950 text-paper">
      <div
        aria-hidden
        className="hairline-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_80%_at_30%_20%,black,transparent)]"
      />
      <Container className={compact ? "pb-12 pt-28 sm:pb-16 sm:pt-36" : "pb-20 pt-36 sm:pb-24 sm:pt-44"}>
        <div className="border-b border-white/10 pb-5">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </div>
        <div className={cx("grid gap-6 lg:grid-cols-12 lg:gap-10", compact ? "mt-8 sm:mt-10" : "mt-12")}>
          <h1
            className={cx(
              "font-serif font-light text-balance lg:col-span-8",
              compact ? "text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] leading-[1.04] tracking-[-0.025em]" : "text-headline",
            )}
          >
            {title}
          </h1>
          {lead && (
            <p className={cx("self-end text-slate-300 text-pretty lg:col-span-4", compact ? "text-[0.95rem] leading-relaxed" : "text-lead")}>
              {lead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
