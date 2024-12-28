"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Lock, X, Calendar, Building2, Users, Briefcase } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Project } from "../types/projects";
import { getYouTubeEmbedUrl } from "../types/youtube-player";

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
    <>
      {/* Video/Image section - hidden on mobile if it's just an image */}
      <div
        className={`${project.hasVideo ? "md:w-1/2" : "md:w-1/3"} ${
          !project.hasVideo ? "hidden md:block" : "block"
        } h-[240px] md:h-full relative bg-gray-950`}
      >
        {project.hasVideo && project.videoLink ? (
          <iframe
            src={getYouTubeEmbedUrl(project.videoLink)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            fill
            className="object-scale-down"
            priority
          />
        )}
      </div>
    </>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95%] p-0 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800 shadow-2xl">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-50 text-gray-400 hover:text-white bg-gray-900/80 backdrop-blur-sm rounded-full h-7 w-7"
          onClick={onClose}
        >
          <X className="h-3.5 w-3.5" />
        </Button>

        <div className="relative flex flex-col md:flex-row h-[90vh] sm:h-[85vh]">
          <MediaSection />

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="space-y-6">
              {/* Header Section */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Building2 className="mr-1.5 h-3.5 w-3.5" />
                      {project.company.name}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Briefcase className="mr-1.5 h-3.5 w-3.5" />
                      {project.company.position}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      {project.company.timeline}
                    </div>
                    {project.teamSize && (
                      <div className="flex items-center text-gray-400 text-xs">
                        <Users className="mr-1.5 h-3.5 w-3.5" />
                        Team Size: {project.teamSize}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  {!project.isPublic ? (
                    <div className="flex items-center text-gray-400 text-xs bg-gray-800 px-2.5 py-1 rounded-full">
                      <Lock className="mr-1 h-3 w-3" />
                      Private
                    </div>
                  ) : (
                    <>
                      {project.github && (
                        <Button
                          variant="outline"
                          className="h-8 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs"
                          >
                            <GitHubLogoIcon className="mr-1 h-3.5 w-3.5" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.isLive && project.websiteLink && (
                        <Button
                          variant="outline"
                          className="h-8 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                          asChild
                        >
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs"
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Overview */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-2">
                      Overview
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-2">
                        Key Features
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-gray-400 text-xs">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technical Details */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-2">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.technicalDetails && (
                      <>
                        {project.technicalDetails.architecture && (
                          <div>
                            <h4 className="text-xs font-medium text-gray-400 mb-1">
                              Architecture
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technicalDetails.architecture.map(
                                (item) => (
                                  <Badge
                                    key={item}
                                    variant="outline"
                                    className="text-xs border-gray-700 text-gray-400"
                                  >
                                    {item}
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>
                        )}
                        {project.technicalDetails.infrastructure && (
                          <div>
                            <h4 className="text-xs font-medium text-gray-400 mb-1">
                              Infrastructure
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technicalDetails.infrastructure.map(
                                (item) => (
                                  <Badge
                                    key={item}
                                    variant="outline"
                                    className="text-xs border-gray-700 text-gray-400"
                                  >
                                    {item}
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Role & Responsibilities */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-2">
                      Role & Responsibilities
                    </h3>
                    <p className="text-gray-400 text-xs mb-2">{project.role}</p>
                    {project.responsibilities && (
                      <ul className="list-disc list-inside space-y-1">
                        {project.responsibilities.map((resp, index) => (
                          <li key={index} className="text-gray-400 text-xs">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Challenges */}
                  {project.challenges && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-2">
                        Challenges Overcome
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-400 text-xs">
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  {project.impact && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-2">
                        Project Impact
                      </h3>
                      <p className="text-gray-400 text-xs mb-2">
                        {project.impact.description}
                      </p>

                      {project.impact.metrics && (
                        <div className="mb-2">
                          <h4 className="text-xs font-medium text-gray-400 mb-1">
                            Key Metrics
                          </h4>
                          <ul className="list-disc list-inside space-y-1">
                            {project.impact.metrics.map((metric, index) => (
                              <li key={index} className="text-gray-400 text-xs">
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.impact.businessValue && (
                        <div>
                          <h4 className="text-xs font-medium text-gray-400 mb-1">
                            Business Value
                          </h4>
                          <ul className="list-disc list-inside space-y-1">
                            {project.impact.businessValue.map(
                              (value, index) => (
                                <li
                                  key={index}
                                  className="text-gray-400 text-xs"
                                >
                                  {value}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
