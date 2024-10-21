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
    className="bg-gray-700 bg-opacity-50 rounded-lg p-2 flex flex-col items-center justify-center"
  >
    <div className="relative w-8 h-8 mb-1">
      <Image
        priority={true}
        src={skill.icon}
        alt={skill.name}
        fill
        className="object-contain"
      />
    </div>
    <span className="text-xs text-center font-medium text-gray-300">
      {skill.name}
    </span>
  </motion.div>
);

export const SkillCategory = ({ category }: { category: Category }) => (
  <Card className="bg-gray-800 bg-opacity-30 shadow-lg">
    <CardContent className="p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center mb-4"
      >
        <div className="text-blue-400 mr-3">
          {React.cloneElement(category.icon as React.ReactElement, {
            className: "w-6 h-6",
          })}
        </div>
        <h3 className="text-lg font-semibold text-blue-300">{category.name}</h3>
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
