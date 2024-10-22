import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Skill {
  icon: string;
  name: string;
}

interface Category {
  icon: React.ReactNode;
  name: string;
  skills: Skill[];
}

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 bg-opacity-60 rounded-lg p-3 flex flex-col items-center justify-center transition-colors hover:bg-gray-700"
  >
    <div className="relative w-8 h-8 mb-2">
      <Image
        priority={true}
        src={skill.icon}
        alt={skill.name}
        fill
        className="object-contain"
      />
    </div>
    <span className="text-xs font-medium text-gray-200">{skill.name}</span>
  </motion.div>
);

export const SkillCategory = ({ category }: { category: Category }) => (
  <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700">
    <CardContent className="p-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center mb-5"
      >
        <div className="text-blue-400 mr-3">
          {React.cloneElement(category.icon as React.ReactElement, {
            className: "w-5 h-5",
          })}
        </div>
        <h3 className="text-base font-semibold text-blue-300">
          {category.name}
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-3 gap-3"
      >
        {category.skills.map((skill, skillIndex) => (
          <SkillBadge key={skillIndex} skill={skill} />
        ))}
      </motion.div>
    </CardContent>
  </Card>
);
