"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { ContactInfoItem } from "./components/contact-info-item";
import { ContactForm } from "./components/contact-form";
import { cn } from "@/lib/utils";

export default function ContactScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-welcome-deep text-welcome-foreground">
      <BubblesBackground className="opacity-45" density="low" animeMode={true} />

      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
          {/* Page header */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "overflow-hidden rounded-2xl border border-welcome-surface-border/60",
              "bg-welcome-elevated/90 text-center backdrop-blur-md sm:rounded-3xl"
            )}
          >
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--welcome-accent-teal)), hsl(var(--welcome-accent-blue)), hsl(var(--welcome-accent-indigo)))",
              }}
              aria-hidden="true"
            />
            <div className="space-y-3 px-5 py-8 sm:px-8 sm:py-10">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-welcome-muted">
                <MessageCircle className="h-3.5 w-3.5 text-welcome-accent-teal" />
                Get In Touch
              </p>
              <h1 className="text-2xl font-extrabold tracking-tight text-welcome-foreground sm:text-3xl md:text-4xl">
                Let&apos;s Connect
              </h1>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-welcome-muted sm:text-base">
                Opportunities, collaborations, or a quick hello — I&apos;d love
                to hear from you.
              </p>
            </div>
          </motion.header>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "overflow-hidden rounded-2xl border border-welcome-surface-border/60",
              "bg-welcome-elevated/90 shadow-[0_16px_48px_hsl(var(--welcome-bg-deep)/0.45)] backdrop-blur-md sm:rounded-3xl"
            )}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Info panel */}
              <aside
                className={cn(
                  "border-b border-welcome-surface-border/40 lg:w-[38%] lg:border-b-0 lg:border-r",
                  "bg-welcome-surface/40 p-6 sm:p-8 lg:p-10"
                )}
              >
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-5 w-1 shrink-0 rounded-full bg-welcome-accent-teal"
                        aria-hidden="true"
                      />
                      <h2 className="whitespace-nowrap text-lg font-bold text-welcome-foreground">
                        Direct Contact
                      </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-welcome-muted">
                      Open to new roles, freelance work, and interesting
                      projects.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <ContactInfoItem
                      icon={Mail}
                      label="Email"
                      value="dinitothompson@gmail.com"
                      href="mailto:dinitothompson@gmail.com"
                      accent="blue"
                    />
                    <ContactInfoItem
                      icon={Phone}
                      label="Phone"
                      value="+1 (876) 357-1273"
                      href="tel:+18763571273"
                      accent="teal"
                    />
                    <ContactInfoItem
                      icon={MapPin}
                      label="Location"
                      value="Kingston, Jamaica"
                      accent="purple"
                    />
                    <ContactInfoItem
                      icon={Clock}
                      label="Response"
                      value="Within 24 hours"
                      accent="indigo"
                    />
                  </div>

                  <div className="rounded-xl border border-welcome-surface-border/40 bg-welcome-surface/50 p-4">
                    <p className="text-xs leading-relaxed text-welcome-muted">
                      Prefer email? Reach out directly — I read every message.
                    </p>
                  </div>

                  <div className="border-t border-welcome-surface-border/40 pt-6">
                    <Link
                      href="https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className={cn(
                          "h-11 w-full cursor-pointer gap-2 whitespace-nowrap",
                          "border-welcome-surface-border/60 bg-welcome-surface/50 text-welcome-foreground",
                          "hover:border-welcome-accent-blue/30 hover:bg-welcome-surface/80",
                          "focus-visible:ring-2 focus-visible:ring-welcome-accent-blue/40"
                        )}
                      >
                        <FileText className="h-4 w-4 shrink-0" />
                        Download Resume
                      </Button>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Form panel */}
              <section className="min-w-0 flex-1 p-6 sm:p-8 lg:p-10">
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-5 w-1 shrink-0 rounded-full bg-welcome-accent-blue"
                      aria-hidden="true"
                    />
                    <h2 className="whitespace-nowrap text-lg font-bold text-welcome-foreground">
                      Send a Message
                    </h2>
                  </div>
                  <p className="text-sm text-welcome-muted">
                    Fill in the form and I&apos;ll reply as soon as I can.
                  </p>
                </div>

                <ContactForm />
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
