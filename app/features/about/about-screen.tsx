"use client";

import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { OverviewSection } from "./section/overview-section";
import { ExecutiveSummary } from "./section/executive-summary-section";
import { WorkExperience } from "./section/experience-section";
import { EducationSection } from "./section/education-section";
import { SkillsSection } from "./section/skills-section";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
import { cn } from "@/lib/utils";

export default function AboutScreen() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    }));
  }, [controls]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
      <BubblesBackground className="opacity-50" density="low" animeMode={true} />

      <div className="relative min-h-screen px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-4xl space-y-10 sm:space-y-12 md:space-y-14">
          {/* Page header */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "overflow-hidden rounded-2xl border border-welcome-surface-border/60",
              "bg-welcome-elevated/90 text-center backdrop-blur-md sm:rounded-3xl"
            )}
          >
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--welcome-accent-blue)), hsl(var(--welcome-accent-indigo)), hsl(var(--welcome-accent-teal)))",
              }}
              aria-hidden="true"
            />
            <div className="space-y-3 px-5 py-8 sm:px-8 sm:py-10">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-welcome-muted">
                <User className="h-3.5 w-3.5 text-welcome-accent-indigo" />
                About
              </p>
              <h1 className="text-2xl font-extrabold tracking-tight text-welcome-foreground sm:text-3xl md:text-4xl">
                About Me
              </h1>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-welcome-muted sm:text-base">
                Developer and designer building products that last.
              </p>
            </div>
          </motion.header>

          <OverviewSection />
          <ExecutiveSummary />
          <WorkExperience controls={controls} />
          <EducationSection />
          <SkillsSection controls={controls} />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center border-t border-welcome-surface-border/40 pt-8 sm:pt-10"
          >
            <NavButton
              href="/home/skills"
              text="View Technical Skills"
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
