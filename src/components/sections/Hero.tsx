import { Check } from "lucide-react";
import { brand, cta, quote } from "@/config/site";
import { advantages, hero, quoteProcess } from "@/content/home";
import { trustSignals } from "@/content/buyer";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { QuoteDial } from "@/components/graphics/QuoteDial";

export function Hero() {
  const h = quote.turnaroundHours;

  return (
    <section aria-labelledby="hero-title" className="grain relative overflow-hidden bg-navy-950 text-paper">
      <div
        aria-hidden
        className="hairline-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_70%_at_75%_45%,black,transparent)]"
      />
      <div aria-hidden className="absolute -right-24 top-40 -z-10 size-[40rem] rounded-full bg-teal-500/[0.08] blur-3xl" />

      <Container className="pt-32 sm:pt-40 lg:pt-44">
        {/* Masthead */}
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
          <Eyebrow tone="light">{hero.eyebrow}</Eyebrow>
          <p className="label hidden text-teal-200 sm:block">{hero.hook.label}</p>
        </div>

        <div className="grid items-center gap-16 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
          {/* Message */}
          <div className="lg:col-span-7">
            <h1
              id="hero-title"
              className="font-serif text-[clamp(2.75rem,1.3rem+4.2vw,5.4rem)] font-light leading-[0.98] tracking-[-0.032em] text-balance"
            >
              <span className="block">{hero.headline[0]}</span>
              <span className="block italic text-teal-200">{hero.headline[1]}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lead text-slate-300 text-pretty">{hero.subheadline}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={cta.primary.href} arrow>
                {cta.primary.label}
              </ButtonLink>
              <ButtonLink href={cta.secondary.href} variant="secondary">
                {cta.secondary.label}
              </ButtonLink>
            </div>
            <ul aria-label="Quote terms" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] text-slate-400">
              {trustSignals.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check aria-hidden className="size-3.5 text-teal-300" strokeWidth={2} />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-12 max-w-xl border-l border-teal-400/50 pl-5">
              <p className="text-[0.95rem] font-medium text-paper">{hero.supporting}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{quote.qualifier}</p>
            </div>
          </div>

          {/* The 36-hour instrument */}
          <aside aria-label={hero.hook.label} className="lg:col-span-5">
            <div className="figure-frame relative border border-white/12 bg-navy-900/60 text-slate-400 shadow-[0_40px_120px_-40px_rgba(47,150,141,0.35)] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
                <p className="label text-slate-400">
                  {brand.name} · {hero.hook.title}
                </p>
                <span className="label rounded-full border border-teal-300/30 px-2.5 py-1 text-teal-200">Non-binding</span>
              </div>

              <div className="px-6 pt-6 sm:px-10">
                <QuoteDial hours={h} className="mx-auto h-auto w-full max-w-[22rem] text-slate-300" />
              </div>

              <div className="px-6 pb-2 sm:px-8">
                <p className="label text-slate-400">Included in your preliminary quote</p>
                <ul className="mt-3 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2">
                  {quoteProcess.includes.map((item, i) => (
                    <li
                      key={item.title}
                      className="flex items-baseline gap-3 border-b border-white/10 py-3 text-sm text-paper sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:pl-4"
                    >
                      <span className="font-mono text-[0.68rem] text-teal-300">§{i + 1}</span>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6 pt-5 sm:px-8">
                <p className="font-serif text-lg italic leading-snug text-paper">{hero.hook.example}</p>
                <p className="mt-2 text-xs text-slate-400">{hero.hook.executiveLine} For qualified requests.</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      {/* Advantages strip */}
      <div className="border-t border-white/10">
        <Container>
          <ol aria-label="Why teams work with us" className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {advantages.map((a, i) => (
              <li
                key={a.title}
                className="bg-navy-950 py-6 sm:py-8 sm:pr-6 sm:[&:nth-child(even)]:pl-6 sm:last:col-span-2 lg:px-6 lg:first:!pl-0 lg:last:col-span-1 lg:last:pr-0 lg:[&:nth-child(even)]:pl-6"
              >
                <p className="label text-teal-300">0{i + 1}</p>
                <p className="mt-3 font-medium text-paper">{a.title}</p>
                <p className="mt-1 text-sm leading-snug text-slate-400">{a.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    </section>
  );
}
