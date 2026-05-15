import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white border border-[var(--accent)] hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)]",
  outline:
    "bg-transparent text-white border border-white hover:bg-white hover:text-black",
  ghost:
    "bg-transparent text-[var(--text-secondary)] border border-transparent hover:text-white",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-none transition-colors duration-150 ease-out disabled:opacity-50 disabled:cursor-not-allowed",
          sizes[size],
          variants[variant],
          className,
        )}
        {...props}
      >
        {loading && (
          <span
            className="inline-block w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin"
            aria-hidden
          />
        )}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
