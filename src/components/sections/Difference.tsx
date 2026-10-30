import { difference } from "@/content/home";
import { Container, SectionHeader } from "@/components/ui/primitives";

export function Difference() {
  return (
    <section aria-labelledby="difference-title" className="bg-paper py-28 sm:py-36 lg:py-44">
      <Container>
        <SectionHeader
          index="01"
          label={difference.eyebrow}
          id="difference-title"
          title={difference.headline}
          lead={difference.subheadline}
        />

        {/* Problem ledger */}
        <div className="mt-20 grid gap-y-6 lg:mt-28 lg:grid-cols-12 lg:gap-x-10" data-reveal>
          <p className="label text-slate-500 lg:col-span-3 lg:pt-5">Where sourcing breaks down</p>
          <ul className="grid border-t border-navy-950/15 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-5">
            {difference.problems.map((p, i) => (
              <li
                key={p}
                className="flex items-baseline gap-3 border-b border-navy-950/10 py-4 pr-4 text-[0.92rem] leading-snug text-slate-600"
              >
                <span className="font-mono text-[0.68rem] text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Answers */}
        <div className="mt-20 grid gap-y-6 lg:mt-28 lg:grid-cols-12 lg:gap-x-10">
          <p className="label text-teal-700 lg:col-span-3 lg:pt-10" data-reveal>
            How we answer
          </p>
          <ol className="lg:col-span-9">
            {difference.items.map((item) => (
              <li
                key={item.n}
                data-reveal
                className="group grid gap-4 border-t border-navy-950/15 py-10 last:border-b sm:grid-cols-12 sm:gap-8 sm:py-12"
              >
                <span
                  aria-hidden
                  className="font-serif text-5xl font-light leading-none text-slate-300 transition-colors duration-500 group-hover:text-teal-500 sm:col-span-2 sm:text-6xl"
                >
                  {item.n}
                </span>
                <h3 className="font-serif text-title text-navy-950 sm:col-span-5">
                  <span className="sr-only">{item.n}. </span>
                  {item.title}
                </h3>
                <p className="max-w-md leading-relaxed text-slate-600 sm:col-span-5 sm:pt-1.5">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
