import * as React from "react";
import { cn, truncateAddress } from "@/lib/utils";
import { PaygodLogo } from "./Logo";

type IconProps = { className?: string };
const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    {children}
  </svg>
);

const icons = {
  overview: <Icon><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></Icon>,
  transfers: <Icon><path d="M3 7h14M14 3l4 4-4 4M21 17H7M10 21l-4-4 4-4" /></Icon>,
  compliance: <Icon><path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" /></Icon>,
  audit: <Icon><path d="M4 4h12l4 4v12H4z" /><path d="M8 12h8M8 16h8M8 8h4" /></Icon>,
  settings: <Icon><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L14 3h-4l-.8 2.5a7 7 0 0 0-1.7 1l-2.4-1-2 3.5L5.1 11A7 7 0 0 0 5 12c0 .3 0 .7.1 1l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1L10 21h4l.8-2.5a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5c.1-.3.1-.7.1-1z" /></Icon>,
  logout: <Icon><path d="M16 17l5-5-5-5M21 12H9M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></Icon>,
};

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: icons.overview },
  { key: "transfers", label: "Transfers", icon: icons.transfers },
  { key: "compliance", label: "Compliance", icon: icons.compliance },
  { key: "audit", label: "Audit Log", icon: icons.audit },
  { key: "settings", label: "Settings", icon: icons.settings },
];

export interface SidebarProps {
  active?: string;
  onSelect?: (key: string) => void;
  institution?: string;
  wallet?: string;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  active = "overview",
  onSelect,
  institution = "Bankaool S.A.",
  wallet = "0x4a7f8c3b9e2d1f5a8c9d4e7f9C3B",
  onLogout,
}) => {
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-[220px] bg-black flex flex-col"
      style={{ borderRight: "1px solid var(--border)" }}
    >
      <div className="px-5 h-14 flex items-center" style={{ borderBottom: "1px solid var(--border)" }}>
        <PaygodLogo size={18} />
      </div>

      <nav className="flex-1 py-4">
        {NAV_ITEMS.map((item) => {
          const isActive = item.key === active;
          return (
            <button
              key={item.key}
              onClick={() => onSelect?.(item.key)}
              className={cn(
                "w-full flex items-center gap-3 px-5 h-10 text-sm transition-colors duration-150 relative text-left",
                isActive ? "text-white bg-[var(--surface)]" : "text-[var(--text-secondary)] hover:text-white",
              )}
            >
              {isActive && (
                <span
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              )}
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="text-xs text-white font-medium">{institution}</div>
        <div className="text-xs text-[var(--text-secondary)] font-mono mt-1">{truncateAddress(wallet)}</div>
        <button
          onClick={onLogout}
          className="mt-3 w-full flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-white transition-colors duration-150"
        >
          {icons.logout}
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};
