"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../features/sidebar/sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSidebarToggle = (event: CustomEvent) => {
      setIsSidebarExpanded(event.detail.isExpanded);
    };

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 868);
    };

    window.addEventListener(
      "sidebarToggle",
      handleSidebarToggle as EventListener
    );
    window.addEventListener("resize", checkIsMobile);

    checkIsMobile();

    return () => {
      window.removeEventListener(
        "sidebarToggle",
        handleSidebarToggle as EventListener
      );
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-black">
      <Sidebar />
      <main
        className={`flex-1 overflow-y-auto p-4 lg:p-6 transition-all duration-300 ease-in-out ${
          isSidebarExpanded ? (isMobile ? "ml-0" : "ml-64") : "ml-16"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
