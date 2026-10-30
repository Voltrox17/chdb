import { cta } from "@/config/site";
import { capabilities } from "@/content/home";
import { ButtonLink, Container, SectionHeader } from "@/components/ui/primitives";
import { ModalityGlyph } from "@/components/graphics/ModalityGlyph";

type Kind = "imaging" | "ehr" | "multimodal" | "cohorts";

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="relative bg-paper-100 py-28 sm:py-36 lg:py-44">
      <div aria-hidden className="hairline-grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_45%)]" />
      <Container className="relative">
        <SectionHeader
          index="03"
          label={capabilities.eyebrow}
          id="capabilities-title"
          title={capabilities.headline}
          aside={<p className="text-sm leading-relaxed text-slate-600">{capabilities.note}</p>}
        />

        <div className="mt-20 grid gap-px border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:mt-24">
          {capabilities.items.map((item, i) => (
            <article
              key={item.key}
              data-reveal
              className="group relative flex flex-col bg-paper p-8 transition-colors duration-500 hover:bg-white sm:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <ModalityGlyph
                  kind={item.key as Kind}
                  className="h-20 w-auto text-navy-800 transition-colors duration-500 group-hover:text-navy-950"
                />
                <span className="label text-slate-500">{String(i + 1).padStart(2, "0")} / 04</span>
              </div>
              <h3 className="mt-12 font-serif text-title text-navy-950">{item.title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-slate-600">{item.body}</p>
              <div aria-hidden className="min-h-10 flex-1" />
              <ul
                className="flex flex-wrap gap-x-5 gap-y-1 border-t border-navy-950/10 pt-5"
                aria-label={`${item.title} examples`}
              >
                {item.tags.map((t) => (
                  <li key={t} className="label text-slate-500">
                    {t}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-teal-500 transition-transform duration-700 ease-out-soft group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8" data-reveal>
          <ButtonLink href={cta.customDataset.href} variant="dark" arrow>
            {cta.customDataset.label}
          </ButtonLink>
          <p className="text-sm text-slate-500">Availability is confirmed per project through feasibility review.</p>
        </div>
      </Container>
    </section>
  );
}
