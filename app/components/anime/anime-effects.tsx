import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// Anime-inspired card hover effect
interface AnimeCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "pink";
  intensity?: "low" | "medium" | "high";
}

export const AnimeCard: React.FC<AnimeCardProps> = ({
  children,
  className,
  glowColor = "blue",
  intensity = "medium",
}) => {
  const glowColors = {
    blue: "shadow-blue-500/20 hover:shadow-blue-500/40 border-blue-500/20 hover:border-blue-500/40",
    purple:
      "shadow-purple-500/20 hover:shadow-purple-500/40 border-purple-500/20 hover:border-purple-500/40",
    cyan: "shadow-cyan-500/20 hover:shadow-cyan-500/40 border-cyan-500/20 hover:border-cyan-500/40",
    pink: "shadow-pink-500/20 hover:shadow-pink-500/40 border-pink-500/20 hover:border-pink-500/40",
  };

  const intensityClasses = {
    low: "hover:shadow-lg",
    medium: "hover:shadow-xl",
    high: "hover:shadow-2xl",
  };

  return (
    <motion.div
      className={cn(
        "relative group transition-all duration-300",
        "border border-transparent",
        glowColors[glowColor],
        intensityClasses[intensity],
        className
      )}
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Energy border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${
            glowColor === "blue"
              ? "#3b82f6"
              : glowColor === "purple"
              ? "#8b5cf6"
              : glowColor === "cyan"
              ? "#06b6d4"
              : "#ec4899"
          }20 50%, transparent 70%)`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {children}

      {/* Floating particles on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-lg">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-1 h-1 rounded-full",
              glowColor === "blue" && "bg-blue-400",
              glowColor === "purple" && "bg-purple-400",
              glowColor === "cyan" && "bg-cyan-400",
              glowColor === "pink" && "bg-pink-400"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Anime-inspired button with energy effect
interface AnimeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
}

export const AnimeButton: React.FC<AnimeButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
  disabled = false,
}) => {
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white",
    secondary:
      "bg-gray-800/50 border border-blue-500/30 hover:bg-gray-800/80 hover:border-blue-500/50 text-gray-200",
    ghost:
      "bg-transparent hover:bg-blue-500/10 text-blue-400 hover:text-blue-300",
  };

  return (
    <motion.button
      className={cn(
        "relative px-6 py-2.5 rounded-lg font-medium transition-all duration-300 overflow-hidden group",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {/* Energy sweep effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{ width: "200%" }}
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>

      {/* Particle effect on click */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileTap={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{
              top: "50%",
              left: "50%",
            }}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: [0, Math.cos((i * 30 * Math.PI) / 180) * 30],
              y: [0, Math.sin((i * 30 * Math.PI) / 180) * 30],
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </motion.button>
  );
};

// Floating Kanji/Symbols (very subtle)
export const FloatingSymbols: React.FC<{ density?: number }> = ({
  density = 3,
}) => {
  const symbols = ["∞", "◊", "✦", "⬢", "◯", "⬟"];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: density }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/10 text-2xl font-light"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            rotate: [0, 360],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </motion.div>
      ))}
    </div>
  );
};

// Six Eyes cursor follow effect (for special sections)
export const SixEyesCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          animate={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            rotate: [0, 360],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 10, delay: i * 0.02 },
            y: { type: "spring", stiffness: 50, damping: 10, delay: i * 0.02 },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
          style={{
            transform: `rotate(${i * 60}deg) translateX(${10 + i * 2}px)`,
          }}
        />
      ))}
    </div>
  );
};
