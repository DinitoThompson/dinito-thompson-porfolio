import { motion } from "framer-motion";

export const BubblesBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" />
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-blue-500 rounded-full opacity-5"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: Math.random() * 0.5 + 0.5,
        }}
        transition={{
          duration: Math.random() * 20 + 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: `${Math.random() * 300 + 200}px`,
          height: `${Math.random() * 300 + 200}px`,
        }}
      />
    ))}
  </div>
);
