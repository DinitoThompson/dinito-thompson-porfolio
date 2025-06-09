"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  skillCategories,
  SkillCategory as SkillCategoryType,
} from "@/app/features/skills/types/skills";
import { useMediaQuery } from "@/app/components/hooks/useMediaQuery";
import { SkillCategory } from "./components/skills-category";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { FloatingSymbols } from "@/app/components/anime/anime-effects";
import { NavButton } from "@/components/ui/nav-button";
import { cn } from "@/lib/utils";

export function SkillsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Responsive items per page
  const itemsPerPage = isLargeScreen ? skillCategories.length : 3;
  const totalPages = Math.ceil(skillCategories.length / itemsPerPage);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentPageItems = () => {
    const startIdx = activeIndex * itemsPerPage;
    return skillCategories.slice(startIdx, startIdx + itemsPerPage);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    }),
  };

  const carouselItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Subtle background */}
      <BubblesBackground className="opacity-60" />

      <div className="min-h-screen flex flex-col relative max-w-7xl mx-auto">
        {/* Refined header section */}
        <div className="w-full px-6 sm:px-8 lg:px-12 pt-12 sm:pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
              Technical Skills
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to build exceptional digital
              experiences
            </p>
          </motion.div>
        </div>

        {/* Main content section - refined spacing */}
        <div className="flex-1 flex flex-col px-6 sm:px-8 lg:px-12 pb-12">
          <div className="relative">
            <FloatingSymbols density={2} />
            {isLargeScreen ? (
              /* Desktop grid layout */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-xl bg-gray-900/20 backdrop-blur-sm border border-gray-800/30"
              >
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <SkillCategory category={category} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Mobile carousel layout */
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full max-w-sm">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeIndex}
                      variants={carouselItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-full space-y-4"
                    >
                      {getCurrentPageItems().map(
                        (category: SkillCategoryType) => (
                          <SkillCategory
                            key={category.name}
                            category={category}
                          />
                        )
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation buttons - refined styling */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={prevSlide}
                    className={cn(
                      "p-2 rounded-lg",
                      "bg-gray-900/60 backdrop-blur border border-gray-800/50",
                      "text-gray-300 hover:text-white hover:bg-gray-800/80",
                      "transition-all duration-200 shadow-lg",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    )}
                    aria-label="Previous skills page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={nextSlide}
                    className={cn(
                      "p-2 rounded-lg",
                      "bg-gray-900/60 backdrop-blur border border-gray-800/50",
                      "text-gray-300 hover:text-white hover:bg-gray-800/80",
                      "transition-all duration-200 shadow-lg",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    )}
                    aria-label="Next skills page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Pagination dots - subtle styling */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === activeIndex
                          ? "bg-blue-400 scale-125"
                          : "bg-gray-600 hover:bg-gray-500"
                      )}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to skills page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Call to action - subtle positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <NavButton
              href="/home/projects"
              text="View Projects"
              variant="secondary"
              size="md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
