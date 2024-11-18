"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AlertLightsBackground } from "./components/animated-background/alert-lights-bg";

export default function Welcome() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => router.push("/home"), 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#050A18] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <AlertLightsBackground />

      {/* Decorative orbiting circles */}
      <motion.div
        className="absolute w-[150%] h-[150%] border border-blue-500/10 rounded-full"
        variants={orbitVariants}
        animate="animate"
      />
      <motion.div
        className="absolute w-[120%] h-[120%] border border-indigo-500/10 rounded-full"
        variants={orbitVariants}
        animate="animate"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className="text-center space-y-4">
          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500"
          >
            Welcome
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-blue-200/80 text-sm md:text-base font-light tracking-wide"
          >
            Exploring the intersection of design and development
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="w-32 h-0.5 mx-auto mt-6 bg-gradient-to-r from-blue-400 to-indigo-400 origin-left"
            variants={progressVariants}
          />

          <motion.p
            variants={textVariants}
            className="text-blue-300/60 text-xs md:text-sm font-light"
          >
            {isExiting ? "Launching experience..." : "Loading portfolio..."}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
