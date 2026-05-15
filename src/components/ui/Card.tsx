import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: number;
  highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({
  padding = 24,
  highlight = false,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("bg-[var(--surface)] border rounded-none transition-colors duration-150", className)}
      style={{
        padding,
        borderColor: highlight ? "var(--accent)" : "var(--border)",
        borderWidth: 1,
        borderStyle: "solid",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
