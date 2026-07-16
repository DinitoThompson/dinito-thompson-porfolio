"use client";

import { Section } from "../components/section";
import { resumeSkills, Skill } from "../components/skills-summary";
import { AnimationControls, motion } from "framer-motion";

interface SkillsSectionProps {
  controls: AnimationControls;
}

export function SkillsSection({ controls }: SkillsSectionProps) {
  return (
    <Section title="Primary Stack" id="stack">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {resumeSkills.map((skill, index) => (
          <motion.div
            key={skill.category}
            custom={index}
            initial={{ opacity: 0, y: 16 }}
            animate={controls}
            className="min-w-0"
          >
            <Skill {...skill} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
