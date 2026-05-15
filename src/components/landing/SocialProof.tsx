import * as React from "react";

const Triangle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3 L22 21 L2 21 Z" />
  </svg>
);

const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="11" width="16" height="10" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

type Item = {
  label: string;
  icon?: React.ReactNode;
  weight?: number;
  tracking?: string;
  border?: boolean;
};

const items: Item[] = [
  { label: "AVALANCHE", icon: <Triangle />, weight: 700, tracking: "0.05em" },
  { label: "bankaool", weight: 600, tracking: "-0.02em" },
  { label: "ARKÁNGELES", weight: 600, tracking: "0.1em" },
  { label: "x402", weight: 700, border: true },
  { label: "eERC20", icon: <LockIcon />, weight: 600, tracking: "0.05em" },
  { label: "MICA READY", weight: 600, tracking: "0.15em" },
  { label: "TRAVEL RULE", weight: 600, tracking: "0.15em" },
];

const Logo: React.FC<{ it: Item }> = ({ it }) => (
  <div
    className="flex items-center gap-2 shrink-0 transition-colors duration-150"
    style={{
      color: "rgba(255,255,255,0.35)",
      fontFamily: "Inter, sans-serif",
      fontWeight: it.weight,
      letterSpacing: it.tracking,
      fontSize: 14,
      padding: it.border ? "4px 10px" : 0,
      border: it.border ? "1px solid rgba(255,255,255,0.18)" : undefined,
    }}
  >
    {it.icon}
    <span>{it.label}</span>
  </div>
);

export const SocialProof: React.FC = () => {
  // Duplicate items so the marquee loops seamlessly.
  const loop = [...items, ...items];
  return (
    <section
      style={{
        padding: "48px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p
        className="text-center"
        style={{
          color: "var(--text-secondary)",
          fontSize: 12,
          marginBottom: 32,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Trusted and built with
      </p>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((it, i) => (
            <Logo key={`${it.label}-${i}`} it={it} />
          ))}
        </div>
      </div>
    </section>
  );
};
