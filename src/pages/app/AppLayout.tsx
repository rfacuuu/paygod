import { Outlet, useRouterState } from "@tanstack/react-router";
import { NavbarApp } from "@/components/ui/Navbar";
import { Sidebar, APP_NAV } from "@/components/ui/Sidebar";

export default function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = APP_NAV.find(
    (n) => pathname === n.to || pathname.startsWith(n.to + "/"),
  );

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <NavbarApp pageTitle={current?.label} />
      <Sidebar />
      <main
        className="overflow-y-auto"
        style={{
          marginLeft: 220,
          marginTop: 56,
          height: "calc(100vh - 56px)",
          padding: 40,
          background: "#000",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
