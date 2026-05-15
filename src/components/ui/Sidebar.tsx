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

export const Sidebar: React.FC<{
  onLogout?: () => void;
  open?: boolean;
  onClose?: () => void;
  navTop?: number;
  width?: number;
}> = ({ onLogout, open = false, onClose, navTop = 64, width = 240 }) => {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-200 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        aria-hidden
      />
      <aside
        className={cn(
          "fixed left-0 bg-black flex flex-col z-40 transition-transform duration-200 md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        style={{
          top: navTop,
          bottom: 0,
          width,
          borderRight: "1px solid var(--border)",
        }}
      >
        <nav className="flex-1 py-4 overflow-y-auto">
          {APP_NAV.map((item) => {
            const isActive = pathname === item.to || pathname.startsWith(item.to + "/");
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={cn(
                  "relative flex items-center gap-3 px-5 h-10 text-sm transition-colors duration-150",
                  isActive
                    ? "text-white bg-[var(--surface)]"
                    : "text-[#888] hover:text-white hover:bg-[rgba(255,255,255,0.02)]",
                )}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-0 bottom-0"
                    style={{ width: 2, backgroundColor: "#ED3134" }}
                  />
                )}
                <Icon size={16} strokeWidth={1.5} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 min-w-0" style={{ borderTop: "1px solid var(--border)" }}>
          <div
            className="bg-[var(--surface)] p-3 min-w-0"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="text-white font-medium truncate" style={{ fontSize: 13 }}>
              {MOCK_INSTITUTION.name}
            </div>
            <div
              className="font-mono mt-1 truncate"
              style={{ color: "#888", fontSize: 11 }}
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
    </>
  );
};
