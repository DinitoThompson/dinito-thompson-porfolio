import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "../components/section";
import { onlineLinks } from "../types/online-links";

export function OverviewSection() {
  return (
    <Section title="About Me">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-between bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-8 rounded-lg shadow-lg border border-gray-700 mb-8 md:mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500 mb-4 md:mb-0 flex-shrink-0"
        >
          <Image
            priority={true}
            width={500}
            height={500}
            src="/profile.jpg"
            alt="Dinito Thompson"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="md:ml-8 flex-grow text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-2 text-blue-400"
          >
            Dinito R. Thompson
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-2 md:mb-4"
          >
            Software Developer & Graphic Designer
          </motion.p>
          <p className="text-sm md:text-base text-gray-400 mb-4">
            Kingston, Jamaica
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center md:justify-start space-x-4"
          >
            {onlineLinks.map(({ href, Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Icon size={20} className="md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
