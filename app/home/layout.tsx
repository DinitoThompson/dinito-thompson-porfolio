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
    <SidebarProvider className="bg-welcome-deep">
      <AppSidebar />
      <SidebarInset className="flex-1">
        {/* Mobile sidebar trigger */}
        <div className="fixed left-4 top-4 z-50 md:hidden">
          <SidebarTrigger
            className={cn(
              "h-10 w-10 cursor-pointer rounded-xl",
              "border border-sidebar-border/60 bg-sidebar/90 backdrop-blur-md",
              "text-sidebar-muted shadow-lg",
              "transition-all duration-200 ease-out",
              "hover:border-sidebar-active/40 hover:bg-sidebar-surface hover:text-sidebar-foreground",
              "focus:outline-none focus:ring-2 focus:ring-sidebar-active/50 focus:ring-offset-2 focus:ring-offset-welcome-deep",
              "active:scale-95"
            )}
            aria-label="Toggle navigation menu"
          />
        </div>

        <main
          className={cn(
            "flex min-h-screen flex-col",
            "bg-welcome-deep text-welcome-foreground",
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
