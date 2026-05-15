import * as React from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn, truncateAddress } from "@/lib/utils";
import { PaygodLogo } from "./Logo";
import { Button } from "./Button";
import { MOCK_INSTITUTION } from "@/lib/mockAuth";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  center?: React.ReactNode;
  right?: React.ReactNode;
  left?: React.ReactNode;
  logoSize?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  center,
  right,
  left,
  logoSize = 26,
  className,
  ...props
}) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 h-16 bg-black z-50 flex items-center",
        className,
      )}
      style={{ borderBottom: "1px solid var(--border)", paddingLeft: 32, paddingRight: 32 }}
      {...props}
    >
      {/* Left cluster: optional menu button + logo */}
      <div className="flex items-center min-w-0 gap-4">
        {left}
        <Link to="/" aria-label="Paygod home" className="shrink-0 inline-flex items-center">
          <PaygodLogo size={logoSize} />
        </Link>
      </div>

      {/* Center: absolutely centered so nav items are page-centered */}
      {center ? (
        <div className="hidden md:flex absolute left-1/2 top-0 h-full items-center -translate-x-1/2 pointer-events-none">
          <div className="pointer-events-auto">{center}</div>
        </div>
      ) : null}

      {/* Spacer to push right cluster */}
      <div className="flex-1" />

      {/* Right cluster */}
      <div className="flex items-center justify-end gap-3">{right}</div>
    </header>
  );
};

const marketingLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Compliance", href: "#product" },
  { label: "Contact", href: "#cta" },
];

export const NavbarMarketing: React.FC = () => (
  <Navbar
    logoSize={26}
    center={
      <nav
        className="flex items-center gap-10 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        {marketingLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="hover:text-white transition-colors duration-150"
          >
            {l.label}
          </a>
        ))}
      </nav>
    }
    right={
      <>
        <Link to="/app/overview">
          <Button variant="outline" size="sm">Sign in</Button>
        </Link>
        <Link to="/app/overview">
          <Button variant="primary" size="sm">Request Access</Button>
        </Link>
      </>
    }
  />
);

export interface NavbarAppProps {
  pageTitle?: string;
  wallet?: string;
  onMenuClick?: () => void;
}

const NetworkBadge: React.FC = () => (
  <span
    className="inline-flex items-center gap-1.5 px-2.5 py-1 uppercase"
    style={{
      backgroundColor: "rgba(237,49,52,0.08)",
      border: "1px solid rgba(237,49,52,0.3)",
      color: "var(--accent)",
      fontSize: 11,
      letterSpacing: "0.1em",
      fontWeight: 500,
    }}
  >
    <span
      className="w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: "var(--accent)" }}
    />
    Avalanche Subnet
  </span>
);

export const NavbarApp: React.FC<NavbarAppProps> = ({
  pageTitle,
  wallet = MOCK_INSTITUTION.wallet,
  onMenuClick,
}) => (
  <Navbar
    left={
      <>
        {onMenuClick ? (
          <button
            type="button"
            onClick={onMenuClick}
            className="md:hidden text-white p-1 -ml-1"
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        ) : null}
        {pageTitle ? (
          <div className="hidden sm:flex items-center min-w-0">
            <span
              className="mx-4 h-6"
              style={{ borderLeft: "1px solid var(--border)" }}
              aria-hidden
            />
            <span
              className="text-white font-medium truncate"
              style={{ fontSize: 14 }}
            >
              {pageTitle}
            </span>
          </div>
        ) : null}
      </>
    }
    right={
      <>
        <NetworkBadge />
        <button
          type="button"
          className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors duration-150"
          style={{ color: "#888", fontSize: 13 }}
        >
          <span className="font-mono">{truncateAddress(wallet)}</span>
          <ChevronDown size={14} strokeWidth={1.5} />
        </button>
      </>
    }
  />
);
