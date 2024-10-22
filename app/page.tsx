"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Code, Server, Smartphone } from "lucide-react";

export default function Welcome() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => router.push("/home"), 1000);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
        duration: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: { y: -20, opacity: 0 },
  };

  const loaderVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 5, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-indigo-500 mb-2"
          variants={childVariants}
        >
          Dinito R. Thompson
        </motion.h1>
        <motion.p className="text-xl mb-6 text-white" variants={childVariants}>
          Software Developer
        </motion.p>

        <motion.div
          className="flex justify-center space-x-8 mb-6"
          variants={childVariants}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Code size={32} className="text-blue-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Server size={32} className="text-blue-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Smartphone size={32} className="text-blue-400" />
          </motion.div>
        </motion.div>

        <motion.div
          className="h-1 bg-blue-400 mb-4"
          variants={loaderVariants}
        ></motion.div>

        <motion.p className="text-sm text-white" variants={childVariants}>
          {isExiting
            ? "Launching digital experience..."
            : "Preparing to showcase expertise..."}
        </motion.p>
      </motion.div>
    </div>
  );
}
