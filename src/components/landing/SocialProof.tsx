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

const items = [
  { label: "AVALANCHE", icon: <Triangle />, weight: 700 as const, tracking: "0.05em" },
  { label: "bankaool", weight: 600 as const, tracking: "-0.02em", italic: false },
  { label: "ARKÁNGELES", weight: 600 as const, tracking: "0.1em" },
  { label: "x402", weight: 700 as const, border: true },
  { label: "eERC20", icon: <LockIcon />, weight: 600 as const, tracking: "0.05em" },
];

export const SocialProof: React.FC = () => (
  <section
    style={{
      padding: "48px 24px",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}
  >
    <p
      className="text-center"
      style={{ color: "var(--text-secondary)", fontSize: 12, marginBottom: 32 }}
    >
      Trusted and built with
    </p>
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 max-w-5xl mx-auto">
      {items.map((it) => (
        <div
          key={it.label}
          className="flex items-center gap-2 transition-colors duration-150 cursor-default"
          style={{
            color: "rgba(255,255,255,0.3)",
            fontFamily: "Inter, sans-serif",
            fontWeight: it.weight,
            letterSpacing: it.tracking,
            fontSize: 14,
            padding: it.border ? "4px 10px" : 0,
            border: it.border ? "1px solid rgba(255,255,255,0.15)" : undefined,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
        >
          {it.icon}
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  </section>
);
