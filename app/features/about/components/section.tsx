"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  className,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
    className={cn("space-y-6", className)}
  >
    {/* Refined section header */}
    <div className="relative">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-200 mb-1">
        {title}
      </h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
    </div>

    {/* Content with subtle spacing */}
    <div className="space-y-4">{children}</div>
  </motion.section>
);
