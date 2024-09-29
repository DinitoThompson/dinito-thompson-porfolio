import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { designs } from "@/lib/types/designs";

export default function Designs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextDesign = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % designs.length);
  };

  const prevDesign = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + designs.length) % designs.length
    );
  };

  return (
    <section
      id="designs"
      className="min-h-screen py-16 bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500"
        >
          Graphic Designs
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={designs[activeIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden shadow-2xl">
                <div className="md:flex">
                  <div className="w-full md:w-2/3 relative h-56 sm:h-72 md:h-80 group">
                    <Image
                      src={designs[activeIndex].image}
                      alt={designs[activeIndex].title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {designs[activeIndex].title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-purple-500/50 text-white text-xs sm:text-sm"
                      >
                        {designs[activeIndex].category}
                      </Badge>
                    </motion.div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gray-800/70 hover:bg-gray-700 transition-colors duration-300"
                        >
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>
                            {designs[activeIndex].title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="relative h-[80vh]">
                          <Image
                            src={designs[activeIndex].image}
                            alt={designs[activeIndex].title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="md:w-1/3 p-4 sm:p-6">
                    <CardContent className="p-0 space-y-4">
                      <p className="text-sm text-gray-300">
                        {designs[activeIndex].description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-purple-400 text-sm mb-2">
                          Key Features:
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                          <li>Professional design</li>
                          <li>Attention to detail</li>
                          <li>Client-focused approach</li>
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300"
            onClick={prevDesign}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300"
            onClick={nextDesign}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          {designs.map((_, index) => (
            <Button
              key={index}
              size="sm"
              variant="ghost"
              className={`mx-1 ${
                index === activeIndex
                  ? "text-purple-400"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {index === activeIndex ? "●" : "○"}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
