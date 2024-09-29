"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  Menu,
  Home,
  User,
  Code,
  Briefcase,
  PenTool,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { StyledSeparator } from "../ui/styled-separator";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("#intro");
  const router = useRouter();
  const menuItems = [
    { href: "#intro", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#designs", label: "Designs", icon: PenTool },
    { href: "#contact", label: "Contact", icon: PhoneCall },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleNavigation = (href: string) => {
    router.push(href);
    setActiveItem(href);
    if (isMobile) setIsExpanded(false);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    window.dispatchEvent(
      new CustomEvent("sidebarToggle", { detail: { isExpanded: !isExpanded } })
    );
  };

  return (
    <motion.aside
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 h-full bg-gray-900 transition-all duration-300 ease-in-out ${
        isExpanded ? (isMobile ? "w-full" : "w-64") : "w-16"
      } flex flex-col z-50 shadow-lg`}
    >
      {/* Header Section */}
      <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-900 flex items-center justify-between">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Avatar className="h-10 w-10 ring-2 ring-blue-900">
                <AvatarImage src="/profile.jpg" alt="Dinito Thompson" />
                <AvatarFallback className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
                  DT
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <h2 className="text-sm font-bold text-white">
                  Dinito Thompson
                </h2>
                <p className="text-xs bg-clip-text text-transparent text-white">
                  Developer & Designer
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto text-blue-300 hover:text-white hover:bg-blue-700 transition-colors duration-300"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              isMobile ? (
                <ChevronLeft className="h-6 w-6" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.div>
        </Button>
      </div>

      <StyledSeparator />

      {/* Menu Section */}
      <ScrollArea className="flex-grow">
        <nav className="p-2">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className={`flex items-center py-2 px-4 rounded-md text-gray-300 transition-all duration-300 ${
                    activeItem === item.href
                      ? "bg-gradient-to-r from-blue-900 to-purple-900 text-white"
                      : "hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:text-white"
                  } ${isExpanded ? "" : "justify-center"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      <StyledSeparator />

      {/* Footer Section */}
      <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-900">
        <div
          className={`flex ${
            isExpanded ? "justify-between" : "flex-col space-y-2"
          }`}
        >
          <SocialButton
            href="https://github.com/DinitoThompson"
            icon={<Github className="h-4 w-4" />}
          />
          <SocialButton
            href="https://linkedin.com/in/yourusername"
            icon={<Linkedin className="h-4 w-4" />}
          />
          <SocialButton
            href="mailto:your.email@example.com"
            icon={<Mail className="h-4 w-4" />}
          />
        </div>
      </div>
    </motion.aside>
  );
}

const SocialButton = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <motion.div
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 text-blue-300 hover:text-white border-blue-900 transition-all duration-300"
      >
        {icon}
      </Button>
    </motion.div>
  </Link>
);
