import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ArrowLeftRight,
  ShieldCheck,
  ScrollText,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { MOCK_INSTITUTION } from "@/lib/mockAuth";

export interface NavItem {
  to: string;
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

export const APP_NAV: NavItem[] = [
  { to: "/app/overview", label: "Overview", icon: LayoutDashboard },
  { to: "/app/transfers", label: "Transfers", icon: ArrowLeftRight },
  { to: "/app/compliance", label: "Compliance", icon: ShieldCheck },
  { to: "/app/audit-log", label: "Audit Log", icon: ScrollText },
  { to: "/app/settings", label: "Settings", icon: SettingsIcon },
];

export const Sidebar: React.FC<{ onLogout?: () => void }> = ({ onLogout }) => {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside
      className="fixed left-0 w-[220px] bg-black flex flex-col"
      style={{
        top: 56,
        bottom: 0,
        borderRight: "1px solid var(--border)",
      }}
    >
      <nav className="flex-1 py-4">
        {APP_NAV.map((item) => {
          const isActive = pathname === item.to || pathname.startsWith(item.to + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative flex items-center gap-3 px-5 h-10 text-sm transition-colors duration-150",
                isActive
                  ? "text-white bg-[var(--surface)]"
                  : "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.02)]",
              )}
            >
              {isActive && (
                <span
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              )}
              <Icon size={16} strokeWidth={1.5} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-3" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          className="bg-[var(--surface)] p-3"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="text-white font-medium" style={{ fontSize: 13 }}>
            {MOCK_INSTITUTION.name}
          </div>
          <div
            className="font-mono mt-1"
            style={{ color: "var(--text-secondary)", fontSize: 11 }}
          >
            {MOCK_INSTITUTION.walletShort}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full mt-2 justify-start"
          onClick={onLogout}
        >
          <LogOut size={14} strokeWidth={1.5} />
          <span>Disconnect</span>
        </Button>
      </div>
    </aside>
  );
};
