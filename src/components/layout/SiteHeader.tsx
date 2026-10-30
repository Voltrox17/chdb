"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, cta, nav } from "@/config/site";
import { BrandMark, ButtonLink, Container, cx } from "@/components/ui/primitives";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  // On the quote page the header CTA would link to the page itself.
  const onQuotePage = usePathname() === cta.primary.href;

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link href="/" onClick={close} className="flex items-center gap-3.5 text-paper" aria-label={`${brand.name} home`}>
          <BrandMark className="size-7" />
          <span className="text-[1rem] font-semibold tracking-[0.14em]">{brand.name}</span>
          <span aria-hidden className="hidden h-4 w-px bg-white/20 sm:block" />
          <span className="hidden text-[0.8rem] text-slate-400 sm:block">{brand.descriptor}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.85rem] text-slate-300 transition-colors hover:text-paper"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-teal-300 transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
              />
            </Link>
          ))}
          {!onQuotePage && (
            <ButtonLink href={cta.primary.href} variant="secondary" className="h-10 px-5 text-[0.85rem]">
              {cta.primary.label}
            </ButtonLink>
          )}
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" strokeWidth={1.25} /> : <Menu className="size-6" strokeWidth={1.25} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy-950 md:hidden"
      >
        <Container className="flex flex-col py-8">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-baseline gap-4 border-b border-white/10 py-6 font-serif text-3xl font-light text-paper"
              >
                <span className="label text-slate-400">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          {!onQuotePage && (
            <div className="mt-10" onClick={close}>
              <ButtonLink href={cta.primary.href} arrow className="w-full">
                {cta.primary.label}
              </ButtonLink>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}
