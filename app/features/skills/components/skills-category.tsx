"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { SkillCategory as SkillCategoryType } from "../types/skills";
import { getSkillCategoryStyle } from "../utils/skill-category-styles";

interface SkillBadgeProps {
  skill: { icon: string; name: string };
  index: number;
}

function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.28,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -2 }}
      className={cn(
        "group flex min-w-0 flex-col items-center justify-center rounded-xl p-2.5 sm:p-3",
        "border border-welcome-surface-border/50 bg-welcome-surface/50",
        "transition-all duration-200",
        "hover:border-welcome-accent-indigo/30 hover:bg-welcome-surface/80"
      )}
    >
      <div className="relative mb-2 flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9">
        <div
          className="absolute inset-0 rounded-full bg-welcome-accent-blue/10 opacity-0 blur-sm transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        />
        <Image
          src={skill.icon}
          alt={skill.name}
          width={36}
          height={36}
          className="relative z-10 h-7 w-7 object-contain transition-transform duration-200 group-hover:scale-110 sm:h-8 sm:w-8"
          loading="lazy"
        />
      </div>
      <span
        className="w-full truncate text-center text-[11px] font-medium text-welcome-muted transition-colors group-hover:text-welcome-foreground sm:text-xs"
        title={skill.name}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export function SkillCategory({ category }: { category: SkillCategoryType }) {
  const styles = getSkillCategoryStyle(category.name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group flex h-full min-w-0 flex-col overflow-hidden rounded-xl",
        "border border-welcome-surface-border/60 bg-welcome-elevated/90 backdrop-blur-sm",
        "p-5 shadow-[0_8px_32px_hsl(var(--welcome-bg-deep)/0.35)] sm:p-6",
        "transition-all duration-200",
        "hover:border-welcome-accent-indigo/35 hover:bg-welcome-surface/95",
        "hover:shadow-[0_16px_40px_hsl(var(--welcome-bg-deep)/0.45)]",
        styles.glow
      )}
    >
      {/* Header */}
      <div className="mb-5 flex min-w-0 items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
            styles.icon
          )}
        >
          {React.cloneElement(category.icon as React.ReactElement, {
            className: "h-5 w-5 shrink-0",
          })}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold text-welcome-foreground transition-colors group-hover:text-welcome-accent-cyan sm:text-lg">
            {category.name}
          </h3>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 items-center whitespace-nowrap rounded-full",
            "border border-welcome-surface-border/50 bg-welcome-surface/60",
            "px-2.5 py-0.5 text-xs font-medium tabular-nums text-welcome-muted"
          )}
        >
          {category.skills.length}
        </span>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
        {category.skills.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.article>
  );
}
