import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-14", className)} {...props} />;
}

/*
 * Buttons. Primary actions are solid and neutral (paper on navy, navy on
 * paper) — teal is reserved for signals, never large fills.
 */
type ButtonVariant = "primary" | "secondary" | "dark" | "outline-dark";

const buttonStyles: Record<ButtonVariant, string> = {
  /** Solid paper — primary action on dark surfaces. */
  primary: "bg-paper text-navy-950 hover:bg-white",
  /** Hairline outline — secondary action on dark surfaces. */
  secondary: "border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.04]",
  /** Solid navy — primary action on light surfaces. */
  dark: "bg-navy-950 text-paper hover:bg-navy-800",
  /** Hairline outline — secondary action on light surfaces. */
  "outline-dark": "border border-navy-950/20 text-navy-950 hover:border-navy-950/50",
};

const buttonBase =
  "group inline-flex h-12 items-center justify-center gap-3 rounded-[2px] px-6 text-[0.9rem] font-medium tracking-[-0.005em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

function Arrow() {
  return (
    <ArrowRight
      aria-hidden
      className="size-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
      strokeWidth={1.5}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={cx(buttonBase, buttonStyles[variant], className)}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant }) {
  return <button className={cx(buttonBase, buttonStyles[variant], className)} {...props} />;
}

/** Inline text link with an animated rule. */
export function TextLink({
  href,
  tone = "dark",
  children,
  className,
}: {
  href: string;
  tone?: "dark" | "light";
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center gap-2 text-[0.9rem] font-medium",
        tone === "light" ? "text-paper" : "text-navy-950",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={cx(
            "absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-500 ease-out-soft group-hover:scale-x-50",
            tone === "light" ? "bg-teal-300" : "bg-teal-600",
          )}
        />
      </span>
      <Arrow />
    </Link>
  );
}

export function Eyebrow({ children, tone = "dark", className }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p className={cx("label flex items-center gap-3", tone === "light" ? "text-teal-300" : "text-teal-700", className)}>
      <span aria-hidden className={cx("size-1.5 rounded-full", tone === "light" ? "bg-teal-300" : "bg-teal-600")} />
      {children}
    </p>
  );
}

/**
 * Editorial section header: a left rail with the section index and label,
 * the headline and lead on the right. Establishes one consistent rhythm
 * for every section on the site.
 */
export function SectionHeader({
  index,
  label,
  title,
  lead,
  aside,
  tone = "dark",
  id,
  className,
}: {
  index: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  tone?: "dark" | "light";
  id?: string;
  className?: string;
}) {
  const light = tone === "light";
  return (
    <header className={cx("grid gap-y-8 lg:grid-cols-12 lg:gap-x-10", className)} data-reveal>
      <div
        className={cx(
          "flex items-center gap-4 border-t pt-4 lg:col-span-3 lg:block",
          light ? "border-white/15" : "border-navy-950/15",
        )}
      >
        <p className={cx("label", light ? "text-slate-400" : "text-slate-500")}>§ {index}</p>
        <p className={cx("label lg:mt-2", light ? "text-teal-300" : "text-teal-700")}>{label}</p>
      </div>
      <div className={cx("lg:col-span-9 lg:border-t lg:pt-4", light ? "border-white/15" : "border-navy-950/15")}>
        <div className="grid gap-8 xl:grid-cols-9 xl:gap-10">
          <div className={aside ? "xl:col-span-6" : "xl:col-span-8"}>
            <h2
              id={id}
              className={cx(
                "mt-4 font-serif text-headline font-light text-balance lg:mt-6",
                light ? "text-paper" : "text-navy-950",
              )}
            >
              {title}
            </h2>
            {lead && (
              <p
                className={cx(
                  "mt-7 max-w-2xl text-lead text-pretty",
                  light ? "text-slate-300" : "text-slate-600",
                )}
              >
                {lead}
              </p>
            )}
          </div>
          {aside && <div className="self-end xl:col-span-3">{aside}</div>}
        </div>
      </div>
    </header>
  );
}

/** Abstract brand mark: three source nodes converging on one point. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="none">
      <path d="M6 8 C14 8, 16 16, 24 16 M6 16 L24 16 M6 24 C14 24, 16 16, 24 16" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6" cy="8" r="1.9" fill="currentColor" />
      <circle cx="6" cy="16" r="1.9" fill="currentColor" />
      <circle cx="6" cy="24" r="1.9" fill="currentColor" />
      <circle cx="25" cy="16" r="3.4" className="fill-teal-400" />
    </svg>
  );
}
