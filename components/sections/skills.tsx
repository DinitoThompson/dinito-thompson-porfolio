import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillCategories } from "@/lib/types/skills";
import { useMediaQuery } from "@/app/components/hooks/useMediaQuery";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const groupedCategories = skillCategories.reduce((acc, category, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(category);
    return acc;
  }, [] as Category[][]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % groupedCategories.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + groupedCategories.length) % groupedCategories.length
    );
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-16 bg-gradient-to-t from-purple-900 via-gray-900 to-black text-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Skills & Expertise
        </motion.h2>

        {isLargeScreen ? (
          <div className="grid grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        ) : (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {groupedCategories[activeIndex].map((category, index) => (
                    <SkillCategory key={index} category={category} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center mt-6">
              {groupedCategories.map((_, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="ghost"
                  className={`mx-1 ${
                    index === activeIndex ? "text-blue-400" : "text-gray-500"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {index === activeIndex ? "●" : "○"}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const SkillCategory = ({ category }: { category: Category }) => (
  <Card className="bg-gray-800 bg-opacity-30 shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
    <CardContent className="p-4">
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 mr-3"
        >
          {React.cloneElement(category.icon as React.ReactElement, {
            className: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8",
          })}
        </motion.div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-300">
          {category.name}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillBadge key={skillIndex} skill={skill} />
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="group bg-gray-700 bg-opacity-50 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-opacity-70 hover:shadow-md"
  >
    <motion.div
      className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={skill.icon}
        alt={skill.name}
        priority={true}
        fill
        className="object-contain"
      />
    </motion.div>
    <span className="text-xs sm:text-sm text-center font-medium group-hover:text-blue-400">
      {skill.name}
    </span>
  </motion.div>
);
