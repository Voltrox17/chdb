import { brand, cta, quote } from "@/config/site";
import { quoteProcess } from "@/content/home";
import { ButtonLink, Container, SectionHeader } from "@/components/ui/primitives";

const H = quote.turnaroundHours;

/** A 0→H hour ruler: minor tick each hour, major tick every 6 hours. */
function HourRuler() {
  return (
    <div aria-hidden className="relative h-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal-500 via-teal-500/60 to-teal-500" />
      {Array.from({ length: H + 1 }).map((_, i) => {
        const major = i % 6 === 0;
        const labeled = i === 0 || i === H;
        return (
          <div
            key={i}
            className={major ? "absolute top-0 h-3 w-px bg-navy-950/50" : "absolute top-0 h-1.5 w-px bg-navy-950/20"}
            style={{ left: `${(i / H) * 100}%` }}
          >
            {labeled && (
              <span
                className={
                  "label absolute top-4 whitespace-nowrap normal-case text-slate-500 " +
                  (i === 0 ? "left-0" : i === H ? "right-0" : "-translate-x-1/2")
                }
              >
                {i}h
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function QuoteExperience() {
  return (
    <section id="quote-process" aria-labelledby="quote-process-title" className="bg-paper py-28 sm:py-36 lg:py-44">
      <Container>
        <SectionHeader
          index="05"
          label={quoteProcess.eyebrow}
          id="quote-process-title"
          title={quoteProcess.headline}
          lead={quoteProcess.supporting}
        />

        {/* Timeline */}
        <div className="mt-20 grid gap-y-8 lg:mt-28 lg:grid-cols-12 lg:gap-x-10" data-reveal>
          <p className="label text-slate-500 lg:col-span-3">Request to response</p>
          <div className="lg:col-span-9">
            <div className="hidden md:block">
              <HourRuler />
            </div>
            <ol className="grid gap-10 md:mt-8 md:grid-cols-3 md:gap-10">
              {quoteProcess.steps.map((s, i) => (
                <li key={s.title} className="relative border-l border-navy-950/15 pl-6 md:border-l-0 md:pl-0 md:last:text-right md:[&:last-child>p:last-child]:ml-auto">
                  <p className="label normal-case text-teal-700">
                    {String(i + 1).padStart(2, "0")} — {s.hour}
                  </p>
                  <h3 className="mt-3 font-serif text-title text-navy-950">{s.title}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-slate-600">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Quote document */}
        <div className="mt-24 grid gap-12 lg:mt-32 lg:grid-cols-12 lg:gap-x-10">
          <aside className="flex flex-col gap-10 lg:col-span-3" data-reveal>
            <div>
              <p className="label text-slate-500">{H} hours does not mean</p>
              <ul className="mt-5 space-y-3 border-t border-navy-950/10 pt-5 text-sm text-slate-600">
                {quoteProcess.notIncluded.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-slate-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink href={cta.primary.href} variant="dark" arrow className="self-start">
              {cta.primary.label}
            </ButtonLink>
          </aside>

          <figure className="lg:col-span-9" data-reveal>
            <div className="relative bg-white shadow-[0_1px_0_rgba(13,23,38,0.05),0_40px_80px_-40px_rgba(13,23,38,0.35)] ring-1 ring-navy-950/10">
              <div className="grid gap-6 border-b border-navy-950/10 px-6 py-7 sm:grid-cols-3 sm:px-10">
                <div className="sm:col-span-2">
                  <p className="label text-slate-500">{brand.name} · Document</p>
                  <p className="mt-2 font-serif text-2xl font-light text-navy-950 sm:text-3xl">Preliminary Quotation</p>
                </div>
                <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-1 sm:gap-2 sm:text-right">
                  <div>
                    <dt className="label text-slate-500">Status</dt>
                    <dd className="text-navy-950">Non-binding</dd>
                  </div>
                  <div>
                    <dt className="label text-slate-500">Issued</dt>
                    <dd className="text-navy-950">≤ {H}h, qualified requests</dd>
                  </div>
                </dl>
              </div>
              <dl>
                {quoteProcess.includes.map((item, i) => (
                  <div
                    key={item.title}
                    className="grid gap-1 border-b border-navy-950/[0.07] px-6 py-6 last:border-b-0 sm:grid-cols-12 sm:gap-6 sm:px-10"
                  >
                    <dt className="flex items-baseline gap-4 sm:col-span-5">
                      <span className="font-mono text-xs text-teal-600">§{i + 1}</span>
                      <span className="font-medium text-navy-950">{item.title}</span>
                    </dt>
                    <dd className="text-slate-600 sm:col-span-7">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figcaption className="mt-4 flex items-baseline gap-4 text-xs text-slate-500">
              <span className="label shrink-0 whitespace-nowrap text-slate-500">Fig. 1</span>
              <span>Illustrative structure of a preliminary quotation. Contents vary by request.</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
