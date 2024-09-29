import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "@/lib/types/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-16 bg-gradient-to-t from-black via-gray-900 to-purple-900 text-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Featured Projects
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden shadow-2xl">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-48 md:h-auto">
                    <Image
                      src={projects[activeIndex].screenshot}
                      alt={`${projects[activeIndex].title} screenshot`}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-2 left-4 right-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {projects[activeIndex].title}
                      </h3>
                      <p className="text-sm flex items-center text-gray-300">
                        {projects[activeIndex].company}
                      </p>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 p-4 md:p-6">
                    <CardContent className="p-0 space-y-4">
                      <p className="text-sm text-gray-300">
                        {projects[activeIndex].description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-blue-400">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[activeIndex].technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-blue-500/20 text-blue-300 hover:bg-blue-500/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        {!projects[activeIndex].isPublic ? (
                          <div className="flex items-center text-gray-400 text-sm">
                            <Lock className="mr-1 h-4 w-4" />
                            <span>Private Project</span>
                          </div>
                        ) : (
                          <>
                            {projects[activeIndex].github && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-sm border-blue-500 text-blue-400 hover:bg-blue-500/20"
                                asChild
                              >
                                <a
                                  href={projects[activeIndex].github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="mr-1 h-4 w-4" /> GitHub
                                </a>
                              </Button>
                            )}
                            {projects[activeIndex].demo && (
                              <Button
                                size="sm"
                                variant="default"
                                className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                asChild
                              >
                                <a
                                  href={projects[activeIndex].demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="mr-1 h-4 w-4" /> Live
                                  Demo
                                </a>
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <Button
            size="icon"
            variant="ghost"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
            onClick={prevProject}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
            onClick={nextProject}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          {projects.map((_, index) => (
            <Button
              key={index}
              size="sm"
              variant="ghost"
              className={`mx-1 ${
                index === activeIndex ? "text-blue-400" : "text-gray-500"
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
