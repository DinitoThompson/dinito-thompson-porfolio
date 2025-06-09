"use client";

import { Cloud, Code, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export interface SkillProps {
  icon: React.ReactNode;
  category: string;
  items: string[];
}

export const resumeSkills: SkillProps[] = [
  {
    icon: <Code size={20} />,
    category: "Web Development",
    items: ["NextJS", "TailwindCSS", "TypeScript"],
  },
  {
    icon: <Database size={20} />,
    category: "Database & Backend",
    items: ["Laravel", "PostgreSQL", "MySQL"],
  },
  {
    icon: <Cloud size={20} />,
    category: "Cloud & DevOps",
    items: ["AWS", "Git", "Docker"],
  },
  {
    icon: <Smartphone size={20} />,
    category: "Mobile Development",
    items: ["Flutter", "React Native"],
  },
];

export const Skill: React.FC<SkillProps> = ({ icon, category, items }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.01 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "group p-5 rounded-lg",
      "bg-gray-900/40 backdrop-blur-sm",
      "border border-gray-800/50",
      "hover:border-gray-700/50 hover:bg-gray-900/60",
      "transition-all duration-300"
    )}
  >
    <div className="flex items-start gap-4">
      {/* Icon container - more refined */}
      <div className="p-2.5 rounded-lg bg-blue-400/10 border border-blue-400/20 flex-shrink-0">
        <motion.div
          animate={{ rotate: [0, 5, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-blue-400"
        >
          {icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-100 mb-3 group-hover:text-blue-300 transition-colors">
          {category}
        </h3>

        {/* Skills tags - more subtle */}
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className={cn(
                "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium",
                "bg-gray-800/60 border border-gray-700/50 text-gray-300",
                "hover:bg-gray-800/80 hover:border-gray-600/50 hover:text-gray-200",
                "transition-all duration-200"
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);
