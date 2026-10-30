import { cta } from "@/config/site";
import { governance } from "@/content/home";
import { Container, SectionHeader, TextLink } from "@/components/ui/primitives";

export function Governance() {
  return (
    <section aria-labelledby="governance-title" className="grain relative overflow-hidden bg-navy-900 py-28 text-paper sm:py-36 lg:py-44">
      <div aria-hidden className="hairline-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_35%,transparent)]" />
      <Container>
        <SectionHeader
          index="04"
          tone="light"
          label={governance.eyebrow}
          id="governance-title"
          title={governance.headline}
          lead={governance.supporting}
          aside={
            <TextLink href={cta.governance.href} tone="light">
              {cta.governance.label}
            </TextLink>
          }
        />

        {/* Datasheet */}
        <div className="mt-20 grid lg:mt-24 lg:grid-cols-12 lg:gap-x-10">
          <p className="label mb-6 text-slate-400 lg:col-span-3 lg:mb-0 lg:pt-8" data-reveal>
            What we evaluate
          </p>
          <dl className="grid border-t border-white/15 sm:grid-cols-2 lg:col-span-9">
            {governance.modules.map((m, i) => (
              <div
                key={m.key}
                data-reveal
                className="border-b border-white/10 py-8 sm:pr-10 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:pl-10 sm:[&:nth-child(even)]:pr-0"
              >
                <dt className="flex items-baseline gap-4">
                  <span className="label text-teal-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl font-light">{m.title}</span>
                </dt>
                <dd className="mt-3 pl-9 leading-relaxed text-slate-300">{m.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-slate-400 lg:ml-[calc(25%+0.6rem)]">{governance.footnote}</p>
      </Container>
    </section>
  );
}
