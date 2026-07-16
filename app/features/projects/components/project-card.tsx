"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
  BarChart3,
} from "lucide-react";
import { Project } from "../types/projects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { categoryStyles, getDuration } from "../utils/project-utils";
import { cn } from "@/lib/utils";

const stylesByCategory = categoryStyles;

interface ProjectActionProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

function ProjectAction({ href, label, icon, className }: ProjectActionProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "inline-flex h-8 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5",
        "border text-xs font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/40",
        "active:scale-[0.98]",
        className
      )}
    >
      {icon}
      {label}
    </a>
  );
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = stylesByCategory[project.category];

  return (
    <motion.article
      className={cn(
        "group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl",
        "border border-welcome-surface-border/60 bg-welcome-elevated/90 backdrop-blur-sm",
        "shadow-[0_8px_32px_hsl(var(--welcome-bg-deep)/0.4)]",
        "transition-all duration-200",
        "hover:border-welcome-accent-indigo/35 hover:bg-welcome-surface/95",
        "hover:shadow-[0_16px_40px_hsl(var(--welcome-bg-deep)/0.5)]",
        styles.glow
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image */}
      <Link
        href={`/home/projects/${project.id}`}
        className="relative block aspect-[16/10] shrink-0 cursor-pointer overflow-hidden"
        onContextMenu={(e) => {
          if (project.inDevelopment) {
            e.preventDefault();
          }
        }}
      >
        <Image
          src={project.screenshot}
          alt={`${project.title} preview`}
          loading="lazy"
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            !project.inDevelopment && "group-hover:scale-[1.04]",
            project.inDevelopment && "scale-105 blur-md select-none"
          )}
          unoptimized={project.inDevelopment}
          draggable={!project.inDevelopment}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-welcome-deep/95 via-welcome-deep/30 to-transparent" />

        {project.inDevelopment && (
          <div className="absolute inset-0 flex items-center justify-center bg-welcome-deep/50 backdrop-blur-[2px]">
            <div className="rounded-xl border border-welcome-accent-indigo/30 bg-welcome-surface/80 px-4 py-3 text-center backdrop-blur-sm">
              <Construction className="mx-auto mb-1.5 h-6 w-6 text-welcome-accent-indigo" />
              <p className="whitespace-nowrap text-xs font-medium text-welcome-muted">
                In development
              </p>
            </div>
          </div>
        )}

        <div className="absolute right-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap justify-end gap-1.5">
          {project.inDevelopment && (
            <Badge
              variant="outline"
              className="shrink-0 whitespace-nowrap border-welcome-accent-indigo/30 bg-welcome-deep/80 text-welcome-accent-indigo backdrop-blur-sm"
            >
              <Construction className="mr-1 h-3 w-3 shrink-0" />
              Building
            </Badge>
          )}
          <Badge
            variant="outline"
            className={cn(
              "shrink-0 whitespace-nowrap backdrop-blur-sm",
              styles.badge
            )}
          >
            {project.category}
          </Badge>
        </div>

        <AnimatePresence>
          {!project.inDevelopment && isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 hidden items-center justify-center bg-welcome-deep/50 backdrop-blur-[2px] sm:flex"
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-welcome-accent-blue px-4 py-2.5 text-sm font-semibold text-white shadow-lg">
                <Eye className="h-4 w-4 shrink-0" />
                View details
                <ArrowRight className="h-4 w-4 shrink-0" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>

      {/* Body */}
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="min-w-0 space-y-2">
          <h3 className="truncate text-base font-bold text-welcome-foreground transition-colors group-hover:text-welcome-accent-cyan sm:text-lg">
            {project.title}
          </h3>

          <div className="space-y-1.5 text-sm text-welcome-muted">
            <div className="flex min-w-0 items-center gap-2">
              <Building2 className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
              <span className="truncate">{project.company.name}</span>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <Briefcase className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                <span className="truncate">{project.role}</span>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-xs tabular-nums">
                <Clock className="h-3 w-3 shrink-0" />
                {getDuration(project)}
              </span>
            </div>
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-welcome-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={cn(
                "inline-flex shrink-0 items-center whitespace-nowrap rounded-md",
                "border border-welcome-accent-blue/20 bg-welcome-accent-blue/10",
                "px-2 py-0.5 text-[11px] font-medium text-welcome-accent-cyan"
              )}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded-md border border-welcome-surface-border/50 bg-welcome-surface/60 px-2 py-0.5 text-[11px] text-welcome-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {project.highlights?.[0] && (
          <div className="rounded-lg border border-welcome-surface-border/40 bg-welcome-surface/50 px-3 py-2">
            <p className="line-clamp-2 text-xs leading-relaxed text-welcome-muted">
              <span className="mr-1 text-welcome-accent-indigo">★</span>
              {project.highlights[0]}
            </p>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-welcome-surface-border/40 pt-3">
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            {project.isPublic && project.github ? (
              <ProjectAction
                href={project.github}
                label="Code"
                icon={<GitHubLogoIcon className="h-3.5 w-3.5 shrink-0" />}
                className="border-welcome-surface-border/60 bg-welcome-surface/70 text-welcome-muted hover:border-welcome-accent-blue/30 hover:text-welcome-foreground"
              />
            ) : (
              <span className="inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-lg border border-welcome-surface-border/50 bg-welcome-surface/50 px-2.5 text-xs text-welcome-muted">
                <Lock className="h-3 w-3 shrink-0" />
                Private
              </span>
            )}

            {project.hasVideo && project.videoLink && (
              <ProjectAction
                href={project.videoLink}
                label="Demo"
                icon={<PlayCircle className="h-3.5 w-3.5 shrink-0" />}
                className="border-welcome-accent-purple/30 bg-welcome-accent-purple/10 text-welcome-accent-indigo hover:border-welcome-accent-purple/50"
              />
            )}

            {project.isLive && project.websiteLink && (
              <ProjectAction
                href={project.websiteLink}
                label="Live"
                icon={<ExternalLink className="h-3.5 w-3.5 shrink-0" />}
                className="border-sidebar-success/30 bg-sidebar-success-surface text-sidebar-success hover:border-sidebar-success/50"
              />
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {project.impact.metrics && project.impact.metrics.length > 0 && (
              <span className="hidden items-center gap-1 whitespace-nowrap text-[11px] text-welcome-muted sm:inline-flex">
                <BarChart3 className="h-3 w-3 shrink-0 opacity-70" />
                {project.impact.metrics.length} metrics
              </span>
            )}
            <Link
              href={`/home/projects/${project.id}`}
              className={cn(
                "inline-flex h-8 cursor-pointer items-center gap-1 whitespace-nowrap rounded-lg px-2.5",
                "text-xs font-medium text-welcome-accent-cyan",
                "transition-colors hover:text-welcome-foreground",
                "focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/40",
                "sm:hidden"
              )}
            >
              Details
              <ArrowRight className="h-3 w-3 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
