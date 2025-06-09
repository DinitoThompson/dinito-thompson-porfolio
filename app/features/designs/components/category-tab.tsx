"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CategoryTabs: React.FC<{
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ categories, activeCategory, onCategoryChange }) => {
  const allCategories = ["All", ...categories];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {allCategories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03, duration: 0.3 }}
          >
            <Button
              variant={activeCategory === category ? "default" : "ghost"}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "h-9 px-4 text-sm rounded-lg transition-all duration-200 relative",
                activeCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  : "bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-800/80 hover:border-gray-600/50"
              )}
            >
              {category}

              {/* Active indicator */}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Subtle category count - discovery element */}
              {activeCategory === category && category !== "All" && (
                <span className="ml-2 text-xs opacity-70">
                  {categories.filter((c) => c === category).length}
                </span>
              )}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
