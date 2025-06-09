import {
  Code2,
  Palette,
  Zap,
  Database,
  Smartphone,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface FloatingIcon {
  Icon: LucideIcon;
  x: string;
  y: string;
  delay?: number;
  scale?: number;
}

// Main set - subtle and well-positioned
export const floatingIcons: FloatingIcon[] = [
  { Icon: Code2, x: "8%", y: "18%", delay: 0, scale: 1 },
  { Icon: Database, x: "85%", y: "15%", delay: 0.3, scale: 0.9 },
  { Icon: Globe, x: "12%", y: "72%", delay: 0.6, scale: 1.1 },
  { Icon: Smartphone, x: "88%", y: "68%", delay: 0.9, scale: 0.8 },
  { Icon: Palette, x: "18%", y: "45%", delay: 1.2, scale: 0.9 },
  { Icon: Zap, x: "82%", y: "42%", delay: 1.5, scale: 0.85 },
];

// Minimal set - very clean, "discover as you explore" vibe
export const floatingIconsMinimal: FloatingIcon[] = [
  { Icon: Code2, x: "15%", y: "25%", delay: 0.2, scale: 1 },
  { Icon: Palette, x: "85%", y: "20%", delay: 0.8, scale: 0.9 },
  { Icon: Zap, x: "80%", y: "75%", delay: 1.4, scale: 0.85 },
];

// Clean set - balanced between minimal and full
export const floatingIconsClean: FloatingIcon[] = [
  { Icon: Code2, x: "12%", y: "22%", delay: 0, scale: 0.95 },
  { Icon: Globe, x: "88%", y: "18%", delay: 0.4, scale: 0.9 },
  { Icon: Palette, x: "15%", y: "78%", delay: 0.8, scale: 0.85 },
  { Icon: Database, x: "85%", y: "72%", delay: 1.2, scale: 0.8 },
];
