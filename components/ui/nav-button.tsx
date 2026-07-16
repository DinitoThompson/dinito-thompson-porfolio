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
  showArrow?: boolean;
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
  showArrow = true,
  ...props
}) => {
  const baseClasses = cn(
    "group relative inline-flex cursor-pointer items-center justify-center gap-2",
    "whitespace-nowrap font-medium rounded-xl transition-all duration-200 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/50 focus:ring-offset-2 focus:ring-offset-welcome-deep",
    "active:scale-[0.98]",
    className
  );

  const variantClasses = {
    primary: cn(
      "bg-gradient-to-r from-welcome-accent-blue to-welcome-accent-indigo text-white",
      "border border-welcome-accent-blue/30",
      "hover:shadow-lg hover:shadow-welcome-accent-blue/25 hover:brightness-110"
    ),
    secondary: cn(
      "border border-welcome-surface-border/70 bg-welcome-surface/80 text-welcome-foreground backdrop-blur-sm",
      "hover:border-welcome-accent-indigo/40 hover:bg-welcome-elevated/80"
    ),
    ghost: cn(
      "border border-transparent bg-transparent text-welcome-muted",
      "hover:border-welcome-surface-border/50 hover:bg-welcome-surface/50 hover:text-welcome-foreground"
    ),
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const ButtonContent = () => (
    <>
      {children || (
        <>
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span>{text}</span>
          {showArrow && (
            <motion.span
              className="opacity-70 group-hover:opacity-100"
              animate={{ x: [0, 2, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ArrowRight className="h-4 w-4 shrink-0" />
            </motion.span>
          )}
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
