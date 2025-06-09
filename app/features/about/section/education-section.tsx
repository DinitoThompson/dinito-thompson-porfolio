"use client";

import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Section } from "../components/section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function EducationSection() {
  return (
    <Section title="Education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Refined timeline indicator */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/30 to-transparent" />
        <div className="absolute left-3.5 top-6 w-2 h-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />

        <div
          className={cn(
            "ml-8 p-6 rounded-lg group",
            "bg-gray-900/40 backdrop-blur-sm",
            "border border-gray-800/50",
            "hover:border-gray-700/50 hover:bg-gray-900/60",
            "transition-all duration-300"
          )}
        >
          <div className="flex items-start gap-4">
            {/* Icon - more subtle */}
            <div className="p-2.5 rounded-lg bg-blue-400/10 border border-blue-400/20 flex-shrink-0">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors">
                  Bachelor&apos;s Degree in Computer Science
                </h3>
                <p className="text-blue-300/90 font-medium text-sm sm:text-base">
                  University of Technology
                </p>
              </div>

              {/* Details - refined layout */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400/70" />
                  <span>Kingston, Jamaica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-400/70" />
                  <span>2020 - 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-400/70" />
                  <span>Computer Science</span>
                </div>
              </div>

              {/* Additional details - subtle discovery element */}
              <div className="pt-3 border-t border-gray-800/30">
                <p className="text-xs text-gray-500">
                  Focused on software engineering, algorithms, and system design
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
