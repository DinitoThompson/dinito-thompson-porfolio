import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { OverviewSection } from "./section/overview-section";
import { ExecutiveSummary } from "./section/executive-summary-section";
import { WorkExperience } from "./section/experience-section";
import { EducationSection } from "./section/education-section";
import { SkillsSection } from "./section/skills-section";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";

export default function AboutScreen() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <BubblesBackground />
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 relative z-10">
        <OverviewSection />

        <ExecutiveSummary />

        <WorkExperience controls={controls} />

        <EducationSection />

        <SkillsSection controls={controls} />
      </div>
    </div>
  );
}
