"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillCategories } from "@/app/features/skills/components/skills";
import { useMediaQuery } from "@/app/components/hooks/useMediaQuery";
import { SkillCategory } from "./components/skills-category";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";

export function SkillsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Always show 3 items per page on mobile
  const itemsPerPage = isLargeScreen ? skillCategories.length : 3;
  const totalPages = Math.ceil(skillCategories.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

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

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <BubblesBackground />

      <div className="min-h-screen flex flex-col relative overflow-hidden max-w-7xl pb-5 mx-auto">
        {/* Header Section */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500"
          >
            My Tech Arsenal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-center mb-8 lg:mb-12 text-gray-300 px-4"
          >
            Explore the tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Main Content Section */}
        <div
          className={`flex-1 w-full ${
            !isLargeScreen ? "flex items-center" : ""
          }`}
        >
          {isLargeScreen ? (
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
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
            </div>
          ) : (
            <div className="relative w-full px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full space-y-4"
                >
                  {getCurrentPageItems().map((category, index) => (
                    <SkillCategory key={index} category={category} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Page Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                      index === activeIndex
                        ? "bg-blue-400"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
