"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AlertLightsBackground } from "./components/animated-background/alert-lights-bg";
import { WelcomeOrbitalSystem } from "./components/welcome/welcome-orbital-system";
import { WelcomeProgressRing } from "./components/welcome/welcome-progress-ring";
import { cn } from "@/lib/utils";

const LOAD_DURATION_MS = 5000;
const EXIT_DURATION_MS = 800;

export default function Welcome() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigateHome = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => router.push("/home"), EXIT_DURATION_MS);
  }, [isExiting, router]);

  useEffect(() => {
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / LOAD_DURATION_MS) * 100, 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 50);

    const exitTimer = setTimeout(navigateHome, LOAD_DURATION_MS);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, [navigateHome]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.12, delayChildren: 0.15 },
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { y: -12, opacity: 0, transition: { duration: 0.35 } },
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-welcome-deep">
      <AlertLightsBackground />
      <WelcomeOrbitalSystem isExiting={isExiting} />

      {/* Skip control */}
      <AnimatePresence>
        {!isExiting && (
          <motion.button
            type="button"
            onClick={navigateHome}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ delay: 1, duration: 0.4 }}
            className={cn(
              "absolute right-4 top-4 z-20 cursor-pointer whitespace-nowrap rounded-lg",
              "border border-welcome-surface-border/60 bg-welcome-surface/70 px-4 py-2",
              "text-xs font-medium text-welcome-muted backdrop-blur-sm sm:right-6 sm:top-6 sm:text-sm",
              "transition-all duration-200",
              "hover:border-welcome-accent-indigo/40 hover:bg-welcome-elevated/80 hover:text-welcome-foreground",
              "focus:outline-none focus:ring-2 focus:ring-welcome-accent-indigo/50 focus:ring-offset-2 focus:ring-offset-welcome-deep",
              "active:scale-95"
            )}
          >
            Skip intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* Content zone */}
      <motion.div
        className="relative z-10 w-full max-w-lg px-5 sm:px-8 md:max-w-xl md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate={isExiting ? "exit" : "visible"}
      >
        <div
          className={cn(
            "rounded-2xl border border-welcome-surface-border/50 p-6 sm:p-8",
            "bg-welcome-glass backdrop-blur-md",
            "shadow-[0_8px_32px_hsl(var(--welcome-bg-deep)/0.6),inset_0_1px_0_hsl(var(--welcome-foreground)/0.05)]"
          )}
        >
          {/* Progress ring + brand mark */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center sm:mb-8"
          >
            <WelcomeProgressRing progress={progress} isExiting={isExiting} />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-welcome-muted sm:text-sm">
              Portfolio
            </p>
            <h1 className="mb-3 whitespace-nowrap bg-gradient-to-r from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
              Welcome
            </h1>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-welcome-muted sm:max-w-sm sm:text-base">
              Design meets development
            </p>
          </motion.div>

          {/* Status line */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-col items-center gap-3 sm:mt-8"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-welcome-accent-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-welcome-accent-teal" />
              </span>
              <p className="whitespace-nowrap text-xs text-welcome-muted sm:text-sm">
                {isExiting
                  ? "Launching experience…"
                  : `Initializing — ${Math.round(progress)}%`}
              </p>
            </div>

            {/* Linear progress fallback for accessibility */}
            <div className="h-0.5 w-full max-w-[10rem] overflow-hidden rounded-full bg-welcome-surface-border/40 sm:max-w-[12rem]">
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Enter hint — desktop hover affordance */}
          <motion.div
            variants={itemVariants}
            className="mt-6 hidden justify-center sm:mt-8 sm:flex"
          >
            <button
              type="button"
              onClick={navigateHome}
              className={cn(
                "group inline-flex cursor-pointer items-center gap-2 whitespace-nowrap",
                "rounded-lg px-4 py-2 text-sm font-medium text-welcome-muted",
                "transition-all duration-200",
                "hover:text-welcome-foreground",
                "focus:outline-none focus:ring-2 focus:ring-welcome-accent-indigo/40"
              )}
            >
              Enter portfolio
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
