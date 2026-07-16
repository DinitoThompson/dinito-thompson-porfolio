"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  accent: "blue" | "teal" | "purple" | "indigo";
}

const accentStyles = {
  blue: {
    icon: "border-welcome-accent-blue/30 bg-welcome-accent-blue/10 text-welcome-accent-cyan",
    link: "hover:text-welcome-accent-cyan",
  },
  teal: {
    icon: "border-sidebar-success/30 bg-sidebar-success-surface text-sidebar-success",
    link: "hover:text-sidebar-success",
  },
  purple: {
    icon: "border-welcome-accent-purple/30 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    link: "hover:text-welcome-accent-indigo",
  },
  indigo: {
    icon: "border-welcome-accent-indigo/30 bg-welcome-accent-indigo/10 text-welcome-accent-indigo",
    link: "hover:text-welcome-accent-cyan",
  },
};

export function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: ContactInfoItemProps) {
  const styles = accentStyles[accent];

  return (
    <motion.div
      className="group flex min-w-0 items-center gap-3 sm:gap-4"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
          styles.icon
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-welcome-muted">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className={cn(
              "block truncate text-sm font-medium text-welcome-foreground transition-colors",
              "cursor-pointer focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/40 focus:ring-offset-2 focus:ring-offset-welcome-deep",
              styles.link
            )}
          >
            {value}
          </a>
        ) : (
          <p className="truncate text-sm font-medium text-welcome-foreground">
            {value}
          </p>
        )}
      </div>
    </motion.div>
  );
}
