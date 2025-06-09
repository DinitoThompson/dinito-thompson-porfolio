"use client";

import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { OverviewSection } from "./section/overview-section";
import { ExecutiveSummary } from "./section/executive-summary-section";
import { WorkExperience } from "./section/experience-section";
import { EducationSection } from "./section/education-section";
import { SkillsSection } from "./section/skills-section";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
import { motion } from "framer-motion";

export default function AboutScreen() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Subtle background - less prominent than home */}
      <BubblesBackground className="opacity-60" />

      {/* Main content with proper spacing */}
      <div className="min-h-screen py-12 px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page introduction - subtle and professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-3">
              About Me
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Software developer passionate about turning concepts into reality
            </p>
          </motion.div>

          {/* Sections with refined spacing */}
          <OverviewSection />
          <ExecutiveSummary />
          <WorkExperience controls={controls} />
          <EducationSection />
          <SkillsSection controls={controls} />

          {/* Call to action - subtle positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 flex justify-center"
          >
            <NavButton
              href="/home/skills"
              text="View Technical Skills"
              variant="secondary"
              size="md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
