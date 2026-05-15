import { createFileRoute } from "@tanstack/react-router";
import Onboarding from "@/pages/app/Onboarding";

export const Route = createFileRoute("/app_/onboarding")({
  component: Onboarding,
  head: () => ({ meta: [{ title: "Connect — Paygod" }] }),
});
