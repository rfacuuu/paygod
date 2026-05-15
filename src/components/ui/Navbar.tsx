import * as React from "react";
import { cn } from "@/lib/utils";
import { PaygodLogo } from "./Logo";
import { Button } from "./Button";
import { truncateAddress } from "@/lib/utils";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ center, right, className, ...props }) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 h-14 bg-black z-50 flex items-center px-6",
        className,
      )}
      style={{ borderBottom: "1px solid var(--border)" }}
      {...props}
    >
      <div className="flex-1 flex items-center">
        <PaygodLogo size={20} />
      </div>
      <div className="flex-1 flex items-center justify-center">{center}</div>
      <div className="flex-1 flex items-center justify-end gap-2">{right}</div>
    </header>
  );
};

export const NavbarMarketing: React.FC = () => (
  <Navbar
    center={
      <nav className="flex items-center gap-8 text-sm text-[var(--text-secondary)]">
        {["Product", "Compliance", "Docs", "About"].map((l) => (
          <a key={l} href="#" className="hover:text-white transition-colors duration-150">
            {l}
          </a>
        ))}
      </nav>
    }
    right={
      <>
        <Button variant="outline" size="sm">Sign in</Button>
        <Button variant="primary" size="sm">Request Access</Button>
      </>
    }
  />
);

export const NavbarApp: React.FC<{ wallet?: string }> = ({ wallet = "0x4a7f8c3b9e2d1f5a8c9d4e7f9C3B" }) => (
  <Navbar
    right={
      <>
        <span
          className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium"
          style={{
            color: "var(--accent)",
            backgroundColor: "var(--accent-subtle)",
            border: "1px solid rgba(237,49,52,0.2)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
          Avalanche Subnet
        </span>
        <span
          className="inline-flex items-center px-3 h-8 text-xs text-white font-mono"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
        >
          {truncateAddress(wallet)}
        </span>
      </>
    }
  />
);
