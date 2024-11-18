import React, { useEffect, useState } from "react";
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

  const handlePrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : designs.length - 1));
  };

  const handleNext = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % designs.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const currentDesign = designs[currentIndex];

  if (!currentDesign) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] h-[95vh] md:h-[90vh] p-0 bg-gray-950/98 text-gray-100 border border-gray-800/50 overflow-hidden rounded-lg shadow-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 pointer-events-none"
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 md:right-4 md:top-4 z-50 bg-gray-950 hover:bg-gray-800/40 rounded-full border border-gray-700/30 shadow-lg transition-all duration-300 hover:scale-105"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="flex flex-col h-full">
          <DialogHeader className="px-4 py-2 md:px-6 md:py-4 bg-gradient-to-b from-gray-900 to-transparent">
            <DialogTitle className="text-lg md:text-2xl font-bold text-center">
              <motion.span
                key={currentDesign.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500"
              >
                {currentDesign.title}
              </motion.span>
            </DialogTitle>
          </DialogHeader>

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 md:px-20">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-50 h-full md:h-12 w-12 rounded-none md:rounded-full bg-gray-950/20 hover:bg-gray-800/20 border-0 md:border md:border-gray-700/50 backdrop-blur-[2px] transition-all md:left-4 md:translate-y-0"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6 text-white/70" />
            </Button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentDesign.image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center p-0 md:p-4"
              >
                <div className="relative w-full h-full group">
                  <Image
                    src={currentDesign.image}
                    alt={currentDesign.title}
                    fill
                    priority
                    className="object-contain"
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-50 h-full md:h-12 w-12 rounded-none md:rounded-full bg-gray-950/20 hover:bg-gray-800/20 border-0 md:border md:border-gray-700/50 backdrop-blur-[2px] transition-all md:right-4 md:translate-y-0"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6 text-white/70" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-2 md:px-6 md:py-4 bg-gradient-to-t from-gray-900 to-transparent"
          >
            <motion.p
              key={currentDesign.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-300 text-center text-sm md:text-base mb-2 md:mb-3 line-clamp-2"
            >
              {currentDesign.description}
            </motion.p>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 text-xs md:text-sm transition-colors duration-300 backdrop-blur-sm border border-blue-500/30"
              >
                {currentDesign.category}
              </Badge>
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs md:text-sm text-gray-400 bg-gray-800/50 px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-gray-700/50 backdrop-blur-sm"
              >
                {currentIndex + 1} / {designs.length}
              </motion.span>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm"
            >
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
