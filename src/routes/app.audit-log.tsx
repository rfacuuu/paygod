import { createFileRoute } from "@tanstack/react-router";
import AuditLog from "@/pages/app/AuditLog";

export const Route = createFileRoute("/app/audit-log")({
  component: AuditLog,
  head: () => ({ meta: [{ title: "Audit Log — Paygod" }] }),
});
