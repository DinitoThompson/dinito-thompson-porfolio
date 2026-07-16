"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { projects } from "@/app/features/projects/types/projects";
import { ProjectSection } from "./components/project-section";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
import { cn } from "@/lib/utils";

export default function ProjectsScreen() {
  const { enterpriseProjects, otherProjects, inDevelopmentProjects } =
    useMemo(() => {
      const sortByDate = (a: (typeof projects)[0], b: (typeof projects)[0]) =>
        new Date(b.duration.start).getTime() -
        new Date(a.duration.start).getTime();

      const inDevelopment = projects
        .filter((p) => p.inDevelopment)
        .sort(sortByDate);

      const completed = projects.filter((p) => !p.inDevelopment);

      return {
        enterpriseProjects: completed
          .filter((p) => p.category === "Enterprise")
          .sort(sortByDate),
        otherProjects: completed
          .filter((p) => p.category !== "Enterprise")
          .sort(sortByDate),
        inDevelopmentProjects: inDevelopment,
      };
    }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
      <BubblesBackground className="opacity-45" density="low" animeMode={true} />

      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12 md:space-y-14">
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
                <Briefcase className="h-3.5 w-3.5 text-welcome-accent-blue" />
                Portfolio
              </p>
              <h1 className="text-2xl font-extrabold tracking-tight text-welcome-foreground sm:text-3xl md:text-4xl">
                Featured Projects
              </h1>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-welcome-muted sm:text-base">
                Enterprise systems and personal builds — shipped end to end.
              </p>
            </div>
          </motion.header>

          <ProjectSection
            title="Enterprise"
            description="Production software for enterprise clients."
            projects={enterpriseProjects}
            accent="blue"
          />

          <ProjectSection
            title="Other Work"
            description="Academic and personal projects across the stack."
            projects={otherProjects}
            accent="purple"
          />

          {inDevelopmentProjects.length > 0 && (
            <ProjectSection
              title="In Development"
              description="Currently building — updates coming soon."
              projects={inDevelopmentProjects}
              accent="teal"
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center border-t border-welcome-surface-border/40 pt-8 sm:pt-10"
          >
            <NavButton
              href="/home/designs"
              text="View Design Portfolio"
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
