"use client";

import { cn } from "@/lib/utils";

interface AboutTimelineProps {
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

export function AboutTimeline({
  children,
  className,
  isLast = false,
}: AboutTimelineProps) {
  return (
    <div className={cn("relative pl-8 sm:pl-10", className)}>
      <div
        className={cn(
          "absolute left-[13px] top-2 w-px bg-gradient-to-b from-welcome-accent-blue/40 via-welcome-accent-indigo/20 to-transparent",
          isLast ? "bottom-6" : "bottom-0"
        )}
        aria-hidden="true"
      />
      <div
        className="absolute left-2 top-6 h-3 w-3 rounded-full border-2 border-welcome-deep bg-welcome-accent-blue shadow-[0_0_10px_hsl(var(--welcome-glow-blue)/0.45)]"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
