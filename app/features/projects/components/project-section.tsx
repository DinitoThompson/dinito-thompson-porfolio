"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";
import { Project } from "../types/projects";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

interface ProjectSectionProps {
  title: string;
  description?: string;
  projects: Project[];
  accent?: "blue" | "purple" | "teal";
}

export function ProjectSection({
  title,
  description,
  projects,
  accent = "blue",
}: ProjectSectionProps) {
  if (projects.length === 0) return null;

  const accentBar = {
    blue: "from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal",
    purple: "from-welcome-accent-purple via-welcome-accent-indigo to-welcome-accent-blue",
    teal: "from-welcome-accent-teal via-welcome-accent-blue to-welcome-accent-indigo",
  }[accent];

  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "h-6 w-1 shrink-0 rounded-full bg-gradient-to-b",
              accentBar
            )}
            aria-hidden="true"
          />
          <h2 className="whitespace-nowrap text-lg font-bold text-welcome-foreground sm:text-xl md:text-2xl">
            {title}
          </h2>
          <span className="hidden shrink-0 rounded-full border border-welcome-surface-border/60 bg-welcome-surface/60 px-2.5 py-0.5 text-xs font-medium tabular-nums text-welcome-muted sm:inline-flex">
            {projects.length}
          </span>
        </div>
        {description && (
          <p className="max-w-2xl pl-4 text-sm text-welcome-muted sm:pl-7 sm:text-base">
            {description}
          </p>
        )}
      </div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="flex min-w-0 h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
