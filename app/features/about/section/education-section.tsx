"use client";

import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Section } from "../components/section";
import { AboutCard, AboutIconBadge } from "../components/about-card";
import { AboutTimeline } from "../components/about-timeline";

export function EducationSection() {
  return (
    <Section title="Education" id="education">
      <AboutTimeline isLast>
        <AboutCard>
          <div className="flex items-start gap-4">
            <AboutIconBadge>
              <GraduationCap className="h-5 w-5" />
            </AboutIconBadge>

            <div className="min-w-0 flex-1 space-y-3">
              <div>
                <h3 className="text-base font-bold text-welcome-foreground sm:text-lg">
                  BSc Computer Science
                </h3>
                <p className="mt-0.5 text-sm font-medium text-welcome-accent-indigo/90 sm:text-base">
                  University of Technology
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-welcome-muted">
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  Kingston, Jamaica
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap tabular-nums">
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  2020 – 2024
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap">
                  <Award className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  Computer Science
                </span>
              </div>

              <p className="border-t border-welcome-surface-border/40 pt-3 text-xs leading-relaxed text-welcome-muted/80">
                Software engineering, algorithms, and system design.
              </p>
            </div>
          </div>
        </AboutCard>
      </AboutTimeline>
    </Section>
  );
}
