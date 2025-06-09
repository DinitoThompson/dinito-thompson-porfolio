"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Lock,
  PlayCircle,
  ExternalLink,
  Clock,
  Building2,
  Briefcase,
  Eye,
  ArrowRight,
  Construction,
} from "lucide-react";
import { Project } from "../types/projects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimeCard } from "@/app/components/anime/anime-effects";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
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
    return `${years}y ${remainingMonths}m`;
  };

  return (
    <AnimeCard glowColor="blue" intensity="medium">
      <motion.div
        className="h-full group"
        whileHover={{ y: isMobile ? 0 : -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "h-full rounded-lg overflow-hidden",
            "bg-gray-900/40 backdrop-blur-sm border border-gray-800/50",
            "hover:bg-gray-900/60 hover:border-gray-700/50",
            "transition-all duration-300 ease-out",
            "hover:shadow-xl hover:shadow-black/20"
          )}
        >
          {/* Image Section */}
          <Link href={`/home/projects/${project.id}`} passHref>
            <div
              className="relative aspect-[16/9] cursor-pointer overflow-hidden"
              onContextMenu={(e) => {
                if (project.inDevelopment) {
                  e.preventDefault();
                  return false;
                }
              }}
            >
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                loading="lazy"
                fill
                className={cn(
                  "object-cover transition-transform duration-300",
                  !project.inDevelopment && "group-hover:scale-105",
                  project.inDevelopment && "blur-md select-none"
                )}
                unoptimized={project.inDevelopment}
                draggable={!project.inDevelopment}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

              {/* Development overlay */}
              {project.inDevelopment && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/60 backdrop-blur-[2px]">
                  <div className="text-center p-4">
                    <Construction className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">
                      Project Under Development
                    </p>
                  </div>
                </div>
              )}

              {/* Category badge - top right */}
              <div className="absolute top-3 right-3 flex gap-2">
                {project.inDevelopment && (
                  <Badge
                    variant="outline"
                    className="border-yellow-500/30 text-yellow-300 bg-gray-900/80 backdrop-blur-sm"
                  >
                    <Construction className="w-3 h-3 mr-1" />
                    In Development
                  </Badge>
                )}
                <Badge
                  variant="outline"
                  className={cn(
                    "border-gray-700/50 bg-gray-900/80 backdrop-blur-sm",
                    "text-gray-300 text-xs",
                    project.category === "Enterprise" &&
                      "border-blue-500/30 text-blue-300",
                    project.category === "Personal" &&
                      "border-purple-500/30 text-purple-300",
                    project.category === "Academic" &&
                      "border-green-500/30 text-green-300"
                  )}
                >
                  {project.category}
                </Badge>
              </div>

              {/* Hover overlay - only show for non-development projects */}
              <AnimatePresence>
                {!project.inDevelopment && (isHovered || isMobile) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
                  >
                    <div className="flex items-center gap-2 bg-blue-500/90 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Eye className="w-4 h-4" />
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>

          {/* Content Section */}
          <div className="p-5 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors line-clamp-1">
                {project.title}
              </h3>

              {/* Company & Role Info */}
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-400">
                  <Building2 className="mr-2 h-4 w-4 text-blue-400/70" />
                  <span className="truncate">{project.company.name}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 text-blue-400/70" />
                    <span className="truncate">{project.role}</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{getDuration()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/50 text-gray-400 border border-gray-700/50 text-xs px-2 py-0.5"
                  >
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>
            </div>

            {/* Key highlight - subtle discovery element */}
            {project.highlights && project.highlights[0] && (
              <div className="pt-2 border-t border-gray-800/30">
                <p className="text-xs text-gray-400 leading-relaxed">
                  <span className="text-yellow-400/70">★</span>{" "}
                  {project.highlights[0]}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                {project.isPublic ? (
                  project.github && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-xs bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 hover:text-white"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHubLogoIcon className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )
                ) : (
                  <div className="flex items-center text-gray-500 text-xs bg-gray-800/30 px-2 py-1 rounded">
                    <Lock className="mr-1 h-3 w-3" />
                    Private
                  </div>
                )}

                {project.hasVideo && project.videoLink && (
                  <Button
                    size="sm"
                    className="h-7 px-2 text-xs bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30"
                    asChild
                  >
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <PlayCircle className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                )}

                {project.isLive && project.websiteLink && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2 text-xs bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30"
                    asChild
                  >
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live
                    </a>
                  </Button>
                )}
              </div>

              {/* Impact metrics - subtle discovery */}
              {project.impact.metrics && project.impact.metrics.length > 0 && (
                <div className="text-right">
                  <p className="text-xs text-gray-500 opacity-70 group-hover:opacity-100 transition-opacity">
                    {project.impact.metrics.length} key metrics
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimeCard>
  );
};
