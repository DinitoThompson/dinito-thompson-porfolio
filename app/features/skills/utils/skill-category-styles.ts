export const skillCategoryStyles: Record<
  string,
  { icon: string; badge: string; glow: string }
> = {
  Languages: {
    icon: "border-welcome-accent-blue/30 bg-welcome-accent-blue/10 text-welcome-accent-cyan",
    badge:
      "border-welcome-accent-blue/20 bg-welcome-accent-blue/10 text-welcome-accent-cyan",
    glow: "hover:shadow-welcome-accent-blue/10",
  },
  Frontend: {
    icon: "border-welcome-accent-indigo/30 bg-welcome-accent-indigo/10 text-welcome-accent-indigo",
    badge:
      "border-welcome-accent-indigo/20 bg-welcome-accent-indigo/10 text-welcome-accent-indigo",
    glow: "hover:shadow-welcome-accent-indigo/10",
  },
  Mobile: {
    icon: "border-welcome-accent-purple/30 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    badge:
      "border-welcome-accent-purple/20 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    glow: "hover:shadow-welcome-accent-purple/10",
  },
  Backend: {
    icon: "border-welcome-accent-blue/30 bg-welcome-accent-blue/10 text-welcome-accent-cyan",
    badge:
      "border-welcome-accent-blue/20 bg-welcome-accent-blue/10 text-welcome-accent-cyan",
    glow: "hover:shadow-welcome-accent-blue/10",
  },
  Databases: {
    icon: "border-sidebar-success/30 bg-sidebar-success-surface text-sidebar-success",
    badge:
      "border-sidebar-success/20 bg-sidebar-success-surface text-sidebar-success",
    glow: "hover:shadow-sidebar-success/10",
  },
  "DevOps & Cloud": {
    icon: "border-welcome-accent-teal/30 bg-welcome-accent-teal/10 text-welcome-accent-cyan",
    badge:
      "border-welcome-accent-teal/20 bg-welcome-accent-teal/10 text-welcome-accent-cyan",
    glow: "hover:shadow-welcome-accent-teal/10",
  },
  "Tools & IDEs": {
    icon: "border-welcome-accent-indigo/30 bg-welcome-accent-indigo/10 text-welcome-accent-indigo",
    badge:
      "border-welcome-surface-border/50 bg-welcome-surface/60 text-welcome-muted",
    glow: "hover:shadow-welcome-accent-indigo/10",
  },
  "Design & Creative": {
    icon: "border-welcome-accent-purple/30 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    badge:
      "border-welcome-accent-purple/20 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    glow: "hover:shadow-welcome-accent-purple/10",
  },
  "AI & Data": {
    icon: "border-welcome-accent-teal/30 bg-welcome-accent-teal/10 text-welcome-accent-cyan",
    badge:
      "border-welcome-accent-teal/20 bg-welcome-accent-teal/10 text-welcome-accent-cyan",
    glow: "hover:shadow-welcome-accent-teal/10",
  },
};

export function getSkillCategoryStyle(category: string) {
  return (
    skillCategoryStyles[category] ?? {
      icon: "border-welcome-surface-border/50 bg-welcome-surface/60 text-welcome-muted",
      badge:
        "border-welcome-surface-border/50 bg-welcome-surface/60 text-welcome-muted",
      glow: "hover:shadow-welcome-accent-blue/10",
    }
  );
}
