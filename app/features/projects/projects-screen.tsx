import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/features/projects/types/projects";
import { ProjectCard } from "./components/project-card";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";

export default function ProjectsScreen() {
  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden">
      <BubblesBackground />

      <div className="min-h-screen flex flex-col justify-center p-10 sm:p-6 md:p-8 lg:p-16 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500"
        >
          Featured Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
