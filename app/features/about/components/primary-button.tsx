"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  children,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.02, y: -1 }}
    whileTap={{ scale: 0.98 }}
  >
    <Link href={href} passHref>
      <div
        className={cn(
          "inline-flex items-center justify-center px-6 py-2.5 rounded-lg",
          "bg-gradient-to-r from-blue-600 to-blue-700",
          "hover:from-blue-500 hover:to-blue-600",
          "text-white font-medium text-sm border border-blue-500/20",
          "hover:shadow-lg hover:shadow-blue-500/20",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-950",
          className
        )}
      >
        {children}
      </div>
    </Link>
  </motion.div>
);
