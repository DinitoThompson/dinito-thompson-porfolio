"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/features/projects/types/projects";
import { ProjectCard } from "./components/project-card";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
import { cn } from "@/lib/utils";

export default function ProjectsScreen() {
  const { enterpriseProjects, otherProjects, inDevelopmentProjects } =
    useMemo(() => {
      // Helper function to sort by date
      const sortByDate = (a: (typeof projects)[0], b: (typeof projects)[0]) =>
        new Date(b.duration.start).getTime() -
        new Date(a.duration.start).getTime();

      // First, separate in-development projects
      const inDevelopment = projects
        .filter((p) => p.inDevelopment)
        .sort(sortByDate);

      // Then, filter and sort completed projects
      const completed = projects.filter((p) => !p.inDevelopment);

      const enterprise = completed
        .filter((p) => p.category === "Enterprise")
        .sort(sortByDate);

      const other = completed
        .filter((p) => p.category !== "Enterprise")
        .sort(sortByDate);

      return {
        enterpriseProjects: enterprise,
        otherProjects: other,
        inDevelopmentProjects: inDevelopment,
      };
    }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const ProjectSection = ({
    title,
    projects,
    description,
  }: {
    title: string;
    projects: typeof enterpriseProjects;
    description?: string;
  }) =>
    projects.length > 0 ? (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            "grid gap-4 sm:gap-6",
            "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
          )}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              custom={index}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    ) : null;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Subtle background */}
      <BubblesBackground className="opacity-60" />

      <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Refined header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
              Featured Projects
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A showcase of enterprise solutions and personal projects
            </p>
          </motion.div>

          {/* Enterprise Projects */}
          <ProjectSection
            title="Enterprise Solutions"
            projects={enterpriseProjects}
            description="Professional projects developed for enterprise clients"
          />

          {/* Other Projects */}
          <ProjectSection
            title="Other Projects"
            projects={otherProjects}
            description="Academic and personal projects showcasing various technologies"
          />

          {/* In Development Projects */}
          {inDevelopmentProjects.length > 0 && (
            <ProjectSection
              title="In Development"
              projects={inDevelopmentProjects}
              description="Projects currently being built - stay tuned for updates!"
            />
          )}

          {/* Call to action - subtle positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center pt-4"
          >
            <NavButton
              href="/home/designs"
              text="View Design Portfolio"
              variant="secondary"
              size="md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
