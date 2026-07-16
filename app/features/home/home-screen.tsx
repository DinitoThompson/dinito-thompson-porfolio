"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { floatingIconsClean as floatingIcons } from "./types/floating-icons";
import { TypeWriter } from "./components/type-writer";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const metaItems = [
  { label: "Available for work", type: "status" as const },
  { label: "Jamaica", type: "text" as const },
  { label: "Remote friendly", type: "text" as const },
];

export default function HomeScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
      <BubblesBackground density="medium" animeMode={true} />

      {/* Floating tech icons */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {floatingIcons.map(({ Icon, x, y, delay = 0, scale = 1 }, index) => (
          <motion.div
            key={index}
            className="absolute text-welcome-accent-blue/25"
            style={{ left: x, top: y }}
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{
              scale: scale * 0.75,
              rotate: 0,
              opacity: 0.35,
              y: [0, -6, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 28,
              delay: delay + 0.4,
              y: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay + 2,
              },
            }}
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9" />
          </motion.div>
        ))}
      </div>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100svh-theme(spacing.4))] items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-3xl"
        >
          {/* Hero card */}
          <div
            className={cn(
              "overflow-hidden rounded-2xl border border-welcome-surface-border/70",
              "bg-welcome-elevated/90 shadow-[0_16px_48px_hsl(var(--welcome-bg-deep)/0.65)] backdrop-blur-lg",
              "sm:rounded-3xl"
            )}
          >
            {/* Top accent gradient bar */}
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--welcome-accent-blue)), hsl(var(--welcome-accent-indigo)), hsl(var(--welcome-accent-teal)))",
              }}
              aria-hidden="true"
            />

            <div className="space-y-6 px-5 py-8 sm:space-y-7 sm:px-8 sm:py-10 md:px-10 md:py-12">
              {/* Identity zone */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 text-center"
              >
                <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-welcome-muted sm:text-sm">
                  <Sparkles
                    className="h-3.5 w-3.5 shrink-0 text-welcome-accent-indigo"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap">Hello, I&apos;m</span>
                </p>

                <h1 className="bg-gradient-to-r from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                  Dinito Thompson
                </h1>

                <div className="flex justify-center">
                  <span
                    className={cn(
                      "inline-flex items-center whitespace-nowrap rounded-full",
                      "border border-welcome-accent-blue/25 bg-welcome-accent-blue/10",
                      "px-4 py-1.5 text-sm font-semibold text-welcome-accent-cyan sm:text-base"
                    )}
                  >
                    Lead Software Developer
                  </span>
                </div>

                <p className="mx-auto max-w-md text-sm leading-relaxed text-welcome-muted sm:max-w-lg sm:text-base">
                  Turning complex problems into intuitive software.
                </p>
              </motion.div>

              {/* Activity zone — full-width typewriter strip */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    "rounded-xl border border-welcome-surface-border/50",
                    "bg-welcome-surface/70 p-4 sm:p-5"
                  )}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <span className="shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-welcome-muted sm:text-xs">
                      Currently
                    </span>
                    <div className="h-px w-full bg-welcome-surface-border/40 sm:hidden" />
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <TypeWriter />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action zone */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
              >
                <NavButton
                  href="/home/about"
                  text="View Experience"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                />
                <NavButton
                  href="https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl"
                  text="Download Resume"
                  variant="secondary"
                  size="md"
                  icon={Download}
                  external={true}
                  showArrow={false}
                  className="w-full sm:w-auto"
                />
              </motion.div>
            </div>

            {/* Meta zone */}
            <motion.div
              variants={itemVariants}
              className="border-t border-welcome-surface-border/40 bg-welcome-surface/40 px-5 py-4 sm:px-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-welcome-muted sm:text-sm">
                {metaItems.map((item, i) => (
                  <React.Fragment key={item.label}>
                    {i > 0 && (
                      <span
                        className="hidden h-1 w-1 shrink-0 rounded-full bg-welcome-muted/40 sm:inline-block"
                        aria-hidden="true"
                      />
                    )}
                    {item.type === "status" ? (
                      <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sidebar-success opacity-50" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-sidebar-success" />
                        </span>
                        <span className="font-medium text-sidebar-success">
                          {item.label}
                        </span>
                      </span>
                    ) : (
                      <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap">
                        {item.label === "Jamaica" && (
                          <MapPin
                            className="h-3 w-3 shrink-0 opacity-70"
                            aria-hidden="true"
                          />
                        )}
                        {item.label}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
