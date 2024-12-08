"use client";

import { Cloud, Code, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export interface SkillProps {
  icon: React.ReactNode;
  category: string;
  items: string[];
}

export const resumeSkills: SkillProps[] = [
  {
    icon: <Code size={24} />,
    category: "Web Development",
    items: ["NextJS", "React", "TailwindCSS"],
  },
  {
    icon: <Database size={24} />,
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    icon: <Cloud size={24} />,
    category: "Cloud Infrastructure",
    items: ["AWS", "Firebase"],
  },
  {
    icon: <Smartphone size={24} />,
    category: "Mobile Development",
    items: ["Flutter", "React Native"],
  },
];

export const Skill: React.FC<SkillProps> = ({ icon, category, items }) => (
  <motion.div
    whileHover={{ translateX: 4 }}
    transition={{ duration: 0.2 }}
    className="relative p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg backdrop-blur-sm"
  >
    <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
      <div className="p-2 sm:p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
        <motion.div
          animate={{
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-blue-400"
        >
          {React.cloneElement(icon as React.ReactElement, {
            size:
              typeof window !== "undefined" && window.innerWidth < 640
                ? 20
                : 24,
          })}
        </motion.div>
      </div>
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-bold text-white mb-2">
          {category}
        </h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 text-gray-300 bg-gray-800/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-gray-700"
            >
              <span className="text-xs sm:text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);
