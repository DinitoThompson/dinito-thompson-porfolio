"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export const Section: React.FC<SectionProps> = ({ children, title }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-8 md:mb-16"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500">
      {title}
    </h2>
    {children}
  </motion.section>
);
