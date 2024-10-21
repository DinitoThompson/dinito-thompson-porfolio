import { floatingIcons } from "./types/floating-icons";
import { motion } from "framer-motion";
import { TypeWriter } from "./components/type-writer";
import { PrimaryButton } from "../about/components/primary-button";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" />
      <BubblesBackground />

      <section className="min-h-screen flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
        {floatingIcons.map(({ Icon, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400 opacity-50"
            style={{ left: x, top: y }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.5,
            }}
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </motion.div>
        ))}

        <div className="z-10 max-w-4xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-gray-400"
          >
            <span className="text-white">Welcome</span>, I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-indigo-500"
          >
            Dinito R. Thompson
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-400"
          >
            🌞 <span className="text-white font-bold">Software Developer</span>{" "}
            by Day, 🌟{" "}
            <span className="text-white font-bold">Graphic Designer</span> by
            Night.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <div className="bg-gray-800 text-blue-300 px-4 py-2 sm:px-6 sm:py-3 rounded-sm text-sm sm:text-base md:text-lg font-semibold inline-block">
              <TypeWriter />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <PrimaryButton href="/home/about">About Me</PrimaryButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
