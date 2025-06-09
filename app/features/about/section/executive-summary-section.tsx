"use client";

import { Section } from "../components/section";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExecutiveSummary() {
  return (
    <Section title="Professional Summary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Refined timeline indicator */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/30 to-transparent" />
        <div className="absolute left-3.5 top-4 w-2 h-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />

        <div
          className={cn(
            "ml-8 p-6 rounded-lg",
            "bg-gray-900/40 backdrop-blur-sm",
            "border border-gray-800/50",
            "hover:border-gray-700/50 hover:bg-gray-900/60",
            "transition-all duration-300"
          )}
        >
          <div className="flex items-start gap-4">
            {/* Icon container - more subtle */}
            <div className="p-2.5 rounded-lg bg-blue-400/10 border border-blue-400/20 flex-shrink-0">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <UserCircle className="h-5 w-5 text-blue-400" />
              </motion.div>
            </div>

            {/* Content - refined typography */}
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Experienced Software Developer and Graphic Designer with 5+
                years of expertise in delivering innovative web, API, and mobile
                solutions. Specialized in creating scalable, high-performance
                applications and user-focused designs. Passionate about blending
                technical excellence with creative problem-solving to deliver
                exceptional digital experiences.
              </p>

              {/* Subtle highlight stats - discover on closer look */}
              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-800/30">
                <div className="text-xs text-gray-400">
                  <span className="text-blue-300 font-medium">5+</span> years
                  experience
                </div>
                <div className="text-xs text-gray-400">
                  <span className="text-blue-300 font-medium">10+</span>{" "}
                  projects delivered
                </div>
                <div className="text-xs text-gray-400">
                  <span className="text-blue-300 font-medium">Full-stack</span>{" "}
                  expertise
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
