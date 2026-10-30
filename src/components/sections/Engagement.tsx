import { engagement } from "@/content/buyer";
import { Container, SectionHeader } from "@/components/ui/primitives";

export function Engagement() {
  return (
    <section
      id="engagement"
      aria-labelledby="engagement-title"
      className="relative bg-paper-100 py-28 sm:py-36 lg:py-44"
    >
      <div aria-hidden className="hairline-grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_40%)]" />
      <Container className="relative">
        <SectionHeader
          index="06"
          label={engagement.eyebrow}
          id="engagement-title"
          title={engagement.headline}
          lead={engagement.lead}
        />

        {/* Stage table */}
        <div className="mt-20 grid gap-y-6 lg:mt-24 lg:grid-cols-12 lg:gap-x-10">
          <p className="label text-slate-500 lg:col-span-3 lg:pt-5" data-reveal>
            Stages &amp; decision points
          </p>
          <div className="lg:col-span-9" data-reveal>
            <div className="hidden grid-cols-12 gap-6 border-b border-navy-950/25 pb-3 md:grid">
              <p className="label col-span-4 text-slate-500">Stage</p>
              <p className="label col-span-5 text-slate-500">You receive</p>
              <p className="label col-span-3 text-slate-500">Your decision</p>
            </div>
            <ol>
              {engagement.stages.map((s, i) => (
                <li
                  key={s.title}
                  className="grid gap-2 border-b border-navy-950/10 py-6 md:grid-cols-12 md:gap-6"
                >
                  <p className="flex items-baseline gap-4 md:col-span-4">
                    <span className="label text-teal-700">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-xl text-navy-950">{s.title}</span>
                  </p>
                  <p className="pl-9 text-[0.95rem] leading-relaxed text-slate-600 md:col-span-5 md:pl-0">{s.get}</p>
                  <p className="pl-9 text-[0.95rem] leading-relaxed text-navy-950 md:col-span-3 md:pl-0">
                    <span className="label mr-2 text-slate-500 md:hidden">Decide</span>
                    {s.decide}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">{engagement.timingNote}</p>
          </div>
        </div>

        {/* Pricing drivers */}
        <div className="mt-20 grid gap-y-6 lg:mt-24 lg:grid-cols-12 lg:gap-x-10" data-reveal>
          <p className="label text-slate-500 lg:col-span-3 lg:pt-5">{engagement.pricingHeading}</p>
          <ul className="flex flex-wrap gap-2 border-t border-navy-950/15 pt-5 lg:col-span-9">
            {engagement.pricingDrivers.map((d) => (
              <li key={d} className="border border-navy-950/15 bg-paper px-4 py-2 text-sm text-slate-700">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
