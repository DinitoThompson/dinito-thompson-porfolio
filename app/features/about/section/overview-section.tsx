"use client";

import { motion } from "framer-motion";
import { Section } from "../components/section";
import { onlineLinks } from "../types/online-links";
import { MapPin, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SimpleAnimeProfile } from "@/app/components/anime/anime-profile";
export function OverviewSection() {
  return (
    <Section title="Overview">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Subtle timeline indicator */}
        <div className="absolute left-4 top-6 bottom-0 w-px bg-gradient-to-b from-blue-400/30 to-transparent" />
        <div className="absolute left-3.5 top-6 w-2 h-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />

        <div
          className={cn(
            "ml-8 p-6 rounded-lg",
            "bg-gray-900/40 backdrop-blur-sm",
            "border border-gray-800/50",
            "hover:border-gray-700/50 hover:bg-gray-900/60",
            "transition-all duration-300"
          )}
        >
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Profile image - more reasonable size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group flex-shrink-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full opacity-60 group-hover:opacity-80 transition duration-300 blur-sm" />
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-gray-700/50">
                <SimpleAnimeProfile
                  src="/profile.jpg"
                  alt="Dinito Thompson"
                  className="w-24 h-24 sm:w-32 sm:h-32" // Keep your existing sizing
                />
              </div>
            </motion.div>

            {/* Profile info - refined sizing */}
            <div className="flex-1 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-2">
                  Dinito R. Thompson
                </h3>

                <p className="text-blue-300 font-medium mb-3">
                  Lead Software Developer
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-blue-400/70" />
                  <span>Kingston, Jamaica</span>
                  <Circle className="w-1 h-1 fill-green-400 text-green-400 ml-2" />
                  <span className="text-green-400 text-xs">
                    Available for opportunities
                  </span>
                </div>
              </motion.div>

              {/* Social links - refined styling */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-3"
              >
                {onlineLinks.map(({ href, Icon }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-lg",
                      "bg-gray-800/50 border border-gray-700/50",
                      "text-gray-400 hover:text-blue-300",
                      "hover:bg-gray-800/80 hover:border-gray-600/50",
                      "transition-all duration-200"
                    )}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
