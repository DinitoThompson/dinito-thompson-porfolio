import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

export default function Intro() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.1, 0.3], [0, -50]);

  const descriptionOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const descriptionY = useTransform(scrollYProgress, [0.2, 0.4], [0, -50]);

  const traitsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const traitsScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.8]);

  const buttonOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const buttonScale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.8]);

  const iconsOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  const iconsScale = useTransform(scrollYProgress, [0.5, 0.7], [1, 0.8]);

  const floatingIcons = [
    { Icon: Code, x: "10%", y: "20%", delay: 0 },
    { Icon: Palette, x: "85%", y: "15%", delay: 0.5 },
    { Icon: Zap, x: "75%", y: "75%", delay: 1 },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="intro"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-800 flex items-center justify-center p-4 relative overflow-hidden text-gray-100 cursor-default"
    >
      {floatingIcons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400 opacity-50"
          style={{ left: x, top: y, opacity: iconsOpacity, scale: iconsScale }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: delay,
          }}
        >
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </motion.div>
      ))}

      <div className="z-10 max-w-4xl w-full text-center px-4">
        <motion.h1
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400"
        >
          Dinito Thompson
        </motion.h1>
        <motion.h2
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-300"
        >
          Software Developer & Graphic Designer
        </motion.h2>
        <motion.p
          style={{ opacity: descriptionOpacity, y: descriptionY }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-400"
        >
          Crafting digital experiences with code and creativity
        </motion.p>
        <motion.div
          style={{ opacity: traitsOpacity, scale: traitsScale }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12"
        >
          {["Innovative", "Creative", "Passionate"].map((trait) => (
            <motion.div
              key={trait}
              className="bg-gray-800 text-blue-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {trait}
            </motion.div>
          ))}
        </motion.div>
        <motion.div style={{ opacity: buttonOpacity, scale: buttonScale }}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <a href="#about">Discover My World</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
