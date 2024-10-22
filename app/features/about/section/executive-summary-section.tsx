import { Section } from "../components/section";
import { motion } from "framer-motion";

export function ExecutiveSummary() {
  return (
    <Section title="Executive Summary">
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-base md:text-lg text-gray-300 bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700"
      >
        Experienced Software Developer and Graphic Designer with over 5 years of
        expertise in delivering innovative web, API, and mobile solutions.
        Proficient in creating scalable, high-performance applications and
        visually engaging, user-focused designs. Driven by a passion for
        blending technical excellence with creative problem-solving to deliver
        exceptional user experiences.
      </motion.p>
    </Section>
  );
}
