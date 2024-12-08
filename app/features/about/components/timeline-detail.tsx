"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string[];
}

export function TimelineItem({
  year,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-6 sm:mb-8 ml-6 hover:translate-x-1 transition-transform duration-300"
    >
      <div className="absolute -left-4 top-0 h-full w-0.5 bg-blue-500/20">
        <div className="absolute -left-[5px] top-[24px] h-3 w-3 rounded-full bg-blue-500 border-2 border-gray-900" />
      </div>

      <div className="ml-6 p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-base sm:text-lg text-blue-400/90 font-medium">
              {company}
            </p>
          </div>
          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium whitespace-nowrap">
            {year}
          </span>
        </div>

        <ul className="space-y-2 sm:space-y-3">
          {description.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 sm:gap-3 text-gray-300 leading-relaxed"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500/50" />
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
