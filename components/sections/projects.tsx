import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
import {
  Github,
  Lock,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  X,
} from "lucide-react";
import { projects } from "@/lib/types/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }

    return url; // Return original URL if it's not a valid YouTube URL
  };

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
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-blue-400">
                          Role:
                        </h4>
                        <p className="text-sm text-gray-300">
                          {projects[activeIndex].role}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-blue-400">
                          Impact:
                        </h4>
                        <p className="text-sm text-gray-300">
                          {projects[activeIndex].impact}
                        </p>
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
                          </>
                        )}
                        {projects[activeIndex].hasVideo &&
                          projects[activeIndex].videoLink && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="default"
                                  className="text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                  <PlayCircle className="mr-1 h-4 w-4" /> Watch
                                  Demo
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-6xl w-11/12 bg-gray-800 text-gray-100 p-0 overflow-hidden">
                                <div className="flex flex-col md:flex-row h-[80vh]">
                                  <div className="md:w-2/3 h-full relative">
                                    <div className="absolute inset-0">
                                      <iframe
                                        src={getYouTubeEmbedUrl(
                                          projects[activeIndex].videoLink!
                                        )}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                      ></iframe>
                                    </div>
                                  </div>
                                  <div className="md:w-1/3 p-6 flex flex-col justify-between overflow-y-auto">
                                    <div>
                                      <DialogHeader>
                                        <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 mb-4">
                                          {projects[activeIndex].title}
                                        </DialogTitle>
                                      </DialogHeader>
                                      <p className="text-sm text-gray-300 mb-4">
                                        {projects[activeIndex].description}
                                      </p>
                                      <div className="mb-4">
                                        <h4 className="text-sm font-semibold mb-2 text-blue-400">
                                          Technologies:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                          {projects[
                                            activeIndex
                                          ].technologies.map((tech) => (
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
                                    </div>
                                    <div className="mt-auto">
                                      <p className="text-xs text-gray-400 italic">
                                        This demo showcases the key features and
                                        functionality of the{" "}
                                        {projects[activeIndex].title} project.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                                  onClick={() =>
                                    document.dispatchEvent(
                                      new KeyboardEvent("keydown", {
                                        key: "Escape",
                                      })
                                    )
                                  }
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </DialogContent>
                            </Dialog>
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
