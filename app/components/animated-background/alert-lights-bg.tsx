"use client";

import { cn } from "@/lib/utils";

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const STAR_COUNT = 48;

export function AlertLightsBackground() {
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    top: `${seededRandom(i * 3) * 100}%`,
    left: `${seededRandom(i * 3 + 1) * 100}%`,
    size: seededRandom(i * 3 + 2) > 0.85 ? "h-1 w-1" : "h-0.5 w-0.5",
    delay: `${seededRandom(i * 7) * 4}s`,
    duration: `${2 + seededRandom(i * 11) * 3}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Animated mesh gradient */}
      <div
        className="absolute inset-0 animate-gradient-xy"
        style={{
          background:
            "linear-gradient(40deg, hsl(var(--welcome-bg-deep)), hsl(var(--welcome-bg-mid)), hsl(var(--welcome-bg-deep)))",
        }}
      />

      {/* Starfield */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={cn(
              "absolute rounded-full bg-welcome-foreground/60 animate-star-twinkle",
              star.size
            )}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Ambient light blobs */}
      <div className="absolute inset-0 opacity-20 sm:opacity-25">
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-welcome-accent-blue/30 mix-blend-screen blur-3xl animate-blob sm:h-[36rem] sm:w-[36rem] md:-left-40 md:-top-40 md:h-[40rem] md:w-[40rem]" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-welcome-accent-indigo/30 mix-blend-screen blur-3xl animate-blob animation-delay-2000 sm:h-[36rem] sm:w-[36rem] md:-bottom-40 md:-right-40 md:h-[40rem] md:w-[40rem]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-welcome-accent-teal/15 mix-blend-screen blur-3xl animate-blob animation-delay-4000 md:h-80 md:w-80" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--welcome-accent-cyan) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--welcome-accent-cyan) / 0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
