import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/pages/Landing";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Paygod — Institutional payments. Private by default." },
      {
        name: "description",
        content:
          "Confidential B2B settlement infrastructure for LatAm financial institutions. Compliance-ready. Regulator-auditable.",
      },
      { property: "og:title", content: "Paygod — Institutional payments. Private by default." },
      {
        property: "og:description",
        content:
          "Confidential B2B settlement infrastructure for LatAm financial institutions. Compliance-ready.",
      },
    ],
  }),
});
