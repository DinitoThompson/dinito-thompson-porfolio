"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      {/* Refined timeline line and dot */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/30 via-blue-400/20 to-transparent" />
      <div className="absolute left-3.5 top-6 w-2 h-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50 transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-400/60" />

      <div
        className={cn(
          "ml-8 mb-6 p-6 rounded-lg",
          "bg-gray-900/40 backdrop-blur-sm",
          "border border-gray-800/50",
          "hover:border-gray-700/50 hover:bg-gray-900/60",
          "transition-all duration-300 ease-out",
          "group-hover:translate-x-1"
        )}
      >
        {/* Header with refined layout */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors">
              {title}
            </h3>
            <p className="text-blue-300/90 font-medium text-sm sm:text-base">
              {company}
            </p>
          </div>

          {/* Year badge - more subtle */}
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
              "bg-blue-400/10 border border-blue-400/20 text-blue-300",
              "whitespace-nowrap"
            )}
          >
            {year}
          </span>
        </div>

        {/* Achievements list - refined styling */}
        <ul className="space-y-2.5">
          {description.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 text-gray-300 leading-relaxed"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400/60" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
