"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  categoryCounts: Record<string, number>;
  totalCount: number;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({
  categories,
  activeCategory,
  categoryCounts,
  totalCount,
  onCategoryChange,
}: CategoryTabsProps) {
  const allCategories = ["All", ...categories];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-welcome-surface-border/50",
        "bg-welcome-elevated/60 p-3 backdrop-blur-sm sm:p-4"
      )}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {allCategories.map((category, index) => {
          const isActive = activeCategory === category;
          const count =
            category === "All" ? totalCount : (categoryCounts[category] ?? 0);

          return (
            <motion.button
              key={category}
              type="button"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "relative inline-flex h-9 shrink-0 cursor-pointer items-center gap-1.5",
                "whitespace-nowrap rounded-lg px-3.5 text-sm font-medium",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/40",
                isActive
                  ? "text-white"
                  : "border border-welcome-surface-border/40 bg-welcome-surface/50 text-welcome-muted hover:border-welcome-accent-blue/25 hover:bg-welcome-surface/80 hover:text-welcome-foreground"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="designCategoryTab"
                  className="absolute inset-0 rounded-lg bg-welcome-accent-blue shadow-[0_4px_16px_hsl(var(--welcome-accent-blue)/0.35)]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{category}</span>
              <span
                className={cn(
                  "relative z-10 inline-flex min-w-[1.25rem] items-center justify-center",
                  "rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-welcome-surface-border/30 text-welcome-muted"
                )}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
