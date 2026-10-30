/**
 * Abstract sourcing diagram: data modalities flow through one coordination
 * layer to the sponsor. Deliberately carries no institution names, counts,
 * maps, or volumes.
 */
const sources = ["CT", "MRI", "X-RAY", "PATHOLOGY", "EHR", "LABS"];
const HUB = { x1: 222, x2: 372, y1: 118, y2: 342, cy: 230 };

export function HeroNetworkDiagram({ className }: { className?: string }) {
  const ys = sources.map((_, i) => 58 + i * 69);

  return (
    <svg
      viewBox="0 0 560 460"
      className={className}
      role="img"
      aria-label="Diagram: imaging and clinical data modalities flow through a single coordination layer for feasibility, de-identification and licensing, then to your team."
    >
      <defs>
        <linearGradient id="fade-in" x1="0" x2="1">
          <stop offset="0" stopColor="#8fd3cc" stopOpacity="0" />
          <stop offset="1" stopColor="#8fd3cc" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Static paths */}
      {ys.map((y, i) => {
        const ty = HUB.cy - 75 + i * 30;
        return (
          <path
            key={`p-${i}`}
            d={`M 92 ${y} C 160 ${y}, 160 ${ty}, ${HUB.x1} ${ty}`}
            fill="none"
            stroke="url(#fade-in)"
            strokeWidth="1"
          />
        );
      })}

      {/* Flowing pulses */}
      {ys.map((y, i) => {
        const ty = HUB.cy - 75 + i * 30;
        return (
          <path
            key={`f-${i}`}
            d={`M 92 ${y} C 160 ${y}, 160 ${ty}, ${HUB.x1} ${ty}`}
            fill="none"
            stroke="#5bbab1"
            strokeWidth="1.5"
            strokeDasharray="3 37"
            className="animate-flow"
            style={{ animationDelay: `${i * -0.7}s`, animationDuration: `${5 + (i % 3)}s` }}
          />
        );
      })}

      {/* Source modality labels */}
      {ys.map((y, i) => (
        <g key={`s-${i}`}>
          <circle cx="92" cy={y} r="3.5" fill="#0b1a30" stroke="#8fd3cc" strokeWidth="1.25" />
          <text
            x="80"
            y={y + 3.5}
            textAnchor="end"
            className="fill-slate-400 font-mono"
            fontSize="10"
            letterSpacing="1.4"
          >
            {sources[i]}
          </text>
        </g>
      ))}

      {/* Coordination layer */}
      <rect
        x={HUB.x1}
        y={HUB.y1}
        width={HUB.x2 - HUB.x1}
        height={HUB.y2 - HUB.y1}
        rx="3"
        fill="#0b1a30"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <text x={HUB.x1 + 16} y={HUB.y1 + 26} className="fill-teal-300 font-mono" fontSize="8.5" letterSpacing="1.1">
        COORDINATION LAYER
      </text>
      {["Feasibility", "De-identification", "Quality review", "Licensing"].map((label, i) => (
        <g key={label}>
          <line
            x1={HUB.x1 + 16}
            x2={HUB.x2 - 16}
            y1={HUB.y1 + 48 + i * 42}
            y2={HUB.y1 + 48 + i * 42}
            stroke="#ffffff"
            strokeOpacity="0.08"
          />
          <circle
            cx={HUB.x1 + 22}
            cy={HUB.y1 + 69 + i * 42}
            r="2.5"
            fill="#5bbab1"
            className="animate-pulse-soft"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
          <text x={HUB.x1 + 34} y={HUB.y1 + 73 + i * 42} className="fill-white font-sans" fontSize="12.5">
            {label}
          </text>
        </g>
      ))}

      {/* Output to sponsor */}
      <path d={`M ${HUB.x2} ${HUB.cy} L 470 ${HUB.cy}`} stroke="#8fd3cc" strokeOpacity="0.5" strokeWidth="1" />
      <path
        d={`M ${HUB.x2} ${HUB.cy} L 470 ${HUB.cy}`}
        stroke="#5bbab1"
        strokeWidth="2"
        strokeDasharray="6 34"
        className="animate-flow"
      />
      <circle cx="488" cy={HUB.cy} r="18" fill="none" stroke="#5bbab1" strokeOpacity="0.35" />
      <circle cx="488" cy={HUB.cy} r="7" fill="#5bbab1" />
      <text x="488" y={HUB.cy + 42} textAnchor="middle" className="fill-white font-sans" fontSize="12.5">
        Your team
      </text>
      <text
        x="488"
        y={HUB.cy + 58}
        textAnchor="middle"
        className="fill-slate-400 font-mono"
        fontSize="9"
        letterSpacing="1.2"
      >
        ONE PARTNER
      </text>
    </svg>
  );
}
