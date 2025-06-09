"use client";

import { floatingIconsClean as floatingIcons } from "./types/floating-icons";
import { motion } from "framer-motion";
import { TypeWriter } from "./components/type-writer";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export default function HomeScreen() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Subtle animated background */}
      <BubblesBackground density="medium" animeMode={true} />

      {/* Floating technology icons - more subtle */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {floatingIcons.map(({ Icon, x, y, delay = 0, scale = 1 }, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/20"
            style={{ left: x, top: y }}
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{
              scale: scale * 0.8,
              rotate: 0,
              opacity: 0.3,
              y: [0, -5, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: delay + 0.5,
              y: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay + 3,
              },
            }}
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </motion.div>
        ))}
      </div>

      {/* Main content - properly spaced and sized */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full mx-auto text-center space-y-8"
        >
          {/* Subtle greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl text-gray-400 font-light">
              Hello, I&apos;m
            </p>
          </motion.div>

          {/* Name - nicely sized, not overwhelming */}
          <motion.div variants={itemVariants}>
            <h1
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
                "font-bold tracking-tight leading-tight",
                "bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400",
                "bg-clip-text text-transparent"
              )}
            >
              Dinito Thompson
            </h1>
          </motion.div>

          {/* Professional title - reasonable sizing */}
          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              <span className="text-blue-300 font-medium">
                Lead Software Developer
              </span>
            </p>
          </motion.div>

          {/* Subtle value proposition */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Transforming abstract complexity into intuitive solutions.
            </p>
          </motion.div>

          {/* Typewriter section - more subtle */}
          <motion.div variants={itemVariants}>
            <div
              className={cn(
                "inline-flex items-center gap-3 px-5 py-3 rounded-lg",
                "bg-gray-900/60 backdrop-blur border border-gray-800/50",
                "text-sm sm:text-base",
                "shadow-sm"
              )}
            >
              <span className="text-gray-500 text-sm">Currently:</span>
              <TypeWriter />
            </div>
          </motion.div>

          {/* Call-to-action buttons - properly spaced */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <NavButton
              href="/home/about"
              text="Professional History"
              variant="primary"
              size="md"
            />

            <NavButton
              href="https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl"
              text="Download Resume"
              variant="secondary"
              size="md"
              icon={Download}
              external={true}
            />
          </motion.div>

          {/* Subtle professional status - reward for looking closer */}
          <motion.div
            variants={itemVariants}
            className="pt-12 mt-8 border-t border-gray-800/30"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                Available for opportunities
              </span>
              <span className="opacity-50">•</span>
              <span>Jamaica</span>
              <span className="opacity-50">•</span>
              <span>Remote friendly</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
