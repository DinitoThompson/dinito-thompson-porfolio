import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SimpleAnimeProfileProps {
  src: string;
  alt: string;
  className?: string;
}

export const SimpleAnimeProfile: React.FC<SimpleAnimeProfileProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className={cn("relative group", className)}>
      {/* Six Eyes aura - only shows on hover, very subtle */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
              transform: `rotate(${i * 60}deg) translateX(80px)`, // Outside the existing circle
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      {/* Subtle glow effect behind existing image */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/5 transition-all duration-500"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Your existing image - UNCHANGED */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-gray-700/50 group-hover:border-cyan-400/30 transition-colors duration-300">
        <Image
          priority={true}
          width={200}
          height={200}
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="128px"
        />
      </div>

      {/* Very subtle floating particles on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-full">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-300/80 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
