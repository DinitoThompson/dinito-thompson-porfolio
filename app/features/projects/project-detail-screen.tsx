import React from "react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Project,
  getProjectById,
} from "@/app/features/projects/types/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Paperclip,
  CalendarDays,
  Users,
  Briefcase,
  Building2,
  Target,
  Zap,
  Clock,
  Construction,
  Loader2,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LoadingState = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center text-gray-100 relative">
    <BubblesBackground className="opacity-60" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 flex flex-col items-center gap-4"
    >
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <p className="text-gray-400">Loading project details...</p>
    </motion.div>
  </div>
);

function ProjectDetailScreen() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = () => {
      const projectIdString = params.id as string;
      if (projectIdString) {
        const projectId = parseInt(projectIdString, 10);
        if (!isNaN(projectId)) {
          const foundProject = getProjectById(projectId);
          setProject(foundProject || null);
        } else {
          setProject(null);
        }
      } else {
        setProject(null);
      }
      setIsLoading(false);
    };

    // Add a small delay to prevent flash of loading state for fast loads
    const timer = setTimeout(loadProject, 300);
    return () => clearTimeout(timer);
  }, [params.id]);

  const getYouTubeEmbedUrl = (url: string): string | null => {
    if (!url) return null;
    let videoId = null;

    const urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get("v");

    if (!videoId && url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }

    if (!videoId && url.includes("/embed/")) {
      videoId = url.split("/embed/")[1]?.split("?")[0];
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (project === null || project === undefined) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-gray-100 relative px-4">
        <BubblesBackground className="opacity-60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center p-8 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 max-w-md"
        >
          <h1 className="text-2xl font-semibold mb-2">Project Not Found</h1>
          <p className="text-gray-400 mb-6">
            Sorry, we couldn&apos;t find the project you&apos;re looking for. It
            might have been moved or doesn&apos;t exist.
          </p>
          <Button
            onClick={() => router.push("/home/projects")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </motion.div>
      </div>
    );
  }

  const renderTechStack = (technologies: string[]) => (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );

  const renderListSection = (
    title: string,
    items?: string[],
    icon?: React.ReactNode
  ) =>
    items &&
    items.length > 0 && (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-200 flex items-center">
          {icon && <span className="mr-2 text-blue-400">{icon}</span>}
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-300 text-sm"
            >
              <span className="mt-2 h-1 w-1 bg-blue-400 rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      <BubblesBackground className="opacity-60" />

      <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              className="mb-8 bg-gray-900/50 border border-gray-800/50 hover:bg-gray-800/50 text-gray-300 hover:text-white"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center sm:text-left"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">
                {project.title}
              </h1>
              {project.inDevelopment && (
                <Badge
                  variant="outline"
                  className="border-yellow-500/30 text-yellow-300 bg-gray-900/80 backdrop-blur-sm"
                >
                  <Construction className="w-4 h-4 mr-2" />
                  In Development
                </Badge>
              )}
            </div>

            {/* Project metadata */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Building2 className="mr-2 h-4 w-4 text-blue-400/70" />
                <span>{project.company.name}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4 text-blue-400/70" />
                <span>{project.company.position}</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4 text-blue-400/70" />
                <span>
                  {project.duration.start} to{" "}
                  {project.duration.end || "Present"}
                </span>
              </div>
              <Badge
                variant="outline"
                className={cn(
                  "border-gray-700 text-gray-300",
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
          </motion.header>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Media Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.hasVideo &&
                project.videoLink &&
                !project.inDevelopment ? (
                  <div className="aspect-video rounded-lg overflow-hidden border border-gray-800/50 shadow-xl">
                    <iframe
                      src={getYouTubeEmbedUrl(project.videoLink) || ""}
                      title={`${project.title} Video Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div
                    className="relative aspect-video rounded-lg overflow-hidden border border-gray-800/50 shadow-xl"
                    onContextMenu={(e) => {
                      if (project.inDevelopment) {
                        e.preventDefault();
                        return false;
                      }
                    }}
                  >
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} main image`}
                      fill
                      className={cn(
                        "object-cover",
                        project.inDevelopment && "blur-md select-none"
                      )}
                      unoptimized={project.inDevelopment}
                      draggable={!project.inDevelopment}
                    />
                    {project.inDevelopment && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/60 backdrop-blur-[2px]">
                        <div className="text-center p-4">
                          <Construction className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                          <p className="text-lg text-gray-300">
                            Project Under Development
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold text-gray-200">
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Only show detailed sections if not in development */}
              {!project.inDevelopment && (
                <>
                  {/* Technical Architecture */}
                  {project.technicalDetails?.architecture && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-3"
                    >
                      <h3 className="text-lg font-semibold text-gray-200">
                        Architecture
                      </h3>
                      <p className="text-gray-300">
                        {project.technicalDetails.architecture.join(", ")}
                      </p>
                    </motion.div>
                  )}

                  {/* Key Sections */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-8"
                  >
                    {renderListSection(
                      "Key Features",
                      project.features,
                      <Zap />
                    )}
                    {renderListSection(
                      "Challenges Overcome",
                      project.challenges,
                      <Target />
                    )}
                    {renderListSection(
                      "Highlights & Achievements",
                      project.highlights,
                      <Zap />
                    )}
                  </motion.div>

                  {/* Impact Section */}
                  {project.impact && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="pt-8 border-t border-gray-800/30 space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-gray-200">
                        Impact & Business Value
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {project.impact.description}
                      </p>
                      {renderListSection("Key Metrics", project.impact.metrics)}
                      {renderListSection(
                        "Business Value",
                        project.impact.businessValue
                      )}
                    </motion.div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="mt-8 lg:mt-0 space-y-6">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/50"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-4">
                  Technologies Used
                </h3>
                {renderTechStack(project.technologies)}
              </motion.div>

              {/* Project Links - Only show if not in development */}
              {!project.inDevelopment &&
                (project.github ||
                  project.websiteLink ||
                  project.documentation) && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-6 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/50"
                  >
                    <h3 className="text-lg font-semibold text-gray-200 mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {project.isPublic && project.github && (
                        <Button
                          variant="outline"
                          asChild
                          className="w-full justify-start bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80 text-gray-200 hover:text-white"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            GitHub Repository
                          </a>
                        </Button>
                      )}
                      {project.isLive && project.websiteLink && (
                        <Button
                          variant="outline"
                          asChild
                          className="w-full justify-start bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80 text-gray-200 hover:text-white"
                        >
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.documentation && (
                        <Button
                          variant="outline"
                          asChild
                          className="w-full justify-start bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80 text-gray-200 hover:text-white"
                        >
                          <a
                            href={project.documentation}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Paperclip className="mr-2 h-4 w-4" />
                            Documentation
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                )}

              {/* Project Details - Show limited info if in development */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/50"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Role:</span>
                      <p className="text-gray-300">{project.role}</p>
                    </div>
                  </div>

                  {project.teamSize && !project.inDevelopment && (
                    <div className="flex items-start gap-3">
                      <Users className="mt-0.5 h-4 w-4 text-blue-400 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-200">
                          Team Size:
                        </span>
                        <p className="text-gray-300">
                          {project.teamSize}{" "}
                          {project.teamSize === 1 ? "person" : "people"}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.responsibilities &&
                    project.responsibilities.length > 0 &&
                    !project.inDevelopment && (
                      <div>
                        <h4 className="font-medium text-gray-200 mb-2 flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-blue-400" />
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1 text-gray-300 pl-6">
                          {project.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-2 h-1 w-1 bg-blue-400 rounded-full flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailScreen;
