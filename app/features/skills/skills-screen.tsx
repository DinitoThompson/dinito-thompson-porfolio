import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillCategories } from "@/app/features/skills/components/skills";
import { useMediaQuery } from "@/app/components/hooks/useMediaQuery";
import { SkillCategory } from "./components/skills-category";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";

export function SkillsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % skillCategories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + skillCategories.length) % skillCategories.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 relative overflow-hidden">
      <BubblesBackground />

      <div className="min-h-screen flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 text-center"
        >
          My Tech Arsenal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-center mb-8 lg:mb-12 text-gray-300"
        >
          Explore the tools and technologies I use to bring ideas to life.
        </motion.p>

        {isLargeScreen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </motion.div>
        ) : (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full mb-6"
              >
                <SkillCategory category={skillCategories[activeIndex]} />
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col items-center mt-6">
              <div className="flex justify-center space-x-4 mb-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-gray-300 w-24"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Prev
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-gray-300 w-24"
                  onClick={nextSlide}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <div className="flex justify-center">
                {skillCategories.map((_, index) => (
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
          </div>
        )}
      </div>
    </div>
  );
}
