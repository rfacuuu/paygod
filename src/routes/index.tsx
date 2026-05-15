import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Table } from "@/components/ui/Table";
import { NavbarMarketing, NavbarApp } from "@/components/ui/Navbar";
import { Sidebar } from "@/components/ui/Sidebar";
import { formatAmount } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Showcase,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-6">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function Showcase() {
  const [active, setActive] = useState("overview");
  const badges: BadgeVariant[] = ["approved", "pending", "flagged", "blocked", "sealed", "revealed"];

  const txData = [
    { tx: "0x9f3a...7c2d", inst: "Bankaool S.A.", amount: formatAmount(0), status: "approved" as BadgeVariant, ts: "May 20, 2025 14:32" },
    { tx: "0x7c1e...3a9b", inst: "Finvero S.A.",  amount: formatAmount(0), status: "pending" as BadgeVariant,  ts: "May 20, 2025 13:45" },
    { tx: "0x2d4f...6b8a", inst: "PayFin México", amount: formatAmount(0), status: "flagged" as BadgeVariant,  ts: "May 20, 2025 11:07" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar showcase (live, fixed) */}
      <Sidebar active={active} onSelect={setActive} />

      <main className="ml-[220px] pt-20 px-12 pb-24 max-w-6xl">
        <header className="mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
            Paygod / Design System v0.1
          </p>
          <h1 className="text-5xl font-bold tracking-tight">Component Library</h1>
          <p className="mt-3 text-[var(--text-secondary)] max-w-xl">
            Sharp corners. 1px borders. No shadows. Built for institutional confidential payments.
          </p>
        </header>

        <Section title="Buttons">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary" size="sm">Primary SM</Button>
            <Button variant="primary" size="md">Primary MD</Button>
            <Button variant="primary" size="lg">Primary LG</Button>
            <Button variant="primary" loading>Loading</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="outline" size="sm">Outline SM</Button>
            <Button variant="outline" size="md">Outline MD</Button>
            <Button variant="outline" size="lg">Outline LG</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="ghost" size="sm">Ghost SM</Button>
            <Button variant="ghost" size="md">Ghost MD</Button>
            <Button variant="ghost" size="lg">Ghost LG</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </Section>

        <Section title="Badges">
          <div className="flex flex-wrap gap-3">
            {badges.map((v) => (
              <Badge key={v} variant={v} />
            ))}
          </div>
        </Section>

        <Section title="Cards">
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Total Volume</div>
              <div className="mt-2 text-2xl font-bold">1,248,392.75 DoC</div>
              <div className="mt-1 text-xs text-[var(--success)]">+18.7% vs last 30 days</div>
            </Card>
            <Card>
              <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Pending Transfers</div>
              <div className="mt-2 text-2xl font-bold">23</div>
              <div className="mt-1 text-xs text-[var(--warning)]">2 require attention</div>
            </Card>
            <Card highlight>
              <div className="text-xs text-[var(--accent)] uppercase tracking-wider">Highlighted Card</div>
              <div className="mt-2 text-2xl font-bold">94 / 100</div>
              <div className="mt-1 text-xs text-[var(--text-secondary)]">Compliance Score</div>
            </Card>
          </div>
        </Section>

        <Section title="Inputs">
          <div className="grid grid-cols-2 gap-4 max-w-2xl">
            <Input placeholder="Work email" />
            <Input
              placeholder="Search by TX ID, wallet, or institution…"
              leftIcon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              }
            />
            <Input locked defaultValue="125,340.75" placeholder="Encrypted amount" />
            <Input placeholder="0x8b21d4f9e2A3b7c8D9eF0a1B2c3D4E5F6a7B8C9D" />
          </div>
        </Section>

        <Section title="Table">
          <Card padding={0}>
            <Table
              columns={[
                { key: "tx", header: "TX ID" },
                { key: "inst", header: "Institution" },
                { key: "amount", header: "Amount" },
                {
                  key: "status",
                  header: "Status",
                  render: (r) => <Badge variant={r.status} />,
                },
                { key: "ts", header: "Timestamp" },
              ]}
              data={txData}
              onRowClick={(r) => console.log("row", r)}
            />
          </Card>
        </Section>

        <Section title="Navbar — Marketing">
          <div className="relative h-16 border" style={{ borderColor: "var(--border)" }}>
            <div className="absolute inset-x-0 top-0">
              <div className="relative">
                <NavbarMarketing />
              </div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Note: Navbar is position:fixed — the live one is rendered at the top of this page when scrolled.
          </p>
        </Section>

        <Section title="Navbar — App">
          <NavbarAppPreview />
        </Section>

        <Section title="Sidebar">
          <p className="text-sm text-[var(--text-secondary)]">
            Sidebar is rendered live on the left of this page. Active item: <span className="text-white">{active}</span>.
          </p>
        </Section>
      </main>

      {/* Live fixed marketing navbar at top */}
      <div className="fixed top-0 left-[220px] right-0 z-40">
        <NavbarMarketing />
      </div>
    </div>
  );
}

function NavbarAppPreview() {
  return (
    <div className="relative">
      <div
        className="h-14 bg-black flex items-center px-6"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* inline render mimicking NavbarApp */}
        <NavbarAppInline />
      </div>
    </div>
  );
}

function NavbarAppInline() {
  // Render just for showcase — uses the same component but unfixed via wrapper.
  return (
    <div className="w-full">
      <style>{`.nav-app-preview header { position: relative !important; height: 56px; }`}</style>
      <div className="nav-app-preview">
        <NavbarApp />
      </div>
    </div>
  );
}
