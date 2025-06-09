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
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { FooterContent } from "./footer-content";
import { cn } from "@/lib/utils";

const sidebarData = {
  header: {
    title: "Portfolio",
    profile: {
      name: "Dinito Thompson",
      role: "Software Developer & Designer",
      location: "Jamaica",
      avatar: "/profile.jpg",
      status: "Available",
    },
  },
  menuItems: {
    title: "Navigation",
    openNewTab: false,
    links: [
      {
        name: "Home",
        url: "/home",
        icon: Home,
        openNewTab: false,
        description: "Welcome & overview",
      },
      {
        name: "About",
        url: "/home/about",
        icon: User,
        openNewTab: false,
        description: "My background",
      },
      {
        name: "Skills",
        url: "/home/skills",
        icon: Code,
        openNewTab: false,
        description: "Technical expertise",
      },
      {
        name: "Projects",
        url: "/home/projects",
        icon: Briefcase,
        openNewTab: false,
        description: "Development work",
      },
      {
        name: "Designs",
        url: "/home/designs",
        icon: PenTool,
        openNewTab: false,
        description: "UI/UX portfolio",
      },
      {
        name: "Contact",
        url: "/home/contact",
        icon: PhoneCall,
        openNewTab: false,
        description: "Get in touch",
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
        description: "Code repositories",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dinito-thompson/",
        icon: Linkedin,
        openNewTab: true,
        description: "Professional network",
      },
      {
        name: "Email",
        url: "mailto:dinitothompson@gmail.com",
        icon: Mail,
        openNewTab: true,
        description: "Direct contact",
      },
      {
        name: "Resume",
        url: "https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl",
        icon: FileText,
        openNewTab: true,
        description: "Download CV",
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
        "border-r border-gray-800/50 bg-gray-900/95 backdrop-blur-sm",
        "transition-colors duration-300"
      )}
      {...props}
    >
      <SidebarHeader className="border-b border-gray-800/30 bg-gray-900/50">
        <HeaderContent profile={sidebarData.header.profile} />
      </SidebarHeader>

      <SidebarContent className="px-0 bg-gray-900/30">
        <div className="space-y-6 py-4">
          <NavMain items={sidebarData.menuItems} />
          <div className="px-4">
            <Separator className="bg-gray-800/30" />
          </div>
          <NavMain items={sidebarData.onlineItems} />
        </div>
      </SidebarContent>

      <div className="px-4">
        <Separator className="bg-gray-800/30" />
      </div>

      <SidebarFooter className="bg-gray-900/50 border-t border-gray-800/30">
        <FooterContent profile={sidebarData.footer} />
      </SidebarFooter>
    </Sidebar>
  );
}
