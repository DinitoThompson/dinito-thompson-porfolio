import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

// Enhanced Sidebar with Gojo-inspired elements
interface AnimeSidebarProps {
  children: React.ReactNode;
  isExpanded: boolean;
  className?: string;
}

export const AnimeSidebar: React.FC<AnimeSidebarProps> = ({
  children,
  isExpanded,
  className,
}) => {
  return (
    <motion.aside
      className={cn(
        "relative border-r border-gray-800/50 bg-gray-900/95 backdrop-blur-sm",
        "transition-all duration-300 overflow-hidden",
        className
      )}
      animate={{ width: isExpanded ? "16rem" : "4rem" }}
    >
      {/* Infinity barrier effect along the border */}
      <motion.div
        className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Six Eyes particles floating in sidebar */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              top: `${20 + i * 30}%`,
              left: isExpanded ? "12px" : "50%",
            }}
            animate={{
              x: [0, 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {children}
    </motion.aside>
  );
};

// Enhanced Navigation Item with anime hover effects
interface AnimeNavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

export const AnimeNavItem: React.FC<AnimeNavItemProps> = ({
  href,
  icon,
  label,
  isActive,
  isExpanded,
  onClick,
}) => {
  return (
    <motion.div
      className={cn(
        "relative group mx-2 rounded-lg transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/5",
        isActive && "bg-gradient-to-r from-blue-500/20 to-cyan-500/10"
      )}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Active indicator with energy effect */}
      {isActive && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-r-full"
          animate={{
            opacity: [0.6, 1, 0.6],
            backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <Link href={href} passHref>
        <motion.a
          onClick={onClick}
          className={cn(
            "w-full flex items-center p-3 text-gray-300 hover:text-white transition-colors duration-200",
            isExpanded ? "justify-start" : "justify-center",
            "cursor-pointer"
          )}
        >
          {/* Icon with subtle rotation on hover */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>

          {/* Label with slide animation */}
          {isExpanded && (
            <motion.span
              className="ml-3 font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {label}
            </motion.span>
          )}
        </motion.a>
      </Link>

      {/* Hover particle effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-lg">
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-300 rounded-full"
            style={{
              top: `${25 + i * 20}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: Math.random() * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Floating Action Button with Domain Expansion reference
interface AnimeFloatingButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export const AnimeFloatingButton: React.FC<AnimeFloatingButtonProps> = ({
  onClick,
  icon,
  label,
  position = "bottom-right",
}) => {
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  return (
    <motion.div
      className={cn("fixed z-50", positionClasses[position])}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Domain expansion circle effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-400/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.button
        onClick={onClick}
        className={cn(
          "relative w-14 h-14 rounded-full",
          "bg-gradient-to-br from-blue-600 to-cyan-600",
          "hover:from-blue-500 hover:to-cyan-500",
          "shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
          "flex items-center justify-center text-white",
          "transition-all duration-300"
        )}
        whileHover={{
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        }}
      >
        {/* Six Eyes pattern inside button */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
                transform: `rotate(${i * 60}deg) translateX(18px)`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main icon */}
        <div className="relative z-10">{icon}</div>
      </motion.button>

      {/* Label tooltip */}
      {label && (
        <motion.div
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          {label}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </motion.div>
      )}
    </motion.div>
  );
};

// Page transition effect inspired by Domain Expansion
export const DomainExpansionTransition: React.FC<{
  isActive: boolean;
  children: React.ReactNode;
}> = ({ isActive, children }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Domain expansion circle effect during page transitions */}
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-4 h-4 border-4 border-blue-400 rounded-full"
            style={{ transform: "translate(-50%, -50%)" }}
            animate={{
              scale: [0, 100],
              borderWidth: [4, 0],
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}

      {children}
    </motion.div>
  );
};
