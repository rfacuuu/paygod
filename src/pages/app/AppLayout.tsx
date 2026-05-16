import { useEffect, useState } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { NavbarApp } from "@/components/ui/Navbar";
import { Sidebar, APP_NAV } from "@/components/ui/Sidebar";

const NAV_H = 64;
const SIDEBAR_W = 256;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : true,
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

export default function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = APP_NAV.find(
    (n) => pathname === n.to || pathname.startsWith(n.to + "/"),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <NavbarApp pageTitle={current?.label} onMenuClick={() => setMenuOpen(true)} />
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navTop={NAV_H}
        width={SIDEBAR_W}
      />
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
            padding: "48px 40px 80px",
          }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
