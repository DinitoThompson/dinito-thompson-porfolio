"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectDetailSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ProjectDetailSection({
  title,
  icon,
  children,
  className,
  delay = 0,
}: ProjectDetailSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "overflow-hidden rounded-xl border border-welcome-surface-border/60",
        "bg-welcome-elevated/85 p-5 backdrop-blur-sm sm:p-6",
        className
      )}
    >
      <div className="mb-4 flex min-w-0 items-center gap-2.5">
        <div
          className="h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal"
          aria-hidden="true"
        />
        {icon && (
          <span className="shrink-0 text-welcome-accent-blue">{icon}</span>
        )}
        <h2 className="truncate text-base font-bold text-welcome-foreground sm:text-lg">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

interface ProjectDetailListProps {
  items: string[];
}

export function ProjectDetailList({ items }: ProjectDetailListProps) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex min-w-0 items-start gap-2.5 text-sm leading-relaxed text-welcome-muted"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-welcome-accent-cyan"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface ProjectSidebarCardProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export function ProjectSidebarCard({
  title,
  children,
  delay = 0,
}: ProjectSidebarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "overflow-hidden rounded-xl border border-welcome-surface-border/60",
        "bg-welcome-elevated/90 p-5 backdrop-blur-sm sm:p-6"
      )}
    >
      <h3 className="mb-4 whitespace-nowrap text-sm font-bold uppercase tracking-wide text-welcome-muted">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}
