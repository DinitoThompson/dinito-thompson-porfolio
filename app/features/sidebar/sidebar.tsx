"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MenuSection } from "@/app/features/sidebar/sections/menu-section";
import { FooterSection } from "@/app/features/sidebar/sections/footer-section";
import { HeaderSection } from "@/app/features/sidebar/sections/header-section";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const sidebarVariants = {
  expanded: {
    width: "16rem", // w-64
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  collapsed: {
    width: "4rem", // w-16
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  mobile: {
    width: "75%",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Update active item based on current pathname
  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  // Auto-collapse on mobile when route changes
  useEffect(() => {
    if (isMobile && isExpanded) {
      setIsExpanded(false);
    }
  }, [pathname, isMobile, isExpanded]);

  // Handle responsive behavior
  useEffect(() => {
    if (!isMobile && isExpanded) {
      // Keep expanded state on desktop
      return;
    }
    if (isMobile) {
      // Always start collapsed on mobile
      setIsExpanded(false);
    }
  }, [isMobile, isExpanded]);

  const handleNavigation = (href: string) => {
    router.push(href);
    setActiveItem(href);

    // Auto-close sidebar on mobile after navigation
    if (isMobile) {
      setTimeout(() => setIsExpanded(false), 150);
      window.dispatchEvent(
        new CustomEvent("sidebarToggle", {
          detail: { isExpanded: false },
        })
      );
    }
  };

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    window.dispatchEvent(
      new CustomEvent("sidebarToggle", {
        detail: { isExpanded: newState },
      })
    );
  };

  const getSidebarVariant = () => {
    if (isMobile && isExpanded) return "mobile";
    return isExpanded ? "expanded" : "collapsed";
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobile && isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsExpanded(false)}
            aria-label="Close sidebar overlay"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        animate={getSidebarVariant()}
        className={cn(
          "fixed top-0 left-0 h-full z-50",
          "bg-card border-r border-border",
          "flex flex-col shadow-lg",
          "transition-shadow duration-300",
          isMobile && isExpanded && "shadow-2xl"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header Section */}
        <div className="flex-shrink-0 p-4">
          <HeaderSection
            isExpanded={isExpanded}
            toggleSidebar={toggleSidebar}
            isMobile={isMobile}
          />
        </div>

        <Separator className="mx-4" />

        {/* Menu Section - Scrollable */}
        <div className="flex-1 overflow-y-auto py-4">
          <MenuSection
            activeItem={activeItem}
            handleNavigation={handleNavigation}
            isExpanded={isExpanded}
          />
        </div>

        <Separator className="mx-4" />

        {/* Footer Section */}
        <div className="flex-shrink-0 p-4">
          <FooterSection isExpanded={isExpanded} />
        </div>
      </motion.aside>

      {/* Sidebar spacer for desktop */}
      <motion.div
        variants={sidebarVariants}
        animate={getSidebarVariant()}
        className="hidden md:block flex-shrink-0"
        aria-hidden="true"
      />
    </>
  );
}
