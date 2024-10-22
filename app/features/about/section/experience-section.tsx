"use client";

import { Section } from "../components/section";
import { TimelineItem } from "../components/timeline-detail";
import { workExperience } from "../types/work-experience";
import { motion } from "framer-motion";
import { SkillProps } from "../types/animation";

export function WorkExperience({ controls }: SkillProps) {
  return (
    <Section title="Work Experience">
      {workExperience.map((item, index) => (
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
