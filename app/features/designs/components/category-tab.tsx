"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CategoryTabs: React.FC<{
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ categories, activeCategory, onCategoryChange }) => {
  const allCategories = ["All", ...categories];

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 mb-6">
      <motion.div
        className="flex flex-wrap justify-center gap-1.5 sm:gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {allCategories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className={`
                h-8 text-xs sm:text-sm rounded-full transition-all duration-200
                ${
                  activeCategory === category
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border-gray-700 hover:border-blue-500/50 text-black"
                }
              `}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
