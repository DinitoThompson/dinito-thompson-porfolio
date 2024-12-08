"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PortfolioButtonProps {
  href: string;
  text: string;
}

export const NavButton: React.FC<PortfolioButtonProps> = ({ href, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex justify-center mt-8"
  >
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02, translateX: 4 }}
        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg backdrop-blur-sm"
      >
        <span className="text-white font-medium">{text}</span>
        <motion.div
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowRight className="w-5 h-5 text-blue-400" />
        </motion.div>

        <div className="absolute inset-0 rounded-lg bg-blue-400/0 group-hover:bg-blue-400/5 transition-colors duration-300" />
      </motion.div>
    </Link>
  </motion.div>
);
