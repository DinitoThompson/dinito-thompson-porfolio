"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { designs, Design } from "@/app/features/designs/types/designs";
import { DesignDialog } from "@/app/features/designs/components/design-dialog";
import { DesignCard } from "@/app/features/designs/components/design-card";
import { CategoryTabs } from "@/app/features/designs/components/category-tab";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";

export default function DesignsScreen() {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(designs.map((design) => design.category));
    return Array.from(uniqueCategories).sort();
  }, []);

  const filteredDesigns = useMemo(() => {
    return activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <BubblesBackground />
      <div className="max-w-[2000px] mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500"
        >
          Graphic Designs
        </motion.h2>

        <div className="flex flex-col items-center mb-8">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2">
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DesignCard
                design={design}
                onClick={() => setSelectedDesign(design)}
              />
            </motion.div>
          ))}
        </div>

        {filteredDesigns.length === 0 && (
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
          isOpen={!!selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />
      )}
    </div>
  );
}
