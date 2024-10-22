"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string[];
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  company,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-6 md:mb-8 bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700"
  >
    <p className="text-xs md:text-sm text-blue-400">{year}</p>
    <h4 className="text-lg md:text-xl font-semibold">{title}</h4>
    <p className="text-base md:text-lg text-gray-300 mb-2">{company}</p>
    <ul className="list-disc list-inside text-sm md:text-base text-gray-400">
      {description.map((item, index) => (
        <li key={index} className="mb-1">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);
