import { contact, cta, quote } from "@/config/site";
import { finalCta } from "@/content/home";
import { trustSignals } from "@/content/buyer";
import { ButtonLink, Container } from "@/components/ui/primitives";

export function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-title" className="grain relative overflow-hidden bg-navy-950 text-paper">
      <div
        aria-hidden
        className="hairline-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_80%_at_20%_60%,black,transparent)]"
      />
      <Container className="py-28 sm:py-36 lg:py-44">
        <div className="grid gap-14 border-t border-white/15 pt-10 lg:grid-cols-12 lg:gap-10" data-reveal>
          <h2 id="final-cta-title" className="font-serif text-headline font-light text-balance lg:col-span-8">
            <span className="block">{finalCta.headline[0]}</span>
            <span className="block italic text-teal-200">{finalCta.headline[1]}</span>
          </h2>
          <div className="flex flex-col justify-end lg:col-span-4">
            <p className="text-lead text-slate-300">{finalCta.supporting}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={cta.primary.href} arrow>
                {cta.primary.label}
              </ButtonLink>
              {contact.calendarUrl && (
                <ButtonLink href={contact.calendarUrl} variant="secondary">
                  Talk to Us First
                </ButtonLink>
              )}
            </div>
            <p className="mt-5 text-[0.8rem] text-slate-400">{trustSignals.join(" · ")}</p>
            <p className="mt-6 text-xs leading-relaxed text-slate-400">{quote.qualifier}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
