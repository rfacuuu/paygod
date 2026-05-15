import { useState } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { NavbarApp } from "@/components/ui/Navbar";
import { Sidebar, APP_NAV } from "@/components/ui/Sidebar";

const NAV_H = 64;
const SIDEBAR_W = 240;

export default function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = APP_NAV.find(
    (n) => pathname === n.to || pathname.startsWith(n.to + "/"),
  );
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <NavbarApp pageTitle={current?.label} onMenuClick={() => setMenuOpen(true)} />
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navTop={NAV_H}
        width={SIDEBAR_W}
      />
      <ContentShell>
        <Outlet />
      </ContentShell>
    </div>
  );
}

function ContentShell({ children }: { children: React.ReactNode }) {
  // We use a ref to a media query so the desktop offset only applies >=768px.
  const [isDesktop, setIsDesktop] = useState(false);
  if (typeof window !== "undefined") {
    // Initialize once on client
    if (!isDesktop && window.matchMedia("(min-width: 768px)").matches) {
      // schedule update without re-render loop
      queueMicrotask(() => setIsDesktop(true));
    }
  }

  return (
    <main
      className="overflow-y-auto"
      style={{
        marginTop: NAV_H,
        marginLeft: isDesktop ? SIDEBAR_W : 0,
        minHeight: `calc(100vh - ${NAV_H}px)`,
        background: "#000",
        transition: "margin-left 200ms ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "48px 40px 64px",
        }}
      >
        {children}
      </div>
    </main>
  );
}
