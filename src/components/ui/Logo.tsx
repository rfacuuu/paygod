import * as React from "react";
import mark from "@/assets/paygod-mark.png";

export const PaygodMark: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src={mark}
    alt="Paygod"
    style={{ height: size, width: "auto" }}
    className={className}
  />
);

export const PaygodLogo: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <div className={"flex items-center gap-2 " + (className ?? "")}>
    <PaygodMark size={size} />
    <span className="text-white font-bold tracking-tight" style={{ fontWeight: 700, fontSize: size * 0.9 }}>
      paygod
    </span>
  </div>
);
