"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronLeft, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const menuItems = [
    { href: "#intro", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👤" },
    { href: "#skills", label: "Skills", icon: "🛠️" },
    { href: "#projects", label: "Projects", icon: "💼" },
    { href: "#designs", label: "Designs", icon: "🎨" },
    { href: "#contact", label: "Contact", icon: "📞" },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleNavigation = (href: string) => {
    router.push(href);
    if (isMobile) setIsExpanded(false);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    window.dispatchEvent(
      new CustomEvent("sidebarToggle", { detail: { isExpanded: !isExpanded } })
    );
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-900 transition-all duration-300 ease-in-out ${
        isExpanded ? (isMobile ? "w-full" : "w-64") : "w-16"
      } flex flex-col z-50`}
    >
      {/* Header Section */}
      <div className="p-4 bg-gray-800 flex items-center justify-between">
        {isExpanded && (
          <>
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/path-to-your-image.jpg"
                alt="Dinito Thompson"
              />
              <AvatarFallback>DT</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <h2 className="text-sm font-bold text-white">Dinito Thompson</h2>
              <p className="text-xs text-gray-400">Developer & Designer</p>
            </div>
          </>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
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
        </Button>
      </div>

      <Separator className="bg-gray-700" />

      {/* Menu Section */}
      <ScrollArea className="flex-grow">
        <nav className="p-2">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`flex items-center py-2 px-4 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
                    isExpanded ? "" : "justify-center"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                >
                  <span className="text-lg">{item.icon}</span>
                  {isExpanded && <span className="ml-3">{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      <Separator className="bg-gray-700" />

      {/* Footer Section */}
      <div className="p-4 bg-gray-800">
        <div
          className={`flex ${
            isExpanded ? "justify-between" : "flex-col space-y-2"
          }`}
        >
          <Link
            href="https://github.com/DinitoThompson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-gray-700"
            >
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-gray-700"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="mailto:your.email@example.com">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-gray-700"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
