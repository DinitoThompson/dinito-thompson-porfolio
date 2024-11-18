"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Github, Lock, PlayCircle, X } from "lucide-react";
import { Project } from "../types/projects";
import { getYouTubeEmbedUrl } from "../types/youtube-player";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden shadow-lg rounded-lg h-full transition-all duration-300 hover:shadow-xl hover:border-blue-500">
        {/* Image Section */}
        <div className="relative aspect-[16/9]">
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            loading="eager"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent" />

          <AnimatePresence>
            {(isHovered || isMobile) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]"
              >
                <Button
                  size="sm"
                  className="bg-blue-500/90 hover:bg-blue-600 text-white px-4 py-2 text-xs"
                  onClick={() => setIsDialogOpen(true)}
                >
                  View Details
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <CardContent className="p-3 sm:p-4">
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-white line-clamp-1">
              {project.title}
            </h2>
            <p className="text-xs text-gray-400 line-clamp-1">
              {project.company}
            </p>
            <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 2).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 2 && (
                <Badge
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5"
                >
                  +{project.technologies.length - 2}
                </Badge>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1">
              {!project.isPublic ? (
                <div className="flex items-center text-gray-400 text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                  <Lock className="mr-1 h-3 w-3" />
                  <span>Private</span>
                </div>
              ) : (
                project.github && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-xs h-6 px-2"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" /> GitHub
                    </a>
                  </Button>
                )
              )}
              {project.hasVideo && (
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-xs h-6 px-2"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <PlayCircle className="mr-1 h-3 w-3" /> Demo
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl w-[95%] p-0 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800 shadow-2xl">
          <div className="relative flex flex-col max-h-[85vh]">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-50 text-gray-400 hover:text-white bg-gray-900/80 backdrop-blur-sm rounded-full h-7 w-7"
              onClick={() => setIsDialogOpen(false)}
            >
              <X className="h-3.5 w-3.5" />
            </Button>

            {/* Adaptive Media section */}
            <div
              className="relative w-full bg-gray-950 overflow-hidden"
              style={{
                height:
                  project.hasVideo && project.videoLink ? "360px" : "240px",
              }}
            >
              {project.hasVideo && project.videoLink ? (
                <iframe
                  src={getYouTubeEmbedUrl(project.videoLink)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center bg-gray-950">
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h2>
                  <p className="text-xs text-gray-400">{project.company}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {!project.isPublic ? (
                    <div className="flex items-center text-gray-400 text-xs bg-gray-800 px-2.5 py-1 rounded-full">
                      <Lock className="mr-1 h-3 w-3" />
                      Private
                    </div>
                  ) : (
                    project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs"
                        >
                          <Github className="mr-1 h-3.5 w-3.5" />
                          GitHub
                        </a>
                      </Button>
                    )
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-400 mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Role & Impact in columns */}
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="text-xs font-medium text-gray-400 mb-1">
                    My Role
                  </h3>
                  <p className="text-gray-300 text-xs">{project.role}</p>
                </div>
                {project.impact && (
                  <div>
                    <h3 className="text-xs font-medium text-gray-400 mb-1">
                      Impact
                    </h3>
                    <p className="text-gray-300 text-xs">{project.impact}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
