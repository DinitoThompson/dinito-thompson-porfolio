"use client";

import { Section } from "../components/section";
import { TimelineItem } from "../components/timeline-detail";
import { workExperience } from "../types/work-experience";
import { motion } from "framer-motion";
import { SkillProps } from "../types/animation";
import { useMediaQuery } from "@/app/components/hooks/useMediaQuery";

export function WorkExperience({ controls }: SkillProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const getOptimizedExperience = () => {
    if (!isMobile) return workExperience;

    return workExperience.map((exp, index) => ({
      ...exp,
      description:
        index < 2
          ? [exp.description[0], exp.description[1]] // Show two points for most recent
          : [exp.description[0]], // Show one point for all others
    }));
  };

  return (
    <Section title="Work Experience">
      {getOptimizedExperience().map((item, index) => (
        <motion.div
          key={item.year}
          custom={index}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
        >
          <TimelineItem {...item} />
        </motion.div>
      ))}
    </Section>
  );
}
