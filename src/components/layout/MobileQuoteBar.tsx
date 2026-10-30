"use client";

import { useEffect, useState } from "react";
import { cta, quote } from "@/config/site";
import { ButtonLink, cx } from "@/components/ui/primitives";

/**
 * Sticky quote CTA for small screens. Appears after the hero scrolls away and
 * hides again while the closing CTA or footer is on screen, so it never
 * duplicates a visible button.
 */
export function MobileQuoteBar() {
  const [pastHero, setPastHero] = useState(false);
  const [endVisible, setEndVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [document.getElementById("final-cta"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => el !== null,
    );
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setEndVisible(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = pastHero && !endVisible;

  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={cx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-500 ease-out-soft md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center gap-3">
        <p className="flex-1 text-xs leading-snug text-slate-300">
          Preliminary quote in {quote.turnaroundHours} hours
          <span className="block text-slate-400">For qualified requests</span>
        </p>
        <ButtonLink href={cta.primary.href} arrow className="h-11 shrink-0 px-4 text-[0.85rem]">
          Get Quote
        </ButtonLink>
      </div>
    </div>
  );
}
