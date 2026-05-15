import { createFileRoute } from "@tanstack/react-router";
import AgentDetail from "@/pages/app/AgentDetail";

export const Route = createFileRoute("/app/compliance/agent/$txId")({
  component: AgentDetail,
  head: () => ({ meta: [{ title: "Compliance Agent — Verification Detail" }] }),
});
