import { FileText } from "lucide-react";
import { Section } from "../components/section";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <Section title="Relevant Education">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700"
      >
        <div className="flex items-center mb-2 md:mb-4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FileText size={24} className="text-blue-400 mr-3" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold">
            Bachelor&apos;s Degree in Computer Science
          </h3>
        </div>
        <p className="text-sm md:text-base text-gray-300">
          University of Technology, Kingston, Jamaica
        </p>
      </motion.div>
    </Section>
  );
}
