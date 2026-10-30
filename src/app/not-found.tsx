import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Page Not Found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="grain relative overflow-hidden bg-navy-950 text-paper">
      <Container className="flex min-h-[70vh] flex-col justify-center pb-20 pt-40">
        <Eyebrow tone="light">404</Eyebrow>
        <h1 className="mt-6 font-serif text-headline font-light">This page could not be found.</h1>
        <p className="mt-4 max-w-lg text-slate-300">The link may be outdated, or the page may have moved.</p>
        <div className="mt-10">
          <ButtonLink href="/" variant="secondary">
            Return to homepage
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
