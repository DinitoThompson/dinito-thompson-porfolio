import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/features/projects/types/projects";
import { ProjectCard } from "./components/project-card";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";

export default function ProjectsScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 relative overflow-hidden">
      <BubblesBackground />

      <div className="min-h-screen flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16 text-center text-transparent text-white"
        >
          Featured Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
