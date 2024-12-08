"use client";

import { FileText, GraduationCap, Calendar, MapPin } from "lucide-react";
import { Section } from "../components/section";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <Section title="Relevant Education">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative ml-6 hover:translate-x-1 transition-transform duration-300"
      >
        <div className="absolute -left-4 top-0 h-full w-0.5 bg-blue-500/20">
          <div className="absolute -left-[5px] top-[20px] sm:top-[24px] h-3 w-3 rounded-full bg-blue-500 border-2 border-gray-900" />
        </div>

        <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg backdrop-blur-sm">
          <div className="flex items-start justify-between flex-wrap gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Bachelor&apos;s Degree in Computer Science
                </h3>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <FileText className="h-4 w-4 text-blue-400/70" />
                  <span className="text-base sm:text-lg">
                    University of Technology
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-blue-400/70" />
                  <span className="text-sm sm:text-base">
                    Kingston, Jamaica
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-4 w-4 text-blue-400/70" />
                  <span className="text-sm sm:text-base">2020 - 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
