import Link from "next/link";
import { brand, contact, footerLinks, quote } from "@/config/site";
import { BrandMark, Container } from "@/components/ui/primitives";
import { CopyrightYear } from "./CopyrightYear";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-400">
      <Container className="pt-20">
        <p className="max-w-3xl font-serif text-3xl font-light leading-tight text-paper sm:text-4xl">
          {brand.tagline}
        </p>
      </Container>

      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3 text-paper">
            <BrandMark className="size-7" />
            <span className="font-semibold tracking-[0.14em]">{brand.name}</span>
            <span aria-hidden className="h-4 w-px bg-white/20" />
            <span className="text-[0.8rem] text-slate-400">{brand.descriptor}</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            {brand.name} coordinates sourcing and licensing opportunities for de-identified clinical datasets originating
            from healthcare institutions in Colombia. Source institutions remain the custodians of their data.
          </p>
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="mt-4 inline-block text-sm text-teal-300 hover:text-teal-200">
              {contact.email}
            </a>
          )}
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <p className="label text-slate-400">Navigate</p>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label text-slate-400">Notice</p>
          <p className="mt-5 text-xs leading-relaxed">{quote.qualifier}</p>
          <p className="mt-3 text-xs leading-relaxed">
            Data standards referenced on this site are assessed per project and are not company certifications.
          </p>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:justify-between">
        <p>
          © <CopyrightYear /> {brand.legalName}. All rights reserved.
        </p>
        {contact.location && <p>{contact.location}</p>}
      </Container>
    </footer>
  );
}
