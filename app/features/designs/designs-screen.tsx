"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { designs, Design } from "@/app/features/designs/types/designs";
import { DesignDialog } from "@/app/features/designs/components/design-dialog";
import { DesignCard } from "@/app/features/designs/components/design-card";
import { CategoryTabs } from "@/app/features/designs/components/category-tab";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { NavButton } from "@/components/ui/nav-button";
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

  const categories = useMemo(() => {
    if (!data) return [];
    const uniqueCategories = new Set(data.map((design) => design.category));
    return Array.from(uniqueCategories).sort();
  }, [data]);

  const filteredDesigns = useMemo(() => {
    if (!data) return [];
    return activeCategory === "All"
      ? data
      : data.filter((design) => design.category === activeCategory);
  }, [activeCategory, data]);

  // Refined masonry layout with subtle variations
  const organizedDesigns = useMemo(() => {
    if (!filteredDesigns.length) return [];

    return filteredDesigns.map((design, index) => ({
      ...design,
      span: {
        // More subtle and strategic sizing
        row: index % 15 === 0 ? 2 : 1,
        col: index % 20 === 0 ? 2 : 1,
      },
    }));
  }, [filteredDesigns]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  if (isLoading || error) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        <BubblesBackground className="opacity-60" />
        <div className="h-screen flex items-center justify-center relative z-10">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-gray-300">Loading design portfolio...</p>
            </motion.div>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-xl text-red-400">Error loading designs</p>
              <p className="text-gray-400">Please try refreshing the page</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Subtle background */}
      <BubblesBackground className="opacity-60" />

      <div className="relative z-10 py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Refined header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
              Design Portfolio
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A collection of some of my graphic design work
            </p>

            {/* Subtle design count indicator */}
            <div className="text-xs text-gray-500">
              {filteredDesigns.length}{" "}
              {filteredDesigns.length === 1 ? "design" : "designs"}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </div>
          </motion.div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          {/* Designs grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
            className={cn(
              "grid gap-4 mb-12",
              "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
              "auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px]"
            )}
          >
            {organizedDesigns.map((design) => (
              <motion.div
                key={design.id}
                variants={itemVariants}
                layout
                className={cn(
                  "transition-all duration-500",
                  design.span.row === 2 && "row-span-2",
                  design.span.col === 2 && "sm:col-span-2"
                )}
              >
                <DesignCard
                  design={design}
                  onClick={() => setSelectedDesign(design)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {organizedDesigns.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 mb-4">
                No designs found in this category
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                View all designs
              </button>
            </motion.div>
          )}

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <NavButton
              href="/home/contact"
              text="Get In Touch"
              variant="secondary"
              size="md"
            />
          </motion.div>
        </div>
      </div>

      {/* Design modal */}
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
