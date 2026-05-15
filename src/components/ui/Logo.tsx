import * as React from "react";

export const PaygodMark: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path d="M3 4 L13 12 L3 20 L6 20 L16 12 L6 4 Z" fill="#ED3134" />
    <path d="M11 4 L21 12 L11 20 L14 20 L24 12 L14 4 Z" fill="#ED3134" />
  </svg>
);

export const PaygodLogo: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <div className={"flex items-center gap-2 " + (className ?? "")}>
    <PaygodMark size={size} />
    <span className="text-white font-bold tracking-tight" style={{ fontWeight: 700, fontSize: size * 0.9 }}>
      paygod
    </span>
  </div>
);
