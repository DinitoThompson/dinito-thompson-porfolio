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

  // Organize designs for masonry layout with smaller, more uniform sizes
  const organizedDesigns = useMemo(() => {
    if (!filteredDesigns.length) return [];

    return filteredDesigns.map((design, index) => ({
      ...design,
      span: {
        // More subtle variations in sizing
        row: index % 12 === 0 ? 2 : 1,
        col: index % 12 === 0 ? 2 : 1,
      },
    }));
  }, [filteredDesigns]);

  if (isLoading || error) {
    return (
      <div className="min-h-screen text-white relative overflow-hidden">
        <BubblesBackground />
        <div className="h-screen flex items-center justify-center">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold"
            >
              Loading Designs...
            </motion.div>
          ) : (
            <div className="text-2xl font-bold text-red-500">
              Error loading designs
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative pb-6 overflow-hidden">
      <BubblesBackground />
      <div className="max-w-[2000px] pl-9 pr-9 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500"
        >
          Graphic Designs
        </motion.h2>

        <div className="w-full">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px]"
        >
          {organizedDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`
                ${design.span.row === 2 ? "row-span-2" : ""}
                ${design.span.col === 2 ? "sm:col-span-2" : ""}
                transition-all duration-500
              `}
            >
              <DesignCard
                design={design}
                onClick={() => setSelectedDesign(design)}
              />
            </motion.div>
          ))}
        </motion.div>

        {organizedDesigns.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-8 text-lg"
          >
            No designs found in this category.
          </motion.p>
        )}
      </div>

      {selectedDesign && (
        <DesignDialog
          design={selectedDesign}
          designs={filteredDesigns}
          isOpen={!!selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />
      )}

      <NavButton href="/home/contact" text="Contact Me" />
    </div>
  );
}
