export type DesignCategory =
  | "Logo"
  | "Portrait"
  | "Inspirational"
  | "Clothing"
  | "Conceptual"
  | "Redesign";

export const designCategoryStyles: Record<
  string,
  { badge: string; glow: string }
> = {
  Logo: {
    badge:
      "border-welcome-accent-blue/30 bg-welcome-accent-blue/10 text-welcome-accent-cyan",
    glow: "group-hover:shadow-welcome-accent-blue/15",
  },
  Portrait: {
    badge:
      "border-welcome-accent-purple/30 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    glow: "group-hover:shadow-welcome-accent-purple/15",
  },
  Inspirational: {
    badge:
      "border-sidebar-success/30 bg-sidebar-success-surface text-sidebar-success",
    glow: "group-hover:shadow-sidebar-success/15",
  },
  Clothing: {
    badge:
      "border-welcome-accent-indigo/30 bg-welcome-accent-indigo/10 text-welcome-accent-indigo",
    glow: "group-hover:shadow-welcome-accent-indigo/15",
  },
  Conceptual: {
    badge:
      "border-welcome-accent-purple/30 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    glow: "group-hover:shadow-welcome-accent-purple/15",
  },
  Redesign: {
    badge:
      "border-welcome-accent-teal/30 bg-welcome-accent-teal/10 text-welcome-accent-cyan",
    glow: "group-hover:shadow-welcome-accent-teal/15",
  },
};

export function getDesignCategoryStyle(category: string) {
  return (
    designCategoryStyles[category] ?? {
      badge:
        "border-welcome-surface-border/50 bg-welcome-surface/60 text-welcome-muted",
      glow: "group-hover:shadow-welcome-accent-blue/10",
    }
  );
}
