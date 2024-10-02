import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
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
  const [designsPerPage, setDesignsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(designs.length / designsPerPage)
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDesignsPerPage(4);
      } else {
        setDesignsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(designs.length / designsPerPage));
  }, [designsPerPage]);

  const nextPage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevPage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentDesigns = designs.slice(
    activeIndex * designsPerPage,
    (activeIndex + 1) * designsPerPage
  );

  return (
    <section
      id="designs"
      className="min-h-screen py-16 bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-6xl">
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
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {currentDesigns.map((design) => (
                <Card
                  key={design.id}
                  className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden shadow-2xl"
                >
                  <div className="relative h-40 sm:h-48 group">
                    <Image
                      src={design.image}
                      alt={design.title}
                      priority={true}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                      <h3 className="text-sm sm:text-lg font-bold text-white mb-1 truncate">
                        {design.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-purple-500/50 text-white text-xs"
                      >
                        {design.category}
                      </Badge>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-2 right-2 bg-gray-800/70 hover:bg-gray-700 transition-colors duration-300"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-gray-800 text-gray-100">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
                            {design.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="relative h-[60vh] mb-4">
                          <Image
                            src={design.image}
                            alt={design.title}
                            priority={true}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-300 text-center">
                            {design.description}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300"
            onClick={prevPage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300"
            onClick={nextPage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
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
