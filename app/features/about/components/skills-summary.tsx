import { Cloud, Code, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

interface SkillProps {
  icon: React.ReactNode;
  category: string;
  items: string[];
}

export const resumeSkills: SkillProps[] = [
  {
    icon: <Code size={20} />,
    category: "Web",
    items: ["NextJS", "React", "TailwindCSS"],
  },
  {
    icon: <Database size={20} />,
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    icon: <Cloud size={20} />,
    category: "Cloud",
    items: ["AWS", "Firebase"],
  },
  {
    icon: <Smartphone size={20} />,
    category: "Mobile",
    items: ["Flutter", "React Native"],
  },
];

export const Skill: React.FC<SkillProps> = ({ icon, category, items }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 md:p-4 rounded-lg shadow-lg border border-gray-700"
  >
    <div className="flex items-center mb-2">
      <span className="text-blue-400 mr-2">{icon}</span>
      <h3 className="text-base md:text-lg font-semibold">{category}</h3>
    </div>
    <p className="text-xs md:text-sm text-gray-300">{items.join(", ")}</p>
  </motion.div>
);
