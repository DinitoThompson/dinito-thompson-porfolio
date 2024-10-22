import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function FooterContent({
  profile,
}: {
  profile: {
    avatar: string;
    copyright: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={profile.avatar} alt="DT" />
            <AvatarFallback className="rounded-lg">DT</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight gap-0.5">
            <span className="truncate text-xs text-sidebar-foreground/70">
              {profile.copyright}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
