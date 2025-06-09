"use client";

import { Design } from "../types/designs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";

interface DesignCardProps {
  design: Design;
  onClick: () => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({ design, onClick }) => {
  return (
    <motion.div
      className="group relative w-full h-full cursor-pointer"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
    >
      <div
        className={cn(
          "relative w-full h-full overflow-hidden rounded-lg",
          "bg-gray-900/40 backdrop-blur-sm border border-gray-800/50",
          "hover:bg-gray-900/60 hover:border-gray-700/50",
          "transition-all duration-300 ease-out",
          "hover:shadow-lg hover:shadow-black/20"
        )}
      >
        {/* Image container */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={design.image}
            alt={design.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            loading="lazy"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/60" />

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px] flex items-center justify-center"
          >
            <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-sm font-medium border border-gray-700/50">
              <Eye className="w-4 h-4" />
              View Design
            </div>
          </motion.div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 space-y-2">
          <h3 className="text-sm font-medium text-gray-100 line-clamp-1 group-hover:text-white transition-colors">
            {design.title}
          </h3>

          <Badge
            variant="secondary"
            className={cn(
              "text-xs px-2 py-0.5 border transition-all duration-200",
              // Category-specific colors
              design.category === "Logo" &&
                "bg-blue-500/20 text-blue-300 border-blue-500/30",
              design.category === "Portrait" &&
                "bg-purple-500/20 text-purple-300 border-purple-500/30",
              design.category === "Inspirational" &&
                "bg-green-500/20 text-green-300 border-green-500/30",
              design.category === "Clothing" &&
                "bg-orange-500/20 text-orange-300 border-orange-500/30",
              design.category === "Conceptual" &&
                "bg-pink-500/20 text-pink-300 border-pink-500/30",
              design.category === "Redesign" &&
                "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
              // Default fallback
              ![
                "Logo",
                "Portrait",
                "Inspirational",
                "Clothing",
                "Conceptual",
                "Redesign",
              ].includes(design.category) &&
                "bg-gray-500/20 text-gray-300 border-gray-500/30"
            )}
          >
            {design.category}
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};
