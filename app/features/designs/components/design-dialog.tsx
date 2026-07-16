"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Design } from "../types/designs";
import { getDesignCategoryStyle } from "../utils/design-category-styles";

interface DesignDialogProps {
  design: Design;
  designs: Design[];
  isOpen: boolean;
  onClose: () => void;
}

export function DesignDialog({
  design,
  designs,
  isOpen,
  onClose,
}: DesignDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const index = designs.findIndex((d) => d.id === design.id);
    setCurrentIndex(index >= 0 ? index : 0);
  }, [design, designs]);

  const handlePrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : designs.length - 1));
  }, [designs.length]);

  const handleNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % designs.length);
  }, [designs.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrevious, handleNext]);

  const currentDesign = designs[currentIndex];
  if (!currentDesign) return null;

  const styles = getDesignCategoryStyle(currentDesign.category);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          "flex h-[95vh] max-h-[95vh] w-[95vw] max-w-5xl flex-col gap-0 overflow-hidden p-0",
          "border-welcome-surface-border/60 bg-welcome-elevated/95 text-welcome-foreground backdrop-blur-md",
          "sm:rounded-2xl [&>button:last-child]:hidden"
        )}
      >
        {/* Accent bar */}
        <div
          className="h-1 w-full shrink-0"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--welcome-accent-blue)), hsl(var(--welcome-accent-indigo)), hsl(var(--welcome-accent-teal)))",
          }}
          aria-hidden="true"
        />

        {/* Header — fixed */}
        <DialogHeader className="shrink-0 space-y-0 border-b border-welcome-surface-border/40 px-4 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-4 pr-10">
            <div className="min-w-0 flex-1">
              <DialogTitle className="truncate text-left text-lg font-bold text-welcome-foreground sm:text-xl">
                <motion.span
                  key={currentDesign.title}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {currentDesign.title}
                </motion.span>
              </DialogTitle>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className={cn("shrink-0 whitespace-nowrap", styles.badge)}
                >
                  {currentDesign.category}
                </Badge>
                {currentDesign.year && (
                  <span className="whitespace-nowrap text-xs tabular-nums text-welcome-muted">
                    {currentDesign.year}
                  </span>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close"
              className={cn(
                "absolute right-3 top-3 h-9 w-9 shrink-0 cursor-pointer rounded-full",
                "border border-welcome-surface-border/50 bg-welcome-surface/70",
                "text-welcome-muted hover:bg-welcome-surface hover:text-welcome-foreground",
                "focus:ring-2 focus:ring-welcome-accent-blue/40"
              )}
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Body — scrollable image area */}
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous design"
            className={cn(
              "absolute left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full sm:left-4 sm:h-11 sm:w-11",
              "border border-welcome-surface-border/50 bg-welcome-surface/80 backdrop-blur-sm",
              "text-welcome-muted hover:bg-welcome-surface hover:text-welcome-foreground",
              "focus:ring-2 focus:ring-welcome-accent-blue/40"
            )}
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Next design"
            className={cn(
              "absolute right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full sm:right-4 sm:h-11 sm:w-11",
              "border border-welcome-surface-border/50 bg-welcome-surface/80 backdrop-blur-sm",
              "text-welcome-muted hover:bg-welcome-surface hover:text-welcome-foreground",
              "focus:ring-2 focus:ring-welcome-accent-blue/40"
            )}
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex h-full items-center justify-center overflow-y-auto px-12 py-4 sm:px-16 sm:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDesign.image}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="relative h-full w-full max-h-[55vh] min-h-[200px]"
              >
                {isLoading && (
                  <Skeleton className="absolute inset-4 rounded-xl sm:inset-8" />
                )}
                <div
                  className="absolute inset-4 overflow-hidden rounded-xl border border-welcome-surface-border/30 bg-welcome-mid/60 sm:inset-8"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, hsl(var(--welcome-surface-border) / 0.3) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                >
                  <Image
                    src={currentDesign.image}
                    alt={currentDesign.title}
                    fill
                    priority
                    className={cn(
                      "object-contain p-4 transition-opacity duration-300 sm:p-6",
                      isLoading ? "opacity-0" : "opacity-100"
                    )}
                    onLoad={() => setIsLoading(false)}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer — fixed */}
        <DialogFooter className="shrink-0 flex-col gap-3 border-t border-welcome-surface-border/40 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <motion.p
            key={currentDesign.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="line-clamp-2 min-w-0 flex-1 text-left text-sm leading-relaxed text-welcome-muted"
          >
            {currentDesign.description}
          </motion.p>

          <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end">
            <span className="whitespace-nowrap rounded-full border border-welcome-surface-border/50 bg-welcome-surface/60 px-3 py-1 text-xs tabular-nums text-welcome-muted">
              {currentIndex + 1} of {designs.length}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer whitespace-nowrap border-welcome-surface-border/60 bg-welcome-surface/50 text-welcome-muted hover:border-welcome-accent-blue/30 hover:text-welcome-foreground"
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                size="sm"
                className="cursor-pointer whitespace-nowrap bg-welcome-accent-blue text-white hover:bg-welcome-accent-blue/90"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
