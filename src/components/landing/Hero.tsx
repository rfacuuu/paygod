import { Button } from "@/components/ui/Button";
import { NetworkDiagram } from "./NetworkDiagram";

export const Hero: React.FC = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}
    >
      <p
        className="fade-up uppercase font-medium"
        style={{
          color: "var(--accent)",
          fontSize: 12,
          letterSpacing: "0.2em",
          marginBottom: 24,
          animationDelay: "0ms",
        }}
      >
        Built on Avalanche · Powered by eERC20
      </p>

      <h1
        className="fade-up font-extrabold text-white"
        style={{
          fontSize: "clamp(40px, 7vw, 72px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          animationDelay: "100ms",
        }}
      >
        Institutional payments.
        <br />
        Private by default.
      </h1>

      <p
        className="fade-up mt-6"
        style={{
          color: "var(--text-secondary)",
          fontSize: 18,
          lineHeight: 1.6,
          maxWidth: 480,
          animationDelay: "200ms",
        }}
      >
        Confidential B2B settlement infrastructure for LatAm financial institutions.
        Compliance-ready. Regulator-auditable.
      </p>

      <div
        className="fade-up flex flex-wrap items-center justify-center"
        style={{ gap: 12, marginTop: 32, animationDelay: "300ms" }}
      >
        <Button variant="primary" size="lg">Request Access</Button>
        <Button variant="outline" size="lg">View Docs</Button>
      </div>

      <div className="w-full" style={{ marginTop: 64 }}>
        <NetworkDiagram />
      </div>
    </section>
  );
};
