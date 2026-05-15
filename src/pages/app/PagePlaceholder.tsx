import * as React from "react";
import { Card } from "@/components/ui/Card";

export interface PagePlaceholderProps {
  title: string;
  subtitle: string;
}

export const PagePlaceholder: React.FC<PagePlaceholderProps> = ({ title, subtitle }) => (
  <div>
    <h1
      className="font-extrabold text-white"
      style={{ fontSize: 32, letterSpacing: "-0.02em", marginBottom: 8 }}
    >
      {title}
    </h1>
    <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 32 }}>
      {subtitle}
    </p>
    <Card padding={48}>
      <p
        className="text-center"
        style={{ color: "var(--text-secondary)", fontSize: 14 }}
      >
        This section is being built — coming in next prompt.
      </p>
    </Card>
  </div>
);
