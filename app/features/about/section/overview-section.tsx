"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "../components/section";
import { onlineLinks } from "../types/online-links";
import { MapPin } from "lucide-react";

export function OverviewSection() {
  return (
    <Section title="About Me">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative ml-6"
      >
        <div className="absolute -left-4 top-0 h-full w-0.5 bg-blue-500/20">
          <div className="absolute -left-[5px] top-[20px] sm:top-[24px] h-3 w-3 rounded-full bg-blue-500 border-2 border-gray-900" />
        </div>

        <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm" />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-blue-500/50">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src="/profile.jpg"
                  alt="Dinito Thompson"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 384px"
                />
              </div>
            </motion.div>

            <div className="flex-grow text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Dinito R. Thompson
                </h1>

                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-lg sm:text-xl md:text-2xl text-blue-400 font-medium">
                    Software Developer & Graphic Designer
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-blue-400/70" />
                    <span className="text-sm sm:text-base">
                      Kingston, Jamaica
                    </span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4"
                >
                  {onlineLinks.map(({ href, Icon }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
