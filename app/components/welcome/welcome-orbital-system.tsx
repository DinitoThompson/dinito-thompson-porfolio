"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WelcomeOrbitalSystemProps {
  isExiting?: boolean;
  className?: string;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const TICK_COUNT = 12;

function OrbitalTickMarks({
  seed,
  tickClassName,
}: {
  seed: number;
  tickClassName: string;
}) {
  return (
    <>
      {Array.from({ length: TICK_COUNT }, (_, i) => {
        const angle = (360 / TICK_COUNT) * i;
        const isMajor = seededRandom(seed + i) > 0.65;

        return (
          <div
            key={i}
            className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div
              className={cn(
                "mx-auto w-px rounded-full",
                isMajor ? "h-3 opacity-60" : "h-1.5 opacity-30",
                tickClassName
              )}
            />
          </div>
        );
      })}
    </>
  );
}

function OrbitalTraveler({
  color,
  size = "sm",
  delay = 0,
  position = "top",
}: {
  color: "blue" | "indigo" | "teal";
  size?: "sm" | "md";
  delay?: number;
  position?: "top" | "bottom" | "left" | "right";
}) {
  const colorMap = {
    blue: "bg-welcome-accent-blue shadow-[0_0_12px_hsl(var(--welcome-glow-blue)/0.8)]",
    indigo:
      "bg-welcome-accent-indigo shadow-[0_0_14px_hsl(var(--welcome-glow-indigo)/0.9)]",
    teal: "bg-welcome-accent-teal shadow-[0_0_12px_hsl(var(--welcome-glow-teal)/0.8)]",
  };

  const positionStyles: Record<typeof position, React.CSSProperties> = {
    top: { top: -4, left: "50%", marginLeft: size === "sm" ? -3 : -4 },
    bottom: { bottom: -4, left: "50%", marginLeft: size === "sm" ? -3 : -4 },
    left: { left: -4, top: "50%", marginTop: size === "sm" ? -3 : -4 },
    right: { right: -4, top: "50%", marginTop: size === "sm" ? -3 : -4 },
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full",
        size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2",
        colorMap[color]
      )}
      style={positionStyles[position]}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

interface OrbitalRingProps {
  sizeClass: string;
  ringBorderClass: string;
  glowClass: string;
  duration: number;
  reverse?: boolean;
  dashed?: boolean;
  exitDelay?: number;
  isExiting?: boolean;
  children?: React.ReactNode;
}

function OrbitalRing({
  sizeClass,
  ringBorderClass,
  glowClass,
  duration,
  reverse = false,
  dashed = false,
  exitDelay = 0,
  isExiting = false,
  children,
}: OrbitalRingProps) {
  return (
    <motion.div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        sizeClass
      )}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={
        isExiting
          ? { opacity: 0, scale: 1.12 }
          : { opacity: 1, scale: 1 }
      }
      transition={{
        opacity: { duration: 0.6, delay: isExiting ? exitDelay : 0.3 },
        scale: {
          duration: isExiting ? 0.7 : 1.2,
          delay: isExiting ? exitDelay : 0.2,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{
          duration,
          repeat: isExiting ? 0 : Infinity,
          ease: "linear",
        }}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            dashed ? "border border-dashed" : "border",
            ringBorderClass,
            glowClass
          )}
        />
        {children}
      </motion.div>
    </motion.div>
  );
}

