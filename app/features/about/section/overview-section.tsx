"use client";

import { motion } from "framer-motion";
import { Section } from "../components/section";
import { AboutCard } from "../components/about-card";
import { AboutTimeline } from "../components/about-timeline";
import { onlineLinks } from "../types/online-links";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { SimpleAnimeProfile } from "@/app/components/anime/anime-profile";

export function OverviewSection() {
  return (
    <Section title="Overview" id="overview">
      <AboutTimeline>
        <AboutCard>
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative shrink-0"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal opacity-70 blur-sm transition-opacity group-hover:opacity-90" />
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-welcome-surface-border sm:h-28 sm:w-28">
                <SimpleAnimeProfile
                  src="/profile.jpg"
                  alt="Dinito Thompson"
                  className="h-24 w-24 sm:h-28 sm:w-28"
                />
              </div>
            </motion.div>

            <div className="min-w-0 flex-1 space-y-4">
              <div>
                <h3 className="truncate text-xl font-bold text-welcome-foreground sm:text-2xl">
                  Dinito R. Thompson
                </h3>
                <p className="mt-1 whitespace-nowrap text-sm font-semibold text-welcome-accent-cyan sm:text-base">
                  Lead Software Developer
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-welcome-muted">
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-welcome-accent-blue" />
                  Kingston, Jamaica
                </span>
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg",
                    "border border-sidebar-success-surface bg-sidebar-success-surface",
                    "px-2.5 py-1 text-xs font-medium text-sidebar-success"
                  )}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sidebar-success opacity-50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sidebar-success" />
                  </span>
                  Available for work
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {onlineLinks.map(({ href, Icon, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl",
                      "border border-welcome-surface-border/60 bg-welcome-surface/70",
                      "text-welcome-muted transition-all duration-200",
                      "hover:border-welcome-accent-blue/40 hover:bg-welcome-accent-blue/10 hover:text-welcome-accent-cyan",
                      "focus:outline-none focus:ring-2 focus:ring-welcome-accent-blue/40"
                    )}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </AboutCard>
      </AboutTimeline>
    </Section>
  );
}
