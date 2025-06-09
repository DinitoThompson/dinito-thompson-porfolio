"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

interface Skill {
  icon: string;
  name: string;
}

interface Category {
  icon: React.ReactNode;
  name: string;
  skills: Skill[];
}

const SkillBadge = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      delay: index * 0.05,
      ease: "easeOut",
    }}
    whileHover={{ scale: 1.05, y: -2 }}
    className={cn(
      "group p-3 rounded-lg flex flex-col items-center justify-center",
      "bg-gray-800/40 backdrop-blur-sm border border-gray-700/30",
      "hover:bg-gray-800/60 hover:border-gray-600/50",
      "transition-all duration-200 ease-out",
      "cursor-default"
    )}
  >
    {/* Icon container with subtle glow effect */}
    <div className="relative w-8 h-8 mb-2 flex justify-center items-center">
      <div className="absolute inset-0 bg-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-200" />
      <Image
        src={skill.icon}
        alt={skill.name}
        width={32}
        height={32}
        className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-200"
        loading="lazy"
      />
    </div>

    {/* Skill name */}
    <span className="text-xs font-medium text-gray-300 text-center group-hover:text-gray-200 transition-colors duration-200">
      {skill.name}
    </span>
  </motion.div>
);

export const SkillCategory = ({ category }: { category: Category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={cn(
      "group p-6 rounded-lg",
      "bg-gray-900/40 backdrop-blur-sm border border-gray-800/50",
      "hover:bg-gray-900/60 hover:border-gray-700/50",
      "transition-all duration-300 ease-out",
      "hover:shadow-lg hover:shadow-black/20"
    )}
  >
    {/* Category header */}
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex items-center mb-5 space-x-3"
    >
      {/* Category icon */}
      <div className="p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.2 }}
          className="text-blue-400"
        >
          {React.cloneElement(category.icon as React.ReactElement, {
            className: "w-5 h-5",
          })}
        </motion.div>
      </div>

      {/* Category title */}
      <h3 className="text-base font-semibold text-gray-200 group-hover:text-blue-300 transition-colors duration-200">
        {category.name}
      </h3>

      {/* Skill count - subtle discovery element */}
      <span className="text-xs text-gray-500 ml-auto opacity-60 group-hover:opacity-100 transition-opacity duration-200">
        {category.skills.length}
      </span>
    </motion.div>

    {/* Skills grid */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="grid grid-cols-3 gap-3"
    >
      {category.skills.map((skill, skillIndex) => (
        <SkillBadge key={skill.name} skill={skill} index={skillIndex} />
      ))}
    </motion.div>
  </motion.div>
);
