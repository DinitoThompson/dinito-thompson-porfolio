"use client";

import { Cloud, Code, Database, Smartphone } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { AboutCard, AboutIconBadge } from "./about-card";

export interface SkillProps {
  icon: React.ReactNode;
  category: string;
  items: string[];
}

export const resumeSkills: SkillProps[] = [
  {
    icon: <Code className="h-5 w-5" />,
    category: "Web Development",
    items: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: <Database className="h-5 w-5" />,
    category: "Database & Backend",
    items: ["Laravel", "PostgreSQL", "MySQL"],
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    category: "Cloud & DevOps",
    items: ["AWS", "Git", "Docker"],
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    category: "Mobile Development",
    items: ["Flutter", "React Native"],
  },
];

export const Skill: React.FC<SkillProps> = ({ icon, category, items }) => (
  <AboutCard className="h-full">
    <div className="flex items-start gap-4">
      <AboutIconBadge>{icon}</AboutIconBadge>

      <div className="min-w-0 flex-1">
        <h3 className="mb-3 truncate text-sm font-bold text-welcome-foreground sm:text-base">
          {category}
        </h3>

        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className={cn(
                "inline-flex shrink-0 items-center whitespace-nowrap rounded-md",
                "border border-welcome-surface-border/50 bg-welcome-surface/60",
                "px-2.5 py-1 text-xs font-medium text-welcome-muted",
                "transition-colors duration-200",
                "hover:border-welcome-accent-indigo/30 hover:text-welcome-foreground"
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </AboutCard>
);
