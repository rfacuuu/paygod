import { PaygodLogo } from "@/components/ui/Logo";

export const Footer: React.FC = () => (
  <footer style={{ padding: "48px 24px 32px", borderTop: "1px solid var(--border)" }}>
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <PaygodLogo size={20} />
        <nav className="flex flex-wrap items-center gap-6">
          {["Product", "Docs", "Compliance", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="transition-colors duration-150 hover:text-white"
              style={{ color: "var(--text-secondary)", fontSize: 14 }}
            >
              {l}
            </a>
          ))}
        </nav>
        <p style={{ color: "var(--text-secondary)", fontSize: 12 }}>
          Built on Avalanche · Powered by eERC20
        </p>
      </div>
      <div
        className="mt-8 pt-6 text-center"
        style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)", fontSize: 12 }}
      >
        © 2025 Paygod. All rights reserved.
      </div>
    </div>
  </footer>
);
