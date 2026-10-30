import type { Metadata } from "next";
import { FileCheck2, Gauge, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";
import { certifications, cta } from "@/config/site";
import { governancePage as g } from "@/content/governance";
import { ButtonLink, Container, SectionHeader, TextLink } from "@/components/ui/primitives";
import { PageHeader } from "@/components/ui/PageHeader";
import { HeroNetworkDiagram } from "@/components/graphics/HeroNetworkDiagram";

export const metadata: Metadata = {
  title: "Data Governance",
  description:
    "How we approach data quality, recognized data standards, privacy, de-identification, and licensing for clinical dataset sourcing.",
  alternates: { canonical: "/data-governance" },
};

const icons: Record<string, LucideIcon> = {
  quality: Gauge,
  standards: Workflow,
  privacy: ShieldCheck,
  licensing: FileCheck2,
};

export default function DataGovernancePage() {
  return (
    <>
      <PageHeader eyebrow={g.eyebrow} title={g.title} lead={g.lead} />

      {/* § 01 Role */}
      <section aria-labelledby="role-title" className="bg-paper py-24 sm:py-32">
        <Container>
          <SectionHeader index="01" label={g.role.heading} id="role-title" title={g.role.title} />
          <div className="mt-14 grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
            <div className="space-y-6 text-lead text-slate-700 lg:col-span-8 lg:col-start-4" data-reveal>
              {g.role.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <figure className="lg:col-span-9 lg:col-start-4" data-reveal>
              <div className="figure-frame grain relative overflow-hidden bg-navy-950 px-4 py-6 text-slate-400 sm:px-10 sm:py-10">
                <HeroNetworkDiagram className="mx-auto h-auto w-full max-w-xl" />
              </div>
              <figcaption className="mt-4 flex items-baseline gap-4 text-xs text-slate-500">
                <span className="label shrink-0 whitespace-nowrap text-slate-500">Fig. 1</span>
                <span>One coordination layer between your team and multiple clinical data sources.</span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* § 02 Pillars */}
      <section aria-labelledby="pillars-title" className="bg-paper-100 py-24 sm:py-32">
        <Container>
          <SectionHeader index="02" label="What we evaluate" id="pillars-title" title={g.pillarsTitle} />
          <div className="mt-14">
            {g.pillars.map((p, i) => {
              const Icon = icons[p.key];
              return (
                <article
                  key={p.key}
                  id={p.key}
                  data-reveal
                  className="grid gap-y-6 border-t border-navy-950/15 py-12 lg:grid-cols-12 lg:gap-x-10"
                >
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3">
                      <span className="label text-teal-700">{String(i + 1).padStart(2, "0")}</span>
                      <Icon aria-hidden className="size-4 text-teal-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 font-serif text-title font-light text-navy-950">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                  </div>
                  <ul className="grid gap-x-10 border-t border-navy-950/15 sm:grid-cols-2 lg:col-span-9 lg:border-t-0">
                    {p.points.map((pt, j) => (
                      <li
                        key={pt}
                        className="flex gap-4 border-b border-navy-950/10 py-5 text-[0.95rem] leading-relaxed text-slate-700"
                      >
                        <span className="label pt-1 text-slate-500">{String.fromCharCode(97 + j)}</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* § 03 Process */}
      <section aria-labelledby="process-title" className="grain relative overflow-hidden bg-navy-900 py-24 text-paper sm:py-32">
        <Container>
          <SectionHeader index="03" tone="light" label="Process" id="process-title" title={g.process.heading} />
          <ol className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:ml-[calc(25%+0.6rem)] lg:grid-cols-5">
            {g.process.steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                className="border-b border-white/10 py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="label text-teal-300">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* § 04 Transparency */}
      <section aria-labelledby="claims-title" className="bg-paper py-24 sm:py-32">
        <Container>
          <SectionHeader index="04" label="Transparency" id="claims-title" title={g.transparency.heading} />
          <div className="mt-14 grid lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-8 lg:col-start-4" data-reveal>
              <p className="text-lead text-slate-700">{g.transparency.body}</p>
              <dl className="mt-10 grid border-y border-navy-950/15 py-5 sm:grid-cols-3 sm:gap-6">
                <dt className="label pt-1 text-slate-500">Certifications &amp; attestations</dt>
                <dd className="mt-2 text-sm text-slate-700 sm:col-span-2 sm:mt-0">
                  {certifications.length === 0 ? (
                    "None are claimed at this time."
                  ) : (
                    <ul className="space-y-2">
                      {certifications.map((c) => (
                        <li key={c.name}>
                          <a href={c.evidenceUrl} className="text-teal-700 underline underline-offset-2">
                            {c.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </dd>
              </dl>
              <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                <ButtonLink href={cta.primary.href} variant="dark" arrow>
                  {cta.primary.label}
                </ButtonLink>
                <TextLink href="/#faq">Read buyer questions</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
