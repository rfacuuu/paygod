import * as React from "react";
import { PaygodMark } from "@/components/ui/Logo";

const InstitutionNode: React.FC<{ label: string }> = ({ label }) => (
  <div
    className="bg-black px-3 py-2 text-left"
    style={{ border: "1px solid var(--border)" }}
  >
    <div className="text-[11px] text-white font-medium">{label}</div>
    <div className="text-[10px] text-[var(--text-secondary)] font-mono mt-0.5">•••• DoC</div>
  </div>
);

const Lock: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x - 10} ${y - 10})`}>
    <rect width="20" height="20" fill="#000" stroke="rgba(237,49,52,0.5)" />
    <g transform="translate(4 4)" stroke="#ED3134" strokeWidth="1.2" fill="none">
      <rect x="1" y="5" width="10" height="7" />
      <path d="M3 5V3a3 3 0 0 1 6 0v2" />
    </g>
  </g>
);

export const NetworkDiagram: React.FC = () => {
  // Coordinate system 680 x 360
  const W = 680;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2 - 20;

  const corners = [
    { x: 80, y: 60 },
    { x: W - 80, y: 60 },
    { x: 80, y: H - 100 },
    { x: W - 80, y: H - 100 },
  ];

  return (
    <div className="relative w-full max-w-[680px] mx-auto" style={{ aspectRatio: `${W}/${H}` }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Isometric grid hint */}
        <defs>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#dots)" />

        {/* Connection lines */}
        {corners.map((c, i) => (
          <line
            key={i}
            x1={c.x}
            y1={c.y}
            x2={cx}
            y2={cy}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Padlocks midway on each line */}
        {corners.map((c, i) => (
          <Lock key={i} x={(c.x + cx) / 2} y={(c.y + cy) / 2} />
        ))}
      </svg>

      {/* Institution nodes */}
      <div className="absolute" style={{ left: "4%", top: "10%" }}>
        <InstitutionNode label="Institution A" />
      </div>
      <div className="absolute" style={{ right: "4%", top: "10%" }}>
        <InstitutionNode label="Institution B" />
      </div>
      <div className="absolute" style={{ left: "4%", bottom: "20%" }}>
        <InstitutionNode label="Institution C" />
      </div>
      <div className="absolute" style={{ right: "4%", bottom: "20%" }}>
        <InstitutionNode label="Institution D" />
      </div>

      {/* Central node */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--surface)] flex items-center justify-center"
        style={{
          border: "1px solid var(--accent)",
          width: 88,
          height: 88,
        }}
      >
        <PaygodMark size={36} />
      </div>

      {/* Compliance Agent badge */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "4%" }}>
        <div
          className="px-3 py-1.5 text-[11px] font-medium flex items-center gap-2"
          style={{
            backgroundColor: "rgba(74,222,128,0.08)",
            border: "1px solid rgba(74,222,128,0.2)",
            color: "var(--text-secondary)",
          }}
        >
          <span className="text-white">Compliance Agent</span>
          <span style={{ color: "var(--success)" }}>Risk: LOW ✓</span>
        </div>
      </div>
    </div>
  );
};
