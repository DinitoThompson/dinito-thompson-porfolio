"use client";

import { type LucideIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    links: {
      name?: string;
      url?: string;
      icon?: LucideIcon;
      openNewTab?: boolean;
      description?: string;
    }[];
  };
}) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile, state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarGroup className="px-2.5 py-0 group-data-[collapsible=icon]:px-0">
      <SidebarGroupLabel className="mb-1 px-1">{items.title}</SidebarGroupLabel>
      <SidebarMenu className="gap-0.5 group-data-[collapsible=icon]:gap-1.5">
        {items.links.map((item) => {
          const isActive = pathname === item.url;

          return (
            <SidebarMenuItem key={item.name}>
              <Link
                href={item.url || "/home"}
                passHref
                onClick={handleClick}
                {...(item.openNewTab
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="block group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center"
              >
                <SidebarMenuButton
                  tooltip={
                    item.openNewTab
                      ? {
                          children: (
                            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                              {item.name}
                              <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                            </span>
                          ),
                        }
                      : item.name
                  }
                  isActive={isActive}
                  className="group/nav-item"
                >
                  {isActive && !isCollapsed && (
                    <motion.span
                      layoutId="sidebar-active-pill"
                      className="absolute inset-0 rounded-lg bg-sidebar-active-surface"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.icon && (
                    <item.icon
                      className={cn(
                        "relative z-10 transition-colors duration-200",
                        isActive
                          ? "text-sidebar-active"
                          : "text-sidebar-muted group-hover/nav-item:text-sidebar-foreground"
                      )}
                    />
                  )}
                  <span className="relative z-10 flex-1 truncate whitespace-nowrap group-data-[collapsible=icon]:sr-only">
                    {item.name}
                  </span>
                  {item.openNewTab && !isCollapsed && (
                    <ExternalLink
                      className="relative z-10 h-3 w-3 shrink-0 opacity-0 transition-opacity duration-200 group-hover/nav-item:opacity-50"
                      aria-hidden="true"
                    />
                  )}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
