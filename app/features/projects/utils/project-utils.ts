import { Project, ProjectCategory } from "../types/projects";

export const categoryStyles: Record<
  ProjectCategory,
  { badge: string; glow: string; bar: string }
> = {
  Enterprise: {
    badge:
      "border-welcome-accent-blue/30 bg-welcome-accent-blue/10 text-welcome-accent-cyan",
    glow: "group-hover:shadow-welcome-accent-blue/10",
    bar: "from-welcome-accent-blue via-welcome-accent-indigo to-welcome-accent-teal",
  },
  Personal: {
    badge:
      "border-welcome-accent-purple/30 bg-welcome-accent-purple/10 text-welcome-accent-indigo",
    glow: "group-hover:shadow-welcome-accent-indigo/10",
    bar: "from-welcome-accent-purple via-welcome-accent-indigo to-welcome-accent-blue",
  },
  Academic: {
    badge:
      "border-sidebar-success/30 bg-sidebar-success-surface text-sidebar-success",
    glow: "group-hover:shadow-sidebar-success/10",
    bar: "from-sidebar-success via-welcome-accent-teal to-welcome-accent-blue",
  },
};

function formatMonthYear(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function formatDurationRange(start: string, end?: string): string {
  const endLabel =
    !end || end === "Present" ? "Present" : formatMonthYear(end);
  return `${formatMonthYear(start)} – ${endLabel}`;
}

export function getDuration(project: Project): string {
  const start = new Date(project.duration.start);
  const end =
    project.duration.end === "Present"
      ? new Date()
      : project.duration.end
        ? new Date(project.duration.end)
        : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (months < 1) return "< 1 mo";
  if (months === 1) return "1 mo";
  if (months < 12) return `${months} mo`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) return `${years} ${years === 1 ? "yr" : "yrs"}`;
  return `${years}y ${remainingMonths}m`;
}
