import { createFileRoute } from "@tanstack/react-router";
import Overview from "@/pages/app/Overview";

export const Route = createFileRoute("/app/overview")({
  component: Overview,
  head: () => ({ meta: [{ title: "Overview — Paygod" }] }),
});
