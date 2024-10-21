import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Github, Lock, PlayCircle } from "lucide-react";
import { Project } from "../types/projects";
import { getYouTubeEmbedUrl } from "../types/youtube-player";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <motion.div
      className="h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden shadow-xl rounded-xl h-full transition-all duration-300 hover:shadow-2xl hover:border-blue-500">
        <div className="relative aspect-video">
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            loading="eager"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={toggleDialog}
                >
                  View Details
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl text-white font-bold mb-1">{project.title}</h2>
          <p className="text-xs text-gray-400 mb-2">{project.company}</p>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 text-xs"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 text-xs"
                >
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!project.isPublic ? (
              <div className="flex items-center text-gray-400 text-xs">
                <Lock className="mr-1 h-3 w-3" />
                <span>Private</span>
              </div>
            ) : (
              project.github && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-xs"
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
            {project.hasVideo && project.videoLink && (
              <Button
                size="sm"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-xs"
                onClick={toggleDialog}
              >
                <PlayCircle className="mr-1 h-3 w-3" /> Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-6xl w-11/12 bg-gray-900 p-0 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
          <div className="flex flex-col lg:flex-row h-[80vh]">
            <div className="lg:w-1/2 h-full relative">
              {project.hasVideo && project.videoLink ? (
                <div className="absolute inset-0 bg-black">
                  <iframe
                    src={getYouTubeEmbedUrl(project.videoLink)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gray-800">
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              )}
            </div>
            <div className="lg:w-1/2 h-full overflow-y-auto bg-gray-900 p-8">
              <h2 className="text-4xl font-bold mb-2 text-blue-400">
                {project.title}
              </h2>
              <p className="text-sm text-gray-400 mb-6">{project.company}</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  My Role
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.role}</p>
              </div>

              {project.impact && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    Impact
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-4 mt-8">
                {!project.isPublic ? (
                  <div className="flex items-center text-gray-400 text-sm bg-gray-800 px-4 py-2 rounded-full">
                    <Lock className="mr-2 h-4 w-4" />
                    <span>Private Project</span>
                  </div>
                ) : (
                  project.github && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-5 w-5" /> View on GitHub
                      </a>
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
