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

const sidebarData = {
  header: {
    title: "Portfolio",
    profile: {
      name: "Dinito Thompson",
      role: "Software Developer",
      avatar: "/profile.jpg",
    },
  },
  menuItems: {
    title: "Menu",
    openNewTab: false,
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
    title: "Online Resource",
    links: [
      {
        name: "Github",
        url: "https://github.com/DinitoThompson",
        icon: Github,
        openNewTab: true,
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/dinito-thompson/",
        icon: Linkedin,
        openNewTab: true,
      },
      {
        name: "Mail",
        url: "mailto:dinitothompson@gmail.com",
        icon: Mail,
        openNewTab: true,
      },
      {
        name: "Resume",
        url: "https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl?usp=sharing",
        icon: FileText,
        openNewTab: true,
      },
    ],
  },
  footer: {
    avatar: "/assets/icons/logo.png",
    copyright: `© ${new Date().getFullYear()} Dinito Thompson`,
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <HeaderContent profile={sidebarData.header.profile} />
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.menuItems} />
        <NavMain items={sidebarData.onlineItems} />
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <FooterContent profile={sidebarData.footer} />
      </SidebarFooter>
    </Sidebar>
  );
}
