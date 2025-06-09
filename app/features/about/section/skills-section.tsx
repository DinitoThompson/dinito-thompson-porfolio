"use client";

import { Section } from "../components/section";
import { resumeSkills, Skill } from "../components/skills-summary";
import { AnimationControls, motion } from "framer-motion";

interface SkillsSectionProps {
  controls: AnimationControls;
}

export function SkillsSection({ controls }: SkillsSectionProps) {
  return (
    <Section title="Primary Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeSkills.map((skill, index) => (
          <motion.div
            key={skill.category}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: index * 0.1 }}
          >
            <Skill {...skill} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
