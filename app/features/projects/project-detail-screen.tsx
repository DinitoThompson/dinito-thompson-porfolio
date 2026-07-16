"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
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
  BarChart3,
  Layers,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import {
  Project,
  getProjectById,
} from "@/app/features/projects/types/projects";
import { getYouTubeEmbedUrl } from "@/app/features/projects/types/youtube-player";
import {
  categoryStyles,
  formatDurationRange,
  getDuration,
} from "@/app/features/projects/utils/project-utils";
import { ProjectDetailSkeleton } from "./components/project-detail-skeleton";
import {
  ProjectDetailSection,
  ProjectDetailList,
  ProjectSidebarCard,
} from "./components/project-detail-section";
import { ProjectLinkButton } from "./components/project-link-button";
import { cn } from "@/lib/utils";

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

    const timer = setTimeout(loadProject, 200);
    return () => clearTimeout(timer);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
        <BubblesBackground className="opacity-45" density="low" animeMode={true} />
        <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
          <ProjectDetailSkeleton />
        </div>
      </div>
    );
  }

  if (project === null || project === undefined) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-welcome-deep px-4 text-welcome-foreground">
        <BubblesBackground className="opacity-45" density="low" animeMode={true} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "relative z-10 max-w-md rounded-2xl border border-welcome-surface-border/60",
            "bg-welcome-elevated/90 p-8 text-center backdrop-blur-md"
          )}
        >
          <h1 className="text-xl font-bold text-welcome-foreground sm:text-2xl">
            Project not found
          </h1>
          <p className="mt-2 text-sm text-welcome-muted">
            This project may have moved or no longer exists.
          </p>
          <Button
            onClick={() => router.push("/home/projects")}
            className={cn(
              "mt-6 cursor-pointer gap-2 whitespace-nowrap",
              "bg-welcome-accent-blue text-white hover:bg-welcome-accent-blue/90"
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Back to Projects
          </Button>
        </motion.div>
      </div>
    );
  }

  const styles = categoryStyles[project.category];
  const durationLabel = formatDurationRange(
    project.duration.start,
    project.duration.end
  );
  const durationShort = getDuration(project);

  return (
    <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
      <BubblesBackground className="opacity-45" density="low" animeMode={true} />

      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="outline"
              onClick={() => router.push("/home/projects")}
              className={cn(
                "h-10 cursor-pointer gap-2 whitespace-nowrap",
                "border-welcome-surface-border/60 bg-welcome-surface/50 text-welcome-muted",
                "hover:border-welcome-accent-blue/30 hover:bg-welcome-surface/80 hover:text-welcome-foreground",
                "focus-visible:ring-2 focus-visible:ring-welcome-accent-blue/40"
              )}
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              Back to Projects
            </Button>
          </motion.div>

          {/* Hero header */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "overflow-hidden rounded-2xl border border-welcome-surface-border/60",
              "bg-welcome-elevated/90 backdrop-blur-md sm:rounded-3xl"
            )}
          >
            <div
              className={cn("h-1 w-full bg-gradient-to-r", styles.bar)}
              aria-hidden="true"
            />
            <div className="space-y-4 p-5 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h1 className="min-w-0 text-2xl font-extrabold tracking-tight text-welcome-foreground sm:text-3xl md:text-4xl">
                  {project.title}
                </h1>
                <div className="flex shrink-0 flex-wrap gap-2">
                  {project.inDevelopment && (
                    <Badge
                      variant="outline"
                      className="whitespace-nowrap border-welcome-accent-indigo/30 bg-welcome-accent-indigo/10 text-welcome-accent-indigo"
                    >
                      <Construction className="mr-1 h-3 w-3 shrink-0" />
                      In Development
                    </Badge>
                  )}
                  <Badge
                    variant="outline"
                    className={cn("whitespace-nowrap", styles.badge)}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-welcome-muted">
                <span className="inline-flex min-w-0 max-w-full items-center gap-2">
                  <Building2 className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  <span className="truncate">{project.company.name}</span>
                </span>
                <span className="inline-flex min-w-0 max-w-full items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  <span className="truncate">{project.role}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  {durationLabel}
                </span>
                <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  {durationShort}
                </span>
              </div>
            </div>
          </motion.header>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Main content */}
            <div className="min-w-0 space-y-6 lg:col-span-2">
              {/* Media */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={cn(
                  "overflow-hidden rounded-xl border border-welcome-surface-border/60",
                  "bg-welcome-elevated/85 shadow-[0_12px_40px_hsl(var(--welcome-bg-deep)/0.4)]"
                )}
              >
                {project.hasVideo &&
                project.videoLink &&
                !project.inDevelopment ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={getYouTubeEmbedUrl(project.videoLink)}
                      title={`${project.title} demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                ) : (
                  <div
                    className="relative aspect-video w-full overflow-hidden"
                    onContextMenu={(e) => {
                      if (project.inDevelopment) e.preventDefault();
                    }}
                  >
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} preview`}
                      fill
                      className={cn(
                        "object-cover",
                        project.inDevelopment && "scale-105 blur-md select-none"
                      )}
                      unoptimized={project.inDevelopment}
                      draggable={!project.inDevelopment}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-welcome-deep/80 via-transparent to-transparent" />
                    {project.inDevelopment && (
                      <div className="absolute inset-0 flex items-center justify-center bg-welcome-deep/50 backdrop-blur-[2px]">
                        <div className="rounded-xl border border-welcome-accent-indigo/30 bg-welcome-surface/80 px-5 py-4 text-center backdrop-blur-sm">
                          <Construction className="mx-auto mb-2 h-8 w-8 text-welcome-accent-indigo" />
                          <p className="whitespace-nowrap text-sm font-medium text-welcome-muted">
                            Under development
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Overview */}
              <ProjectDetailSection title="Overview" delay={0.05}>
                <p className="text-sm leading-relaxed text-welcome-muted sm:text-base">
                  {project.description}
                </p>
              </ProjectDetailSection>

              {!project.inDevelopment && (
                <>
                  {project.technicalDetails?.architecture && (
                    <ProjectDetailSection
                      title="Architecture"
                      icon={<Layers className="h-4 w-4 shrink-0" />}
                      delay={0.1}
                    >
                      <p className="text-sm leading-relaxed text-welcome-muted">
                        {project.technicalDetails.architecture.join(" · ")}
                      </p>
                    </ProjectDetailSection>
                  )}

                  {project.features && project.features.length > 0 && (
                    <ProjectDetailSection
                      title="Key Features"
                      icon={<Zap className="h-4 w-4 shrink-0" />}
                      delay={0.12}
                    >
                      <ProjectDetailList items={project.features} />
                    </ProjectDetailSection>
                  )}

                  {project.challenges && project.challenges.length > 0 && (
                    <ProjectDetailSection
                      title="Challenges"
                      icon={<Target className="h-4 w-4 shrink-0" />}
                      delay={0.14}
                    >
                      <ProjectDetailList items={project.challenges} />
                    </ProjectDetailSection>
                  )}

                  {project.highlights && project.highlights.length > 0 && (
                    <ProjectDetailSection title="Highlights" delay={0.16}>
                      <div className="space-y-2">
                        {project.highlights.map((item, index) => (
                          <div
                            key={index}
                            className={cn(
                              "rounded-lg border border-welcome-surface-border/40",
                              "bg-welcome-surface/50 px-3 py-2.5 text-sm leading-relaxed text-welcome-muted"
                            )}
                          >
                            <span className="mr-1.5 text-welcome-accent-indigo">
                              ★
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </ProjectDetailSection>
                  )}

                  {project.impact && (
                    <ProjectDetailSection
                      title="Impact"
                      icon={<BarChart3 className="h-4 w-4 shrink-0" />}
                      delay={0.18}
                    >
                      <div className="space-y-5">
                        <p className="text-sm leading-relaxed text-welcome-muted">
                          {project.impact.description}
                        </p>
                        {project.impact.metrics &&
                          project.impact.metrics.length > 0 && (
                            <div>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-welcome-muted">
                                Metrics
                              </p>
                              <ProjectDetailList items={project.impact.metrics} />
                            </div>
                          )}
                        {project.impact.businessValue &&
                          project.impact.businessValue.length > 0 && (
                            <div>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-welcome-muted">
                                Business Value
                              </p>
                              <ProjectDetailList
                                items={project.impact.businessValue}
                              />
                            </div>
                          )}
                      </div>
                    </ProjectDetailSection>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="min-w-0 space-y-5">
              <ProjectSidebarCard title="Tech Stack" delay={0.08}>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "inline-flex shrink-0 items-center whitespace-nowrap rounded-md",
                        "border border-welcome-accent-blue/20 bg-welcome-accent-blue/10",
                        "px-2.5 py-1 text-xs font-medium text-welcome-accent-cyan"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ProjectSidebarCard>

              {!project.inDevelopment &&
                (project.github ||
                  project.websiteLink ||
                  project.documentation) && (
                  <ProjectSidebarCard title="Links" delay={0.12}>
                    <div className="space-y-2.5">
                      {project.isPublic && project.github && (
                        <ProjectLinkButton
                          href={project.github}
                          label="GitHub"
                          icon={
                            <GitHubLogoIcon className="h-4 w-4 shrink-0" />
                          }
                        />
                      )}
                      {project.isLive && project.websiteLink && (
                        <ProjectLinkButton
                          href={project.websiteLink}
                          label="Live Demo"
                          icon={
                            <ExternalLink className="h-4 w-4 shrink-0" />
                          }
                          variant="success"
                        />
                      )}
                      {project.documentation && (
                        <ProjectLinkButton
                          href={project.documentation}
                          label="Documentation"
                          icon={<Paperclip className="h-4 w-4 shrink-0" />}
                        />
                      )}
                    </div>
                  </ProjectSidebarCard>
                )}

              <ProjectSidebarCard title="Details" delay={0.16}>
                <div className="space-y-4 text-sm">
                  <div className="flex min-w-0 items-start gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-welcome-accent-blue" />
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-welcome-muted">
                        Role
                      </p>
                      <p className="truncate font-medium text-welcome-foreground">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {project.teamSize && !project.inDevelopment && (
                    <div className="flex min-w-0 items-start gap-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-welcome-accent-blue" />
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-welcome-muted">
                          Team
                        </p>
                        <p className="whitespace-nowrap font-medium text-welcome-foreground">
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
                        <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-welcome-muted">
                          <Clock className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                          Responsibilities
                        </p>
                        <ProjectDetailList items={project.responsibilities} />
                      </div>
                    )}
                </div>
              </ProjectSidebarCard>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailScreen;
