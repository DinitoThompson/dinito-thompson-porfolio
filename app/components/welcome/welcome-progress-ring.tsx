"use client";

import { cn } from "@/lib/utils";

interface WelcomeProgressRingProps {
  progress: number;
  isExiting?: boolean;
  className?: string;
}

export function WelcomeProgressRing({
  progress,
  isExiting = false,
  className,
}: WelcomeProgressRingProps) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading portfolio"
    >
      <svg
        className={cn(
          "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 -rotate-90 transition-opacity duration-500",
          isExiting && "opacity-0"
        )}
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="hsl(var(--welcome-surface-border))"
          strokeWidth="2"
          opacity="0.4"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="url(#welcomeProgressGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-[stroke-dashoffset] duration-300 ease-out"
        />
        <defs>
          <linearGradient
            id="welcomeProgressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--welcome-accent-blue))" />
            <stop offset="50%" stopColor="hsl(var(--welcome-accent-indigo))" />
            <stop offset="100%" stopColor="hsl(var(--welcome-accent-teal))" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className={cn(
          "absolute flex h-16 w-16 items-center justify-center rounded-full border border-welcome-surface-border/60 bg-welcome-surface/80 backdrop-blur-sm sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20",
          "transition-all duration-500",
          isExiting && "scale-90 opacity-0"
        )}
      >
        <span className="bg-gradient-to-br from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal bg-clip-text text-lg font-bold tracking-tight text-transparent sm:text-xl">
          DT
        </span>
      </div>
    </div>
  );
}
