"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  X,
  Calendar,
  Building2,
  Users,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Project } from "../types/projects";
import { getYouTubeEmbedUrl } from "../types/youtube-player";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDialog = ({
  project,
  isOpen,
  onClose,
}: ProjectDialogProps) => {
  const MediaSection = () => (
    <div
      className={cn(
        project.hasVideo ? "md:w-1/2" : "md:w-1/3",
        !project.hasVideo ? "hidden md:block" : "block",
        "h-[200px] md:h-full relative bg-gray-950 rounded-lg overflow-hidden"
      )}
    >
      {project.hasVideo && project.videoLink ? (
        <iframe
          src={getYouTubeEmbedUrl(project.videoLink)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      ) : (
        <Image
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover rounded-lg"
          priority
        />
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95%] p-0 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800/50 shadow-2xl">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 z-50 text-gray-400 hover:text-white bg-gray-900/80 backdrop-blur-sm rounded-full h-8 w-8"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="relative flex flex-col md:flex-row max-h-[85vh]">
          <MediaSection />

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Header Section */}
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3 line-clamp-2">
                    {project.title}
                  </h2>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Building2 className="mr-2 h-4 w-4 text-blue-400/70" />
                      {project.company.name}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Briefcase className="mr-2 h-4 w-4 text-blue-400/70" />
                      {project.company.position}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-blue-400/70" />
                      {project.company.timeline}
                    </div>
                    {project.teamSize && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="mr-2 h-4 w-4 text-blue-400/70" />
                        Team Size: {project.teamSize}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 ml-4">
                  {!project.isPublic ? (
                    <div className="flex items-center text-gray-500 text-xs bg-gray-800/50 px-3 py-1.5 rounded-full">
                      <Lock className="mr-1 h-3 w-3" />
                      Private
                    </div>
                  ) : (
                    <>
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs"
                          >
                            <GitHubLogoIcon className="mr-1 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.isLive && project.websiteLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 border-green-500/30 text-green-300 hover:bg-green-500/10"
                          asChild
                        >
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs"
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Live
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 gap-6">
                {/* Overview */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-gray-200">
                    Overview
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-gray-200">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features & Highlights in 2 columns on wider screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Features */}
                  {project.features && (
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-gray-200">
                        Key Features
                      </h3>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 4).map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-300 text-sm"
                          >
                            <span className="mt-2 h-1 w-1 bg-blue-400 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact Preview */}
                  {project.impact && (
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-gray-200">
                        Impact
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {project.impact.description}
                      </p>
                      {project.impact.metrics &&
                        project.impact.metrics.length > 0 && (
                          <div className="pt-2">
                            <p className="text-xs text-gray-400">
                              <span className="text-yellow-400/70">★</span>{" "}
                              {project.impact.metrics[0]}
                            </p>
                          </div>
                        )}
                    </div>
                  )}
                </div>

                {/* Role & Responsibilities */}
                <div className="pt-4 border-t border-gray-800/30 space-y-3">
                  <h3 className="text-base font-semibold text-gray-200">
                    Role & Responsibilities
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{project.role}</p>
                  {project.responsibilities && (
                    <ul className="space-y-1">
                      {project.responsibilities
                        .slice(0, 3)
                        .map((resp, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-300 text-sm"
                          >
                            <span className="mt-2 h-1 w-1 bg-blue-400 rounded-full flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
