"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MenuSection } from "@/app/features/sidebar/sections/menu-section";
import { FooterSection } from "@/app/features/sidebar/sections/footer-section";
import { HeaderSection } from "@/app/features/sidebar/sections/header-section";
import { StyledSeparator } from "@/components/ui/styled-separator";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("#intro");
  const router = useRouter();

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
    if (isMobile) {
      setIsExpanded(false);
      window.dispatchEvent(
        new CustomEvent("sidebarToggle", {
          detail: { isExpanded: false },
        })
      );
    }
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
        isExpanded ? (isMobile ? "w-2/4" : "w-64") : "w-16"
      } flex flex-col z-50 shadow-lg`}
    >
      {/* Header Section */}
      <HeaderSection
        isExpanded={isExpanded}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />
      <StyledSeparator />
      {/* Menu Section */}
      <MenuSection
        activeItem={activeItem}
        handleNavigation={handleNavigation}
        isExpanded={isExpanded}
      />
      <StyledSeparator />
      {/* Footer Section */}
      <FooterSection isExpanded={isExpanded} />
    </motion.aside>
  );
}
