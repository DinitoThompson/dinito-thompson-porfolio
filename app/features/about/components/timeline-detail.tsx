"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AboutCard } from "./about-card";
import { AboutTimeline } from "./about-timeline";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string[];
  isLast?: boolean;
}

export function TimelineItem({
  year,
  title,
  company,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <AboutTimeline isLast={isLast} className="group">
      <AboutCard className="mb-4 sm:mb-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-1">
            <h3 className="text-base font-bold text-welcome-foreground transition-colors group-hover:text-welcome-accent-cyan sm:text-lg">
              {title}
            </h3>
            <p className="truncate text-sm font-medium text-welcome-accent-indigo/90 sm:text-base">
              {company}
            </p>
          </div>

          <span
            className={cn(
              "inline-flex w-fit shrink-0 items-center whitespace-nowrap rounded-full",
              "border border-welcome-accent-blue/25 bg-welcome-accent-blue/10",
              "px-3 py-1 text-xs font-semibold tabular-nums text-welcome-accent-cyan"
            )}
          >
            {year}
          </span>
        </div>

        <ul className="space-y-2.5">
          {description.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 text-sm leading-relaxed text-welcome-muted"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-welcome-accent-blue/70"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </AboutCard>
    </AboutTimeline>
  );
}
