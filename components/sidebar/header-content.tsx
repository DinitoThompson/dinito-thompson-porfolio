import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

export function HeaderContent({
  profile,
}: {
  profile: {
    name: string;
    role: string;
    avatar: string;
  };
}) {
  const { state } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {state === "expanded" ? (
          <div
            className={cn(
              "flex w-full items-center gap-2 p-2 rounded-md",
              "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              "transition-colors duration-200"
            )}
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={profile.avatar} alt={"DT"} />
                <AvatarFallback className="rounded-lg">DT</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{profile.name}</span>
              <span className="truncate text-xs">{profile.role}</span>
            </div>
            <SidebarTrigger className="text-white" />
          </div>
        ) : (
          <SidebarTrigger className="text-white mx-auto" />
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
