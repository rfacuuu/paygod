import { createFileRoute } from "@tanstack/react-router";
import Transfers from "@/pages/app/Transfers";

export const Route = createFileRoute("/app/transfers")({
  component: Transfers,
  head: () => ({ meta: [{ title: "Transfers — Paygod" }] }),
});
