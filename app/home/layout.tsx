"use client";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-gray-950">
      <AppSidebar />
      <SidebarInset>
        <div className="fixed top-5 z-50 md:hidden">
          <SidebarTrigger className="text-white" />
        </div>
        <main className="flex flex-col min-h-screen bg-gray-950 px-0 py-0">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
