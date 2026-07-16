"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { skillCategories } from "@/app/features/skills/types/skills";
import { SkillCategory } from "./components/skills-category";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { AboutStatPill } from "@/app/features/about/components/about-card";
import { NavButton } from "@/components/ui/nav-button";
import { cn } from "@/lib/utils";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SkillsScreen() {
  const { categoryCount, skillCount } = useMemo(
    () => ({
      categoryCount: skillCategories.length,
      skillCount: skillCategories.reduce(
        (total, category) => total + category.skills.length,
        0
      ),
    }),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
      <BubblesBackground className="opacity-45" density="low" animeMode={true} />

      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
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
                <Cpu className="h-3.5 w-3.5 text-welcome-accent-blue" />
                Tech Stack
              </p>
              <h1 className="text-2xl font-extrabold tracking-tight text-welcome-foreground sm:text-3xl md:text-4xl">
                Technical Skills
              </h1>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-welcome-muted sm:text-base">
                Languages, frameworks, and tools I use to ship production
                software.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <AboutStatPill
                  value={String(categoryCount)}
                  label="categories"
                />
                <AboutStatPill
                  value={String(skillCount)}
                  label="technologies"
                />
              </div>
            </div>
          </motion.header>

          {/* Category grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className={cn(
              "overflow-hidden rounded-2xl border border-welcome-surface-border/50",
              "bg-welcome-elevated/40 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-8"
            )}
          >
            <div className="mb-6 space-y-2 sm:mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="h-6 w-1 shrink-0 rounded-full bg-gradient-to-b from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal"
                  aria-hidden="true"
                />
                <h2 className="whitespace-nowrap text-lg font-bold text-welcome-foreground sm:text-xl">
                  Full Stack
                </h2>
              </div>
              <p className="pl-4 text-sm text-welcome-muted sm:pl-7">
                From frontend to cloud — tools across the delivery pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.name}
                  variants={cardVariants}
                  className="flex min-w-0 h-full"
                >
                  <SkillCategory category={category} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center border-t border-welcome-surface-border/40 pt-8 sm:pt-10"
          >
            <NavButton
              href="/home/projects"
              text="View Projects"
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
