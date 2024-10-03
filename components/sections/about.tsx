import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Award, Briefcase, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-t from-black via-gray-900 to-blue-800 py-12 sm:py-16 md:py-20 text-gray-100 flex flex-col justify-end relative"
    >
      <motion.div
        className="absolute top-5 sm:top-8 md:top-10 left-1/2 transform -translate-x-1/2 text-blue-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </motion.div>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          <div className="space-y-6 md:order-2">
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto overflow-hidden rounded-full border-4 border-blue-500"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/profile.jpg"
                priority={true}
                width={500}
                height={500}
                alt="Dinito Thompson"
                className="object-cover w-full h-full cursor-pointer"
              />
            </motion.div>
            <motion.p
              className="text-base sm:text-lg text-center bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(0,0,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              I&apos;m Dinito Thompson, a Fullstack Developer and Graphic
              Designer with 5+ years of experience creating scalable,
              user-centric applications. I&apos;m passionate about blending
              clean code with intuitive design to build impactful,
              forward-thinking solutions.
            </motion.p>
          </div>

          <div className="space-y-6 sm:space-y-8 md:order-1">
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
                title="Bachelor's Degree"
                description="Computer Science"
                color="from-pink-500 to-red-500"
              />
              <InfoCard
                icon={<Briefcase />}
                title="Work Experience"
                description="5+ Years"
                color="from-red-500 to-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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
    whileHover={{ scale: 1.1, rotate: 5, zIndex: 1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={`bg-gray-800 p-4 sm:p-6 rounded-lg text-center shadow-lg overflow-hidden relative`}
  >
    <motion.div
      className="absolute inset-0 opacity-20"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.4, scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-full h-full bg-gradient-to-br ${color}`} />
    </motion.div>
    <motion.div
      className="text-blue-400 mb-3 sm:mb-4"
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: "w-6 h-6 sm:w-8 sm:h-8 mx-auto",
      })}
    </motion.div>
    <motion.h3
      className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg"
      whileHover={{ scale: 1.1, color: "#60A5FA" }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="text-xs sm:text-sm text-gray-400"
      whileHover={{ scale: 1.05, color: "#F9FAFB" }}
    >
      {description}
    </motion.p>
  </motion.div>
);
