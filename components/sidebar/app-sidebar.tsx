"use client";

import * as React from "react";
import {
  Briefcase,
  Code,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  PenTool,
  PhoneCall,
  User,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { HeaderContent } from "@/components/sidebar/header-content";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { FooterContent } from "./footer-content";
import { cn } from "@/lib/utils";

const sidebarData = {
  header: {
    profile: {
      name: "Dinito Thompson",
      role: "Lead Software Developer",
      location: "Jamaica",
      avatar: "/profile.jpg",
      status: "Available for work",
    },
  },
  menuItems: {
    title: "Navigation",
    links: [
      {
        name: "Home",
        url: "/home",
        icon: Home,
        openNewTab: false,
      },
      {
        name: "About",
        url: "/home/about",
        icon: User,
        openNewTab: false,
      },
      {
        name: "Skills",
        url: "/home/skills",
        icon: Code,
        openNewTab: false,
      },
      {
        name: "Projects",
        url: "/home/projects",
        icon: Briefcase,
        openNewTab: false,
      },
      {
        name: "Designs",
        url: "/home/designs",
        icon: PenTool,
        openNewTab: false,
      },
      {
        name: "Contact",
        url: "/home/contact",
        icon: PhoneCall,
        openNewTab: false,
      },
    ],
  },
  onlineItems: {
    title: "Connect",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/DinitoThompson",
        icon: Github,
        openNewTab: true,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dinito-thompson/",
        icon: Linkedin,
        openNewTab: true,
      },
      {
        name: "Email",
        url: "mailto:dinitothompson@gmail.com",
        icon: Mail,
        openNewTab: true,
      },
      {
        name: "Resume",
        url: "https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl",
        icon: FileText,
        openNewTab: true,
      },
    ],
  },
  footer: {
    avatar: "/assets/icons/logo.png",
    copyright: `© ${new Date().getFullYear()} Dinito Thompson`,
    version: "v2.0",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className={cn(
        "[&_[data-sidebar=sidebar]]:relative [&_[data-sidebar=sidebar]]:overflow-hidden",
        "[&_[data-sidebar=sidebar]]:border [&_[data-sidebar=sidebar]]:border-sidebar-border/60",
        "[&_[data-sidebar=sidebar]]:bg-sidebar/95 [&_[data-sidebar=sidebar]]:backdrop-blur-xl",
        "[&_[data-sidebar=sidebar]]:shadow-[4px_0_24px_hsl(var(--sidebar-background)/0.5)]",
        "transition-colors duration-300"
      )}
      {...props}
    >
      {/* Gradient accent edge */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-px md:block"
        style={{
          background:
            "linear-gradient(180deg, transparent, hsl(var(--sidebar-active) / 0.5), hsl(var(--sidebar-glow) / 0.4), hsl(var(--sidebar-success) / 0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <SidebarHeader className="border-b border-sidebar-border/40 bg-sidebar-surface/50 px-2.5 py-3 group-data-[collapsible=icon]:border-b-sidebar-border/30 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:px-1.5 group-data-[collapsible=icon]:py-2">
        <HeaderContent profile={sidebarData.header.profile} />
      </SidebarHeader>

      <SidebarContent className="gap-0 bg-transparent px-1 py-3">
        <NavMain items={sidebarData.menuItems} />
        <SidebarSeparator className="my-3 bg-sidebar-border/40" />
        <NavMain items={sidebarData.onlineItems} />
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border/40 bg-sidebar-surface/50 px-2.5 py-3 group-data-[collapsible=icon]:border-t-sidebar-border/30 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:px-1.5 group-data-[collapsible=icon]:py-2">
        <FooterContent profile={sidebarData.footer} />
      </SidebarFooter>

      <SidebarRail className="hover:after:bg-sidebar-active/40" />
    </Sidebar>
  );
}
