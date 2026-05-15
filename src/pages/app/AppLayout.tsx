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
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} navTop={NAV_H} width={SIDEBAR_W} />
      <main
        className="overflow-y-auto"
        style={{
          marginTop: NAV_H,
          marginLeft: 0,
          paddingLeft: 0,
          minHeight: `calc(100vh - ${NAV_H}px)`,
          background: "#000",
        }}
      >
        <div
          className="md:pl-[var(--app-sidebar-w)]"
          style={
            {
              "--app-sidebar-w": `${SIDEBAR_W}px`,
            } as React.CSSProperties
          }
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "48px 40px 64px",
            }}
          >
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
