import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/components/ui/primitives";

const control =
  "mt-2 block w-full rounded-[2px] border bg-white px-4 py-3 text-[0.95rem] text-navy-950 placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/30";

function stateClass(error?: string) {
  return error ? "border-danger focus:border-danger" : "border-navy-900/15 hover:border-navy-900/30 focus:border-teal-500";
}

type BaseProps = {
  name: string;
  label: string;
  error?: string;
  hint?: ReactNode;
  required?: boolean;
  className?: string;
};

function Shell({ name, label, error, hint, required, className, children }: BaseProps & { children: ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-navy-950">
        {label}
        {required ? (
          <span aria-hidden className="ml-0.5 text-teal-600">
            *
          </span>
        ) : (
          <span className="ml-2 text-xs font-normal text-slate-500">Optional</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${name}-hint`} className="mt-1.5 text-xs text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

function describedBy(name: string, error?: string, hint?: ReactNode) {
  return error ? `${name}-error` : hint ? `${name}-hint` : undefined;
}

export function TextField({
  name,
  label,
  error,
  hint,
  required,
  className,
  ...rest
}: BaseProps & Omit<ComponentProps<"input">, "name">) {
  return (
    <Shell name={name} label={label} error={error} hint={hint} required={required} className={className}>
      <input
        id={name}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error, hint)}
        className={cx(control, stateClass(error))}
        {...rest}
      />
    </Shell>
  );
}

export function SelectField({
  name,
  label,
  error,
  hint,
  required,
  className,
  options,
  placeholder = "Select…",
}: BaseProps & { options: readonly string[]; placeholder?: string }) {
  return (
    <Shell name={name} label={label} error={error} hint={hint} required={required} className={className}>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error, hint)}
        className={cx(control, stateClass(error), "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 fill=%22none%22 stroke=%22%236b7a90%22 stroke-width=%221.5%22><path d=%22M2 4.5l4 4 4-4%22/></svg>')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10")}
      >
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Shell>
  );
}

export function TextAreaField({
  name,
  label,
  error,
  hint,
  required,
  className,
  ...rest
}: BaseProps & Omit<ComponentProps<"textarea">, "name">) {
  return (
    <Shell name={name} label={label} error={error} hint={hint} required={required} className={className}>
      <textarea
        id={name}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error, hint)}
        className={cx(control, stateClass(error), "min-h-40 resize-y leading-relaxed")}
        {...rest}
      />
    </Shell>
  );
}
