import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { skillCategories } from "@/lib/types/skills";

interface Skill {
  icon: string;
  name: string;
}

interface Category {
  icon: React.ReactNode;
  name: string;
  skills: Skill[];
}

export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-gradient-to-t from-purple-900 via-gray-900 to-black py-10 sm:py-14 md:py-16 text-gray-100 relative overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        style={{ opacity, scale }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const SkillCategory = ({ category }: { category: Category }) => (
  <div className="bg-gray-800 bg-opacity-30 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="text-blue-400 mr-3"
      >
        {React.cloneElement(category.icon as React.ReactElement, {
          className: "w-6 h-6 sm:w-8 sm:h-8",
        })}
      </motion.div>
      <h3 className="text-lg sm:text-xl font-semibold text-blue-300">
        {category.name}
      </h3>
    </div>
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {category.skills.map((skill, skillIndex) => (
        <SkillBadge key={skillIndex} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="group bg-gray-700 bg-opacity-50 rounded-lg p-2 flex flex-col items-center justify-center transition-all duration-300 hover:bg-opacity-70 hover:shadow-md"
  >
    <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2">
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        className="object-contain transition-all duration-300 group-hover:scale-110"
      />
    </div>
    <span className="text-xs text-center font-medium group-hover:text-blue-300 transition-colors duration-300">
      {skill.name}
    </span>
  </motion.div>
);
