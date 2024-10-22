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
    <div className="min-h-screen text-white relative overflow-hidden">
      <BubblesBackground />
      <div className="min-h-screen flex flex-col justify-center p-10 sm:p-6 md:p-8 lg:p-16 relative overflow-hidden">
        <OverviewSection />

        <ExecutiveSummary />

        <WorkExperience controls={controls} />

        <EducationSection />

        <SkillsSection controls={controls} />
      </div>
    </div>
  );
}
