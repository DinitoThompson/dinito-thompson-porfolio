"use client";

import { Section } from "../components/section";
import { AboutCard, AboutIconBadge, AboutStatPill } from "../components/about-card";
import { AboutTimeline } from "../components/about-timeline";
import { UserCircle } from "lucide-react";

const stats = [
  { value: "5+", label: "years experience" },
  { value: "10+", label: "projects delivered" },
  { value: "Full-stack", label: "expertise" },
];

export function ExecutiveSummary() {
  return (
    <Section title="Professional Summary" id="summary">
      <AboutTimeline>
        <AboutCard>
          <div className="flex items-start gap-4">
            <AboutIconBadge>
              <UserCircle className="h-5 w-5" />
            </AboutIconBadge>

            <div className="min-w-0 flex-1 space-y-4">
              <p className="text-sm leading-relaxed text-welcome-muted sm:text-base">
                Software developer and designer with 5+ years building web, API,
                and mobile products. I focus on scalable architecture, clean
                code, and interfaces people actually enjoy using.
              </p>

              <div className="flex flex-wrap gap-2 border-t border-welcome-surface-border/40 pt-4">
                {stats.map((stat) => (
                  <AboutStatPill
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </AboutCard>
      </AboutTimeline>
    </Section>
  );
}
