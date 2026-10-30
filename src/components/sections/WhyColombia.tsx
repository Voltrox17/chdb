import { whyColombia } from "@/content/buyer";
import { Container, SectionHeader } from "@/components/ui/primitives";

export function WhyColombia() {
  return (
    <section aria-labelledby="why-colombia-title" className="border-t border-navy-950/10 bg-paper pb-28 sm:pb-36 lg:pb-44">
      <Container>
        <SectionHeader
          index="02"
          label={whyColombia.eyebrow}
          id="why-colombia-title"
          title={whyColombia.headline}
          lead={whyColombia.lead}
          className="pt-28 sm:pt-36 lg:pt-44"
        />

        <div className="mt-20 grid lg:mt-24 lg:grid-cols-12 lg:gap-x-10">
          <p className="label mb-6 text-slate-500 lg:col-span-3 lg:mb-0 lg:pt-8" data-reveal>
            For US teams
          </p>
          <dl className="grid border-t border-navy-950/15 sm:grid-cols-2 lg:col-span-9">
            {whyColombia.points.map((p, i) => (
              <div
                key={p.title}
                data-reveal
                className="border-b border-navy-950/10 py-8 sm:pr-10 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:pl-10 sm:[&:nth-child(even)]:pr-0"
              >
                <dt className="flex items-baseline gap-4">
                  <span className="label text-teal-700">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl font-light text-navy-950">{p.title}</span>
                </dt>
                <dd className="mt-3 pl-9 leading-relaxed text-slate-600">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-slate-500 lg:ml-[calc(25%+0.6rem)]">{whyColombia.footnote}</p>
      </Container>
    </section>
  );
}
