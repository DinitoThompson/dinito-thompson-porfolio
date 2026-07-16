"use client";

import { cn } from "@/lib/utils";

interface ProjectLinkButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: "default" | "success";
}

export function ProjectLinkButton({
  href,
  label,
  icon,
  variant = "default",
}: ProjectLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-10 w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg px-3.5",
        "border text-sm font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/40",
        "active:scale-[0.98]",
        variant === "success"
          ? "border-sidebar-success/30 bg-sidebar-success-surface text-sidebar-success hover:border-sidebar-success/50"
          : "border-welcome-surface-border/60 bg-welcome-surface/50 text-welcome-muted hover:border-welcome-accent-blue/30 hover:text-welcome-foreground"
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </a>
  );
}
