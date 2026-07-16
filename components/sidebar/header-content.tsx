"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

export function HeaderContent({
  profile,
}: {
  profile: {
    name: string;
    role: string;
    avatar: string;
    location?: string;
    status?: string;
  };
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  if (isCollapsed) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex flex-col items-center gap-2.5 py-0.5">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="relative shrink-0 cursor-default rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active/50"
                  aria-label={`${profile.name}, ${profile.role}`}
                >
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-sidebar-active via-sidebar-glow to-sidebar-success opacity-80 blur-[2px]" />
                  <Avatar className="relative h-10 w-10 rounded-xl ring-2 ring-sidebar-border">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback className="rounded-xl bg-sidebar-surface-elevated text-xs font-semibold text-sidebar-active-foreground">
                      DT
                    </AvatarFallback>
                  </Avatar>
                  {profile.status && (
                    <span
                      className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-sidebar-surface bg-sidebar-success-surface"
                      aria-hidden="true"
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sidebar-success" />
                    </span>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={10}
                className="border border-sidebar-border/60 bg-sidebar-surface-elevated px-3 py-2 text-sidebar-foreground shadow-[0_8px_24px_hsl(var(--sidebar-background)/0.55)]"
              >
                <p className="whitespace-nowrap text-sm font-semibold">
                  {profile.name}
                </p>
                <p className="mt-0.5 whitespace-nowrap text-xs text-sidebar-muted">
                  {profile.role}
                </p>
                {profile.status && (
                  <p className="mt-1.5 flex items-center gap-1.5 whitespace-nowrap text-[11px] text-sidebar-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-sidebar-success" />
                    {profile.status}
                  </p>
                )}
              </TooltipContent>
            </Tooltip>

            <SidebarTrigger
              className={cn(
                "h-9 w-9 shrink-0 cursor-pointer rounded-xl",
                "border border-sidebar-border/50 bg-sidebar-surface/60",
                "text-sidebar-muted hover:border-sidebar-active/30 hover:bg-sidebar-hover-surface hover:text-sidebar-foreground",
                "transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sidebar-active/50"
              )}
            />
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative w-full rounded-xl border border-sidebar-border/60 p-3 pt-8",
            "bg-sidebar-surface/80 backdrop-blur-sm",
            "shadow-[inset_0_1px_0_hsl(var(--sidebar-foreground)/0.04)]"
          )}
        >
          <SidebarTrigger
            className={cn(
              "absolute right-2 top-2 h-7 w-7 shrink-0 cursor-pointer rounded-md",
              "text-sidebar-muted hover:bg-sidebar-hover-surface hover:text-sidebar-foreground",
              "transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-sidebar-active/50"
            )}
          />

          <div className="flex items-start gap-3">
            <div className="relative shrink-0">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-sidebar-active via-sidebar-glow to-sidebar-success opacity-80" />
              <Avatar className="relative h-10 w-10 rounded-xl ring-2 ring-sidebar-background">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="rounded-xl bg-sidebar-surface-elevated text-xs font-bold text-sidebar-active-foreground">
                  DT
                </AvatarFallback>
              </Avatar>
              {profile.status && (
                <span
                  className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-sidebar-surface bg-sidebar-success-surface"
                  title={profile.status}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sidebar-success" />
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="truncate text-sm font-semibold leading-tight text-sidebar-foreground">
                {profile.name}
              </p>
              <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-sidebar-muted">
                {profile.role}
              </p>
              {profile.location && (
                <p className="mt-1.5 flex items-center gap-1 text-[10px] text-sidebar-muted/80">
                  <MapPin className="h-2.5 w-2.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{profile.location}</span>
                </p>
              )}
            </div>
          </div>

          {profile.status && (
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-sidebar-success-surface bg-sidebar-success-surface px-2.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sidebar-success opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sidebar-success" />
              </span>
              <span className="truncate text-[11px] font-medium text-sidebar-success">
                {profile.status}
              </span>
            </div>
          )}
        </motion.div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
