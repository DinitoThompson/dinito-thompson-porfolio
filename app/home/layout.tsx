"use client";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { cn } from "@/lib/utils";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-gray-950">
      <AppSidebar />
      <SidebarInset className="flex-1">
        {/* Subtle mobile sidebar trigger */}
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <SidebarTrigger
            className={cn(
              "h-9 w-9 rounded-md",
              "bg-gray-900/80 backdrop-blur-sm border border-gray-800/50",
              "text-gray-300 hover:text-white hover:bg-gray-800/80",
              "shadow-lg transition-all duration-200 ease-out",
              "focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            )}
            aria-label="Toggle navigation menu"
          />
        </div>

        {/* Main content with proper dark theme */}
        <main
          className={cn(
            "flex flex-col min-h-screen",
            "bg-gray-950 text-gray-100",
            "transition-colors duration-300"
          )}
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
