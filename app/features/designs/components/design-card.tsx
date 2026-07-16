"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Design } from "../types/designs";
import { getDesignCategoryStyle } from "../utils/design-category-styles";

interface DesignCardProps {
  design: Design;
  featured?: boolean;
  onClick: () => void;
}

export function DesignCard({ design, featured, onClick }: DesignCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const styles = getDesignCategoryStyle(design.category);

  return (
    <motion.button
      type="button"
      aria-label={`View ${design.title}`}
      className={cn(
        "group relative h-full w-full min-w-0 cursor-pointer overflow-hidden rounded-xl text-left",
        "border border-welcome-surface-border/60 bg-welcome-elevated/90 backdrop-blur-sm",
        "shadow-[0_8px_32px_hsl(var(--welcome-bg-deep)/0.35)]",
        "transition-all duration-200",
        "hover:border-welcome-accent-indigo/35 hover:bg-welcome-surface/95",
        "hover:shadow-[0_16px_40px_hsl(var(--welcome-bg-deep)/0.5)]",
        "focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/40",
        styles.glow
      )}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image canvas — integrates white-background artwork */}
      <div className="relative h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-welcome-mid/80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--welcome-surface-border) / 0.35) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-2 overflow-hidden rounded-lg border border-welcome-surface-border/30 bg-welcome-elevated/50 sm:inset-3">
          <Image
            src={design.image}
            alt={design.title}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03] sm:p-3"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 40vw"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            }
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-welcome-deep/90 via-welcome-deep/20 to-transparent" />

        {/* Top badges */}
        <div className="absolute right-2 top-2 flex max-w-[calc(100%-1rem)] flex-wrap justify-end gap-1.5 sm:right-3 sm:top-3">
          {featured && (
            <Badge
              variant="outline"
              className="shrink-0 whitespace-nowrap border-welcome-accent-indigo/40 bg-welcome-deep/80 text-welcome-accent-indigo backdrop-blur-sm"
            >
              <Sparkles className="mr-1 h-3 w-3 shrink-0" />
              Featured
            </Badge>
          )}
          <Badge
            variant="outline"
            className={cn(
              "shrink-0 whitespace-nowrap backdrop-blur-sm",
              styles.badge
            )}
          >
            {design.category}
          </Badge>
        </div>

        {/* Desktop hover overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 hidden items-center justify-center bg-welcome-deep/45 backdrop-blur-[2px] sm:flex"
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-welcome-accent-blue px-4 py-2.5 text-sm font-semibold text-white shadow-lg">
                <Eye className="h-4 w-4 shrink-0" />
                View design
                <ArrowRight className="h-4 w-4 shrink-0" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom info strip */}
        <div className="absolute inset-x-0 bottom-0 space-y-1 p-3 sm:p-4">
          <h3 className="truncate text-sm font-bold text-welcome-foreground transition-colors group-hover:text-welcome-accent-cyan sm:text-base">
            {design.title}
          </h3>
          {design.year && (
            <p className="whitespace-nowrap text-[11px] tabular-nums text-welcome-muted">
              {design.year}
            </p>
          )}

          {/* Mobile persistent action hint */}
          <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-welcome-accent-cyan sm:hidden">
            View
            <ArrowRight className="h-3 w-3 shrink-0" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
