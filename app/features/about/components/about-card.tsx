"use client";

import { cn } from "@/lib/utils";

interface AboutCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function AboutCard({
  children,
  className,
  hover = true,
}: AboutCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-welcome-surface-border/60",
        "bg-welcome-elevated/85 backdrop-blur-sm",
        "p-5 sm:p-6",
        "shadow-[inset_0_1px_0_hsl(var(--welcome-foreground)/0.04),0_8px_24px_hsl(var(--welcome-bg-deep)/0.35)]",
        "transition-all duration-200",
        hover &&
          "hover:border-welcome-accent-indigo/35 hover:bg-welcome-surface/90",
        className
      )}
    >
      {children}
    </div>
  );
}

interface AboutStatPillProps {
  value: string;
  label: string;
}

export function AboutStatPill({ value, label }: AboutStatPillProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg",
        "border border-welcome-surface-border/50 bg-welcome-surface/60",
        "px-3 py-1.5 text-xs text-welcome-muted"
      )}
    >
      <span className="font-semibold text-welcome-accent-cyan">{value}</span>
      <span>{label}</span>
    </div>
  );
}

interface AboutIconBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function AboutIconBadge({ children, className }: AboutIconBadgeProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
        "border border-welcome-accent-blue/20 bg-welcome-accent-blue/10",
        "text-welcome-accent-blue",
        className
      )}
    >
      {children}
    </div>
  );
}
