import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Design } from "../types/designs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const DesignDialog: React.FC<{
  design: Design;
  designs: Design[];
  isOpen: boolean;
  onClose: () => void;
}> = ({ design, designs, isOpen, onClose }) => {
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
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrevious, handleNext]);

  const currentDesign = designs[currentIndex];

  if (!currentDesign) return null;

  const getCategoryColor = (category: string) => {
    const colors = {
      Logo: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Portrait: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Inspirational: "bg-green-500/20 text-green-300 border-green-500/30",
      Clothing: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      Conceptual: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      Redesign: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-500/20 text-gray-300 border-gray-500/30"
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] h-[95vh] md:h-[90vh] p-0 bg-gray-900/95 backdrop-blur-sm text-gray-100 border border-gray-800/50 overflow-hidden rounded-lg shadow-2xl">
        {/* Subtle background gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/30 pointer-events-none"
        />

        {/* Enhanced close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 rounded-full border border-gray-700/50 shadow-lg transition-all duration-200 hover:scale-105"
          onClick={onClose}
        >
          <X className="h-4 w-4 text-gray-300 hover:text-white" />
        </Button>

        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="px-6 py-4 bg-gradient-to-b from-gray-900/60 to-transparent border-b border-gray-800/30">
            <DialogTitle className="text-xl md:text-2xl font-semibold text-center">
              <motion.span
                key={currentDesign.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-100"
              >
                {currentDesign.title}
              </motion.span>
            </DialogTitle>
          </DialogHeader>

          {/* Main content area */}
          <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-12 md:px-20">
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute left-2 sm:left-4 z-50 h-12 w-12 rounded-full",
                "bg-gray-900/60 backdrop-blur-sm border border-gray-700/50",
                "hover:bg-gray-800/80 text-gray-300 hover:text-white",
                "transition-all duration-200 hover:scale-105",
                "shadow-lg"
              )}
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-2 sm:right-4 z-50 h-12 w-12 rounded-full",
                "bg-gray-900/60 backdrop-blur-sm border border-gray-700/50",
                "hover:bg-gray-800/80 text-gray-300 hover:text-white",
                "transition-all duration-200 hover:scale-105",
                "shadow-lg"
              )}
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDesign.image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center p-4"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={currentDesign.image}
                    alt={currentDesign.title}
                    fill
                    priority
                    className="object-contain drop-shadow-lg"
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer with design info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 py-4 bg-gradient-to-t from-gray-900/60 to-transparent border-t border-gray-800/30"
          >
            <motion.p
              key={currentDesign.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-center text-sm md:text-base mb-4 line-clamp-2 leading-relaxed"
            >
              {currentDesign.description}
            </motion.p>

            <div className="flex items-center justify-center gap-4">
              <Badge
                variant="secondary"
                className={cn(
                  "text-sm px-3 py-1 transition-all duration-200 backdrop-blur-sm border",
                  getCategoryColor(currentDesign.category)
                )}
              >
                {currentDesign.category}
              </Badge>

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50 backdrop-blur-sm"
              >
                {currentIndex + 1} of {designs.length}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Loading overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-gray-950/60 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                <span className="text-gray-300 text-sm">Loading...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
