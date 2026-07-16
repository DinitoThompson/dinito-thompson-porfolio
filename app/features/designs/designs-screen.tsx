"use client";

import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Palette, AlertCircle } from "lucide-react";
import {
  designs,
  Design,
  getCategoryCounts,
} from "@/app/features/designs/types/designs";
import { DesignDialog } from "@/app/features/designs/components/design-dialog";
import { DesignCard } from "@/app/features/designs/components/design-card";
import { CategoryTabs } from "@/app/features/designs/components/category-tab";
import { DesignGridSkeleton } from "@/app/features/designs/components/design-grid-skeleton";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DesignsScreen() {
  const [selectedDesign, setSelectedDesign] = React.useState<Design | null>(
    null
  );
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const { data, isLoading, error } = useQuery({
    queryKey: ["designs"],
    queryFn: () => designs,
  });

  const categoryCounts = useMemo(
    () => (data ? getCategoryCounts() : {}),
    [data]
  );

  const categories = useMemo(() => {
    if (!data) return [];
    return Object.keys(categoryCounts).sort();
  }, [data, categoryCounts]);

  const filteredDesigns = useMemo(() => {
    if (!data) return [];
    const filtered =
      activeCategory === "All"
        ? data
        : data.filter((design) => design.category === activeCategory);

    return [...filtered].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [activeCategory, data]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
      <BubblesBackground className="opacity-45" density="low" animeMode={true} />

      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
          {/* Page header */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "overflow-hidden rounded-2xl border border-welcome-surface-border/60",
              "bg-welcome-elevated/90 text-center backdrop-blur-md sm:rounded-3xl"
            )}
          >
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--welcome-accent-purple)), hsl(var(--welcome-accent-indigo)), hsl(var(--welcome-accent-blue)))",
              }}
              aria-hidden="true"
            />
            <div className="space-y-3 px-5 py-8 sm:px-8 sm:py-10">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-welcome-muted">
                <Palette className="h-3.5 w-3.5 text-welcome-accent-purple" />
                Creative Work
              </p>
              <h1 className="text-2xl font-extrabold tracking-tight text-welcome-foreground sm:text-3xl md:text-4xl">
                Design Portfolio
              </h1>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-welcome-muted sm:text-base">
                Logos, portraits, and brand identity — visual craft across
                categories.
              </p>
              {!isLoading && !error && data && (
                <p className="text-xs tabular-nums text-welcome-muted">
                  {filteredDesigns.length}{" "}
                  {filteredDesigns.length === 1 ? "piece" : "pieces"}
                  {activeCategory !== "All" && (
                    <span className="text-welcome-accent-cyan">
                      {" "}
                      · {activeCategory}
                    </span>
                  )}
                </p>
              )}
            </div>
          </motion.header>

          {/* Loading */}
          {isLoading && <DesignGridSkeleton />}

          {/* Error */}
          {error && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "rounded-2xl border border-destructive/30 bg-destructive/5 px-6 py-10 text-center",
                "border-l-4 border-l-destructive"
              )}
            >
              <AlertCircle className="mx-auto mb-3 h-8 w-8 text-destructive" />
              <p className="text-base font-semibold text-welcome-foreground">
                Couldn&apos;t load designs
              </p>
              <p className="mt-1 text-sm text-welcome-muted">
                Refresh the page to try again.
              </p>
            </motion.div>
          )}

          {/* Content */}
          {!isLoading && !error && data && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <CategoryTabs
                  categories={categories}
                  activeCategory={activeCategory}
                  categoryCounts={categoryCounts}
                  totalCount={data.length}
                  onCategoryChange={setActiveCategory}
                />
              </motion.div>

              <AnimatePresence mode="wait">
                {filteredDesigns.length > 0 ? (
                  <motion.div
                    key={activeCategory}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                    className={cn(
                      "grid gap-3 sm:gap-4",
                      "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                      "auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[200px]"
                    )}
                  >
                    {filteredDesigns.map((design) => (
                      <motion.div
                        key={design.id}
                        variants={itemVariants}
                        layout
                        className={cn(
                          design.featured && "col-span-2 row-span-2"
                        )}
                      >
                        <DesignCard
                          design={design}
                          featured={design.featured}
                          onClick={() => setSelectedDesign(design)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "rounded-2xl border border-welcome-surface-border/50",
                      "bg-welcome-elevated/60 px-6 py-12 text-center backdrop-blur-sm"
                    )}
                  >
                    <Palette className="mx-auto mb-3 h-8 w-8 text-welcome-muted" />
                    <p className="font-medium text-welcome-foreground">
                      No designs in this category
                    </p>
                    <p className="mt-1 text-sm text-welcome-muted">
                      Try another filter or view the full collection.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-4 cursor-pointer whitespace-nowrap border-welcome-surface-border/60 bg-welcome-surface/50 text-welcome-muted hover:border-welcome-accent-blue/30 hover:text-welcome-foreground"
                      onClick={() => setActiveCategory("All")}
                    >
                      View all designs
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center border-t border-welcome-surface-border/40 pt-8 sm:pt-10"
              >
                <NavButton
                  href="/home/contact"
                  text="Get In Touch"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                />
              </motion.div>
            </>
          )}
        </div>
      </div>

      {selectedDesign && (
        <DesignDialog
          design={selectedDesign}
          designs={filteredDesigns}
          isOpen={!!selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />
      )}
    </div>
  );
}
