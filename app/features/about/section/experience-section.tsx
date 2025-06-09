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

    // On mobile, show fewer bullet points for better readability
    return workExperience.map((exp, index) => ({
      ...exp,
      description:
        index < 2
          ? [exp.description[0], exp.description[1], exp.description[2]]
          : [exp.description[0], exp.description[1]],
    }));
  };

  return (
    <Section title="Professional Experience">
      <div className="space-y-0">
        {getOptimizedExperience().map((item, index) => (
          <motion.div
            key={item.year}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: index * 0.1 }}
          >
            <TimelineItem {...item} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
