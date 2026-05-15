import { Button } from "@/components/ui/Button";

export const CTASection: React.FC = () => (
  <section
    style={{
      padding: "120px 24px",
      backgroundColor: "var(--surface)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}
  >
    <div className="max-w-2xl mx-auto text-center">
      <h2
        className="font-extrabold text-white"
        style={{ fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-0.03em" }}
      >
        Ready to settle privately?
      </h2>
      <p
        className="mx-auto"
        style={{
          color: "var(--text-secondary)",
          fontSize: 16,
          maxWidth: 440,
          margin: "16px auto 40px",
          lineHeight: 1.6,
        }}
      >
        Join the first wave of LatAm institutions building on confidential payment infrastructure.
      </p>

      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex" style={{ width: "100%", maxWidth: 480 }}>
          <input
            type="email"
            placeholder="Work email"
            className="flex-1 h-12 px-4 text-sm text-white placeholder:text-[var(--text-secondary)] bg-[var(--surface)] outline-none"
            style={{
              border: "1px solid var(--border)",
              borderRight: "none",
            }}
          />
          <Button variant="primary" size="lg" type="submit">Request Access</Button>
        </div>
      </form>

      <div
        className="flex items-center justify-center gap-2 mt-4"
        style={{ color: "var(--text-secondary)", fontSize: 12 }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
          <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
        </svg>
        <span>No crypto experience required. Onboarding support included.</span>
      </div>
    </div>
  </section>
);
