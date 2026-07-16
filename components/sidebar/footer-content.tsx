"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function FooterContent({
  profile,
}: {
  profile: {
    avatar: string;
    copyright: string;
    version?: string;
  };
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  if (isCollapsed) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className={cn(
                  "flex h-10 w-10 cursor-default items-center justify-center rounded-xl",
                  "border border-sidebar-border/50 bg-sidebar-surface/60",
                  "transition-colors duration-200 hover:border-sidebar-active/30 hover:bg-sidebar-surface/80",
                  "outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active/50"
                )}
                aria-label={profile.copyright}
              >
                <Avatar className="h-7 w-7 shrink-0 rounded-lg ring-1 ring-sidebar-border/60">
                  <AvatarImage src={profile.avatar} alt="Portfolio logo" />
                  <AvatarFallback className="rounded-lg bg-sidebar-surface-elevated text-[9px] font-bold">
                    DT
                  </AvatarFallback>
                </Avatar>
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              sideOffset={10}
              className="border border-sidebar-border/60 bg-sidebar-surface-elevated px-3 py-2 text-sidebar-foreground shadow-[0_8px_24px_hsl(var(--sidebar-background)/0.55)]"
            >
              <p className="whitespace-nowrap text-xs text-sidebar-muted">
                {profile.copyright}
              </p>
              {profile.version && (
                <p className="mt-1 whitespace-nowrap text-[10px] font-medium tabular-nums text-sidebar-active">
                  {profile.version}
                </p>
              )}
            </TooltipContent>
          </Tooltip>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div
          className={cn(
            "flex w-full items-center gap-3 rounded-xl border border-sidebar-border/50 p-2.5",
            "bg-sidebar-surface/60 backdrop-blur-sm",
            "transition-colors duration-200 hover:border-sidebar-active/20 hover:bg-sidebar-surface/80"
          )}
        >
          <Avatar className="h-8 w-8 shrink-0 rounded-lg ring-1 ring-sidebar-border/60">
            <AvatarImage src={profile.avatar} alt="Portfolio logo" />
            <AvatarFallback className="rounded-lg bg-sidebar-surface-elevated text-[10px] font-bold">
              DT
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] leading-tight text-sidebar-muted">
              {profile.copyright}
            </p>
            {profile.version && (
              <span className="mt-1 inline-flex items-center rounded-md border border-sidebar-border/40 bg-sidebar-surface-elevated/80 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-sidebar-muted">
                {profile.version}
              </span>
            )}
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
