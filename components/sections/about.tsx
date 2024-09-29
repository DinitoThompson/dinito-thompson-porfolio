"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code, Palette, Award, Briefcase, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById("about");

      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        const opacity = Math.max(
          0,
          Math.min(
            1,
            (scrollY - (elementTop - windowHeight)) / (elementHeight / 2)
          )
        );

        controls.start({ opacity: opacity });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gradient-to-t from-black via-gray-900 to-blue-800 py-12 sm:py-16 md:py-20 text-gray-100 flex flex-col justify-end relative"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div className="absolute top-5 sm:top-8 md:top-10 left-1/2 transform -translate-x-1/2 text-blue-400 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 md:order-2"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto overflow-hidden rounded-full border-4 border-blue-500"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/profile.jpg"
                width={500}
                height={500}
                alt="Dinito Thompson"
                className="object-cover w-full h-full cursor-pointer"
              />
            </motion.div>
            <motion.p
              className="text-base sm:text-lg text-center bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I&apos;m Dinito Thompson, a Fullstack Developer and Graphic
              Designer with 5+ years of experience creating scalable,
              user-centric applications. I&apos;m passionate about blending
              clean code with intuitive design to build impactful,
              forward-thinking solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 sm:space-y-8 md:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard
                icon={<Code />}
                title="Software Developer"
                description="Fullstack Development"
                color="from-blue-500 to-purple-500"
              />
              <InfoCard
                icon={<Palette />}
                title="Graphic Designer"
                description="UI/UX | Brand Design"
                color="from-purple-500 to-pink-500"
              />
              <InfoCard
                icon={<Award />}
                title="Education"
                description="Bachelor's Degree"
                color="from-pink-500 to-red-500"
              />
              <InfoCard
                icon={<Briefcase />}
                title="Professional"
                description="5+ Years Experience"
                color="from-red-500 to-yellow-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

const InfoCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-gray-800 p-4 sm:p-6 rounded-lg text-center shadow-lg overflow-hidden relative`}
  >
    <motion.div
      className="absolute inset-0 opacity-20"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-full h-full bg-gradient-to-br ${color}`} />
    </motion.div>
    <motion.div
      className="text-blue-400 mb-3 sm:mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: "w-6 h-6 sm:w-8 sm:h-8 mx-auto",
      })}
    </motion.div>
    <h3 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-400">{description}</p>
  </motion.div>
);
