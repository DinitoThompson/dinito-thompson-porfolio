"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  external?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  href,
  text,
  variant = "primary",
  size = "md",
  icon: Icon,
  className,
  children,
  external = false,
  ...props
}) => {
  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2",
    "font-medium rounded-lg transition-all duration-300 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-950",
    "active:scale-95",
    className
  );

  const variantClasses = {
    primary: cn(
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
      "hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/20",
      "border border-blue-500/20"
    ),
    secondary: cn(
      "bg-gray-900/60 backdrop-blur text-gray-300 border border-gray-700/50",
      "hover:bg-gray-800/80 hover:text-white hover:border-gray-600/50",
      "hover:shadow-md"
    ),
    ghost: cn(
      "bg-gray-900/30 text-gray-400 border border-gray-800/30",
      "hover:bg-gray-800/50 hover:text-gray-300 hover:border-gray-700/50"
    ),
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const ButtonContent = () => (
    <>
      {children || (
        <>
          {Icon && <Icon className="w-4 h-4" />}
          <span>{text}</span>
          <motion.div
            className="opacity-60 group-hover:opacity-100"
            animate={{ x: [0, 2, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </>
      )}
    </>
  );

  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );

  if (external) {
    return (
      <MotionWrapper>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size]
          )}
          aria-label={`${text} (opens in new tab)`}
          {...props}
        >
          <ButtonContent />
        </a>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <Link
        href={href}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size])}
        {...props}
      >
        <ButtonContent />
      </Link>
    </MotionWrapper>
  );
};
