import { Section } from "../components/section";
import { resumeSkills, Skill } from "../components/skills-summary";
import { motion } from "framer-motion";
import { SkillProps } from "../types/animation";

export function SkillsSection({ controls }: SkillProps) {
  return (
    <Section title="Skills Summary">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {resumeSkills.map((skill, index) => (
          <motion.div
            key={skill.category}
            custom={index}
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            whileHover={{
              scale: 1,
              transition: { duration: 0.3 },
            }}
          >
            <Skill {...skill} />
          </motion.div>
        ))}
      </div>
      <div className="text-center pt-6 md:pt-10">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
    </Section>
  );
}
