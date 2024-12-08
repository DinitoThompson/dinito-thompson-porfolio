"use client";

import { Section } from "../components/section";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

export function ExecutiveSummary() {
  return (
    <Section title="Executive Summary">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative ml-6 hover:translate-x-1 transition-transform duration-300"
      >
        <div className="absolute -left-4 top-0 h-full w-0.5 bg-blue-500/20">
          <div className="absolute -left-[5px] top-[24px] h-3 w-3 rounded-full bg-blue-500 border-2 border-gray-900" />
        </div>

        <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg backdrop-blur-sm">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <UserCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              </motion.div>
            </div>

            <div className="flex-1">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Experienced Software Developer and Graphic Designer with over 5
                years of expertise in delivering innovative web, API, and mobile
                solutions. Proficient in creating scalable, high-performance
                applications and visually engaging, user-focused designs. Driven
                by a passion for blending technical excellence with creative
                problem-solving to deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
