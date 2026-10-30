/**
 * Bespoke line glyphs for each data capability. Abstract scientific
 * schematics — not product screenshots, not data.
 */
type Kind = "imaging" | "ehr" | "multimodal" | "cohorts";

const stroke = { stroke: "currentColor", strokeWidth: 1.1, fill: "none" } as const;

export function ModalityGlyph({ kind, className }: { kind: Kind; className?: string }) {
  return (
    <svg viewBox="0 0 96 64" aria-hidden className={className}>
      {kind === "imaging" && (
        <g>
          {/* Axial slice: concentric contours with a scan plane. */}
          <ellipse cx="48" cy="32" rx="26" ry="22" {...stroke} />
          <ellipse cx="48" cy="32" rx="19" ry="16" {...stroke} strokeOpacity="0.55" />
          <ellipse cx="44" cy="30" rx="8" ry="7" {...stroke} strokeOpacity="0.55" />
          <ellipse cx="55" cy="36" rx="5" ry="4" {...stroke} strokeOpacity="0.55" />
          <line x1="8" y1="32" x2="88" y2="32" className="stroke-teal-500" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="44" cy="30" r="1.6" className="fill-teal-500" />
        </g>
      )}
      {kind === "ehr" && (
        <g>
          {/* Longitudinal record: one patient timeline with clinical events. */}
          <line x1="6" y1="32" x2="90" y2="32" {...stroke} />
          {[12, 24, 36, 48, 60, 72, 84].map((x) => (
            <line key={x} x1={x} y1="29" x2={x} y2="35" {...stroke} strokeOpacity="0.5" />
          ))}
          <rect x="18" y="14" width="12" height="8" {...stroke} strokeOpacity="0.6" />
          <rect x="44" y="42" width="18" height="8" {...stroke} strokeOpacity="0.6" />
          <rect x="68" y="14" width="10" height="8" {...stroke} strokeOpacity="0.6" />
          <line x1="24" y1="22" x2="24" y2="32" {...stroke} strokeOpacity="0.4" />
          <line x1="53" y1="32" x2="53" y2="42" {...stroke} strokeOpacity="0.4" />
          <line x1="73" y1="22" x2="73" y2="32" {...stroke} strokeOpacity="0.4" />
          <circle cx="84" cy="32" r="2.2" className="fill-teal-500" />
        </g>
      )}
      {kind === "multimodal" && (
        <g>
          {/* Image frame linked to a clinical timeline. */}
          <rect x="6" y="12" width="34" height="40" {...stroke} />
          <ellipse cx="23" cy="32" rx="10" ry="12" {...stroke} strokeOpacity="0.55" />
          <line x1="58" y1="32" x2="90" y2="32" {...stroke} />
          {[64, 74, 84].map((x) => (
            <circle key={x} cx={x} cy="32" r="1.8" {...stroke} />
          ))}
          <path d="M40 32 C 48 32, 50 32, 58 32" className="stroke-teal-500" strokeWidth="1.2" fill="none" />
          <circle cx="40" cy="32" r="2" className="fill-teal-500" />
          <circle cx="58" cy="32" r="2" className="fill-teal-500" />
        </g>
      )}
      {kind === "cohorts" && (
        <g>
          {/* Population grid with a defined selection. */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 11 }).map((_, c) => {
              const x = 8 + c * 8;
              const y = 12 + r * 8;
              const selected = c >= 3 && c <= 7 && r >= 1 && r <= 4 && (r + c) % 3 !== 0;
              return selected ? (
                <circle key={`${r}-${c}`} cx={x} cy={y} r="1.9" className="fill-teal-500" />
              ) : (
                <circle key={`${r}-${c}`} cx={x} cy={y} r="1.3" fill="currentColor" fillOpacity="0.35" />
              );
            }),
          )}
          <rect x="28" y="15" width="40" height="34" {...stroke} strokeDasharray="2 2.5" />
        </g>
      )}
    </svg>
  );
}
