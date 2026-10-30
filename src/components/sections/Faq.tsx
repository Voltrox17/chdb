import { Plus } from "lucide-react";
import { faq } from "@/content/buyer";
import { Container, SectionHeader } from "@/components/ui/primitives";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper py-28 sm:py-36 lg:py-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container>
        <SectionHeader index="07" label={faq.eyebrow} id="faq-title" title={faq.headline} />

        <div className="mt-20 grid lg:mt-24 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-9 lg:col-start-4">
            <div className="border-t border-navy-950/15">
              {faq.items.map((item, i) => (
                <details key={item.q} className="group border-b border-navy-950/10" data-reveal>
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                    <span className="label pt-2 text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-serif text-xl text-navy-950 transition-colors group-hover:text-teal-700 sm:text-2xl">
                      {item.q}
                    </span>
                    <Plus
                      aria-hidden
                      className="mt-1.5 size-5 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-45"
                      strokeWidth={1.25}
                    />
                  </summary>
                  <p className="max-w-2xl pb-8 pl-10 leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
