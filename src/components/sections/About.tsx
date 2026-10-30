import { ArrowUpRight } from "lucide-react";
import { contact, leadership } from "@/config/site";
import { about } from "@/content/buyer";
import { ButtonLink, Container, SectionHeader } from "@/components/ui/primitives";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-navy-950/10 bg-paper py-28 sm:py-36 lg:py-44">
      <Container>
        <SectionHeader index="08" label={about.eyebrow} id="about-title" title={about.headline} lead={about.lead} />

        <div className="mt-20 grid gap-y-12 lg:mt-24 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4 lg:col-start-4" data-reveal>
            <p className="label text-teal-700">We are</p>
            <ul className="mt-5 border-t border-navy-950/15">
              {about.are.map((t) => (
                <li key={t} className="border-b border-navy-950/10 py-4 text-navy-950">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9" data-reveal>
            <p className="label text-slate-500">We are not</p>
            <ul className="mt-5 border-t border-navy-950/15">
              {about.areNot.map((t) => (
                <li key={t} className="border-b border-navy-950/10 py-4 text-slate-500">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {leadership.length > 0 && (
          <div className="mt-20 grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
            <p className="label text-slate-500 lg:col-span-3 lg:pt-5">Leadership</p>
            <ul className="grid gap-x-10 border-t border-navy-950/15 sm:grid-cols-2 lg:col-span-9">
              {leadership.map((p) => (
                <li key={p.name} className="border-b border-navy-950/10 py-6" data-reveal>
                  <p className="flex items-center gap-3 font-serif text-2xl text-navy-950">
                    {p.name}
                    {p.linkedinUrl && (
                      <a href={p.linkedinUrl} aria-label={`${p.name} on LinkedIn`} className="text-slate-500 hover:text-teal-700">
                        <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.5} />
                      </a>
                    )}
                  </p>
                  <p className="label mt-2 text-teal-700">{p.role}</p>
                  <p className="mt-3 leading-relaxed text-slate-600">{p.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(contact.calendarUrl || contact.email) && (
          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center lg:ml-[calc(25%+0.6rem)]" data-reveal>
            {contact.calendarUrl && (
              <ButtonLink href={contact.calendarUrl} variant="outline-dark" arrow>
                Book an Introductory Call
              </ButtonLink>
            )}
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="text-sm text-slate-600 underline underline-offset-4 hover:text-navy-950">
                {contact.email}
              </a>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
