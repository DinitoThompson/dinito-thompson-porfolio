// ProjectCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, PlayCircle, View, Clock, Building2 } from "lucide-react";
import { Project } from "../types/projects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectDialog } from "./project-dialog";

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

  const getDuration = () => {
    const start = new Date(project.duration.start);
    const end =
      project.duration.end === "Present"
        ? new Date()
        : project.duration.end
        ? new Date(project.duration.end)
        : new Date();

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    if (months < 1) return "< 1 month";
    if (months === 1) return "1 month";
    if (months < 12) return `${months} months`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0)
      return `${years} ${years === 1 ? "year" : "years"}`;
    return `${years} ${years === 1 ? "year" : "years"}, ${remainingMonths} ${
      remainingMonths === 1 ? "month" : "months"
    }`;
  };

  return (
    <motion.div
      className="h-full"
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
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
                  className="bg-blue-500/90 hover:bg-blue-600 text-white px-3 py-1.5 text-[10px] sm:text-xs sm:px-4 sm:py-2"
                  onClick={() => setIsDialogOpen(true)}
                >
                  View Details
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <CardContent className="p-2 sm:p-3 md:p-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-start justify-between">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white line-clamp-1">
                {project.title}
              </h2>
              <Badge
                variant="outline"
                className="ml-2 border-gray-700 text-gray-400 text-[8px] sm:text-xs px-1.5"
              >
                {project.category}
              </Badge>
            </div>

            {/* Company and Duration */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center text-[10px] sm:text-xs text-gray-400">
                <Building2 className="mr-1 h-3 w-3" />
                <span className="line-clamp-1">{project.company.name}</span>
              </div>
              <div className="flex items-center text-[10px] sm:text-xs text-gray-400">
                <Clock className="mr-1 h-3 w-3" />
                <span>{getDuration()}</span>
              </div>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-300 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
              {project.technologies.slice(0, isMobile ? 2 : 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > (isMobile ? 2 : 3) && (
                <Badge
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5"
                >
                  +{project.technologies.length - (isMobile ? 2 : 3)}
                </Badge>
              )}
            </div>

            {/* Highlights Preview */}
            {project.highlights && (
              <div className="pt-1">
                <p className="text-[8px] sm:text-xs text-gray-300 line-clamp-1">
                  ✨ {project.highlights[0]}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
              {!project.isPublic ? (
                <div className="flex items-center text-gray-400 text-[8px] sm:text-xs bg-gray-700/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  <Lock className="mr-0.5 sm:mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  <span>Private</span>
                </div>
              ) : (
                project.github && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-[8px] sm:text-xs h-5 sm:h-6 px-1.5 sm:px-2"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubLogoIcon className="mr-0.5 sm:mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />{" "}
                      GitHub
                    </a>
                  </Button>
                )
              )}
              {project.hasVideo && (
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-[8px] sm:text-xs h-5 sm:h-6 px-1.5 sm:px-2"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <PlayCircle className="mr-0.5 sm:mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />{" "}
                  Demo
                </Button>
              )}
              {project.isLive && project.websiteLink && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-[8px] sm:text-xs h-5 sm:h-6 px-1.5 sm:px-2"
                  asChild
                >
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <View className="mr-0.5 sm:mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ProjectDialog
        project={project}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        // isMobile={isMobile}
      />
    </motion.div>
  );
};
