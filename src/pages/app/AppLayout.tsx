import { useState } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { NavbarApp } from "@/components/ui/Navbar";
import { Sidebar, APP_NAV } from "@/components/ui/Sidebar";

export default function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = APP_NAV.find(
    (n) => pathname === n.to || pathname.startsWith(n.to + "/"),
  );
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <NavbarApp pageTitle={current?.label} onMenuClick={() => setMenuOpen(true)} />
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main
        className="overflow-y-auto md:ml-[220px]"
        style={{
          marginTop: 56,
          height: "calc(100vh - 56px)",
          background: "#000",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 24px",
          }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
