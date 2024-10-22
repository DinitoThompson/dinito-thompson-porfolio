import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "next-view-transitions";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    links: {
      name?: string;
      url?: string;
      icon?: LucideIcon;
      openNewTab?: boolean;
    }[];
  };
}) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{items.title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.links.map((item) => {
          const isActive = pathname === item.url;
          return (
            <SidebarMenuItem key={item.name}>
              <Link
                href={item.url || "/home"}
                passHref
                onClick={handleClick}
                {...(item.openNewTab
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                <SidebarMenuButton tooltip={item.name} isActive={isActive}>
                  {item.icon && <item.icon />}
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
