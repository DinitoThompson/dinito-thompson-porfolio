"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  className,
  id,
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className={cn("space-y-5 sm:space-y-6", className)}
  >
    <div className="flex items-center gap-3">
      <div
        className="h-7 w-1 shrink-0 rounded-full bg-gradient-to-b from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal"
        aria-hidden="true"
      />
      <h2 className="whitespace-nowrap text-base font-bold tracking-tight text-welcome-foreground sm:text-lg md:text-xl">
        {title}
      </h2>
    </div>

    <div className="space-y-4 sm:space-y-5">{children}</div>
  </motion.section>
);