export function WelcomeOrbitalSystem({
  isExiting = false,
  className,
}: WelcomeOrbitalSystemProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Core ambient glow */}
      <motion.div
        className="absolute h-48 w-48 rounded-full sm:h-64 sm:w-64 md:h-80 md:w-80"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--welcome-glow-indigo) / 0.2) 0%, hsl(var(--welcome-glow-blue) / 0.1) 45%, transparent 72%)",
        }}
        animate={
          isExiting
            ? { opacity: 0, scale: 0.85 }
            : { opacity: [0.45, 0.75, 0.45], scale: [1, 1.06, 1] }
        }
        transition={{
          duration: isExiting ? 0.5 : 5,
          repeat: isExiting ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer ring — slow clockwise */}
      <OrbitalRing
        sizeClass="h-[min(140vw,140vh)] w-[min(140vw,140vh)] sm:h-[min(128vw,128vh)] sm:w-[min(128vw,128vh)] md:h-[min(118vw,118vh)] md:w-[min(118vw,118vh)]"
        ringBorderClass="border-welcome-accent-blue/20"
        glowClass="shadow-[0_0_100px_hsl(var(--welcome-glow-blue)/0.08),inset_0_0_60px_hsl(var(--welcome-glow-blue)/0.04)]"
        duration={48}
        isExiting={isExiting}
        exitDelay={0}
      >
        <OrbitalTickMarks seed={1} tickClassName="bg-welcome-accent-blue/50" />
        <OrbitalTraveler color="blue" size="md" delay={0} position="top" />
        <OrbitalTraveler color="teal" size="sm" delay={1.2} position="bottom" />
      </OrbitalRing>

      {/* Middle ring — counter-clockwise (upgraded selected element) */}
      <OrbitalRing
        sizeClass="h-[min(115vw,115vh)] w-[min(115vw,115vh)] sm:h-[min(104vw,104vh)] sm:w-[min(104vw,104vh)] md:h-[min(94vw,94vh)] md:w-[min(94vw,94vh)]"
        ringBorderClass="border-welcome-accent-indigo/30"
        glowClass="shadow-[0_0_80px_hsl(var(--welcome-glow-indigo)/0.14),inset_0_0_50px_hsl(var(--welcome-glow-indigo)/0.07)]"
        duration={32}
        reverse
        isExiting={isExiting}
        exitDelay={0.05}
      >
        <div
          className="absolute inset-0 rounded-full p-px"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(var(--welcome-ring-secondary) / 0.5), hsl(var(--welcome-accent-purple) / 0.25), hsl(var(--welcome-ring-tertiary) / 0.4), hsl(var(--welcome-ring-secondary) / 0.5))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
        <OrbitalTickMarks
          seed={42}
          tickClassName="bg-welcome-accent-indigo/60"
        />
        <OrbitalTraveler color="indigo" size="md" delay={0.5} position="top" />
        <OrbitalTraveler
          color="indigo"
          size="sm"
          delay={1.5}
          position="right"
        />
        <OrbitalTraveler color="teal" size="sm" delay={2} position="left" />
      </OrbitalRing>

      {/* Inner dashed ring — faster */}
      <OrbitalRing
        sizeClass="h-[min(88vw,88vh)] w-[min(88vw,88vh)] sm:h-[min(80vw,80vh)] sm:w-[min(80vw,80vh)] md:h-[min(70vw,70vh)] md:w-[min(70vw,70vh)]"
        ringBorderClass="border-welcome-accent-teal/25"
        glowClass="shadow-[inset_0_0_40px_hsl(var(--welcome-glow-teal)/0.1)]"
        duration={20}
        dashed
        isExiting={isExiting}
        exitDelay={0.1}
      >
        <OrbitalTraveler color="teal" size="sm" delay={0.3} position="top" />
      </OrbitalRing>

      {/* Corner brackets — tablet+ */}
      <div className="absolute inset-0 hidden sm:block">
        {(
          [
            "top-6 left-6 sm:top-8 sm:left-8 border-t-2 border-l-2",
            "top-6 right-6 sm:top-8 sm:right-8 border-t-2 border-r-2",
            "bottom-6 left-6 sm:bottom-8 sm:left-8 border-b-2 border-l-2",
            "bottom-6 right-6 sm:bottom-8 sm:right-8 border-b-2 border-r-2",
          ] as const
        ).map((position, i) => (
          <motion.div
            key={position}
            className={cn(
              "absolute h-6 w-6 border-welcome-accent-indigo/35 md:h-8 md:w-8",
              position
            )}
            initial={{ opacity: 0 }}
            animate={
              isExiting
                ? { opacity: 0 }
                : { opacity: [0.25, 0.55, 0.25] }
            }
            transition={{
              opacity: {
                duration: isExiting ? 0.35 : 3.5,
                delay: isExiting ? i * 0.05 : 0.5 + i * 0.2,
                repeat: isExiting ? 0 : Infinity,
              },
            }}
          />
        ))}
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <div className="animate-scan-line absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-welcome-accent-cyan to-transparent" />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 28%, hsl(var(--welcome-bg-deep) / 0.9) 100%)",
        }}
      />
    </div>
  );
}
