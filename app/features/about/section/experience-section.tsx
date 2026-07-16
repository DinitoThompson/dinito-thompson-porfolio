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
          ? [exp.description[0], exp.description[1], exp.description[2]]
          : [exp.description[0], exp.description[1]],
    }));
  };

  const items = getOptimizedExperience();

  return (
    <Section title="Experience" id="experience">
      <div>
        {items.map((item, index) => (
          <motion.div
            key={`${item.year}-${item.company}`}
            custom={index}
            initial={{ opacity: 0, x: -12 }}
            animate={controls}
          >
            <TimelineItem {...item} isLast={index === items.length - 1} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
