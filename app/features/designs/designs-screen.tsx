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
    <div className="min-h-screen py-16 relative overflow-hidden">
      <BubblesBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white"
        >
          Graphic Designs
        </motion.h2>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredDesigns.map((design) => (
            <DesignCard
              key={design.id}
              design={design}
              onClick={() => setSelectedDesign(design)}
            />
          ))}
        </div>

        {filteredDesigns.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            No designs found in this category.
          </p>
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
