import { createFileRoute } from "@tanstack/react-router";
import Compliance from "@/pages/app/Compliance";

export const Route = createFileRoute("/app/compliance")({
  component: Compliance,
  head: () => ({ meta: [{ title: "Compliance — Paygod" }] }),
});
