/**
 * 36-hour instrument dial — a 270° gauge from request (0h) to preliminary
 * quote (36h). The arc draws once on load; reduced motion shows it complete.
 */
const CX = 200;
const CY = 200;
const R = 158;
const START = 135; // degrees, SVG coords (0 = right, clockwise)
const SWEEP = 270;

function polar(deg: number, r = R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

export function QuoteDial({ hours, className }: { hours: number; className?: string }) {
  const start = polar(START);
  const end = polar(START + SWEEP);
  const arc = `M ${start.x} ${start.y} A ${R} ${R} 0 1 1 ${end.x} ${end.y}`;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={`Dial showing ${hours} hours from request to preliminary quote.`}
    >
      {/* Ticks: one per hour, major every 6 hours. */}
      {Array.from({ length: hours + 1 }).map((_, i) => {
        const deg = START + (i / hours) * SWEEP;
        const major = i % 6 === 0;
        const a = polar(deg, R + 10);
        const b = polar(deg, R + (major ? 22 : 16));
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="currentColor"
            strokeOpacity={major ? 0.55 : 0.22}
            strokeWidth={major ? 1.25 : 1}
          />
        );
      })}

      {/* Track and progress arc */}
      <path d={arc} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
      <path
        d={arc}
        fill="none"
        className="stroke-teal-400 animate-dial"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="1"
      />

      {/* Inner hairline ring */}
      <circle cx={CX} cy={CY} r={R - 26} fill="none" stroke="currentColor" strokeOpacity="0.07" />

      {/* Endpoints */}
      <circle cx={start.x} cy={start.y} r="4" className="fill-navy-950 stroke-teal-300" strokeWidth="1.5" />
      <circle cx={end.x} cy={end.y} r="9" className="fill-teal-400/20" />
      <circle cx={end.x} cy={end.y} r="4.5" className="fill-teal-300" />
      <text x={start.x} y={start.y + 30} textAnchor="middle" className="fill-slate-300 font-mono" fontSize="11" letterSpacing="1">
        0h
      </text>
      <text x={start.x} y={start.y + 46} textAnchor="middle" className="fill-slate-400 font-mono" fontSize="9" letterSpacing="1.6">
        REQUEST
      </text>
      <text x={end.x} y={end.y + 30} textAnchor="middle" className="fill-teal-200 font-mono" fontSize="11" letterSpacing="1">
        {hours}h
      </text>
      <text x={end.x} y={end.y + 46} textAnchor="middle" className="fill-teal-300/70 font-mono" fontSize="9" letterSpacing="1.6">
        QUOTE
      </text>

      {/* Center numeral */}
      <text
        x={CX}
        y={CY + 34}
        textAnchor="middle"
        className="fill-paper font-serif"
        fontSize="132"
        fontWeight="300"
        letterSpacing="-6"
      >
        {hours}
      </text>
      <text x={CX} y={CY + 70} textAnchor="middle" className="fill-teal-200 font-mono" fontSize="11" letterSpacing="3.2">
        HOURS
      </text>
      <text x={CX} y={CY + 90} textAnchor="middle" className="fill-slate-400 font-mono" fontSize="9.5" letterSpacing="1.6">
        TO A PRELIMINARY QUOTE
      </text>
    </svg>
  );
}
