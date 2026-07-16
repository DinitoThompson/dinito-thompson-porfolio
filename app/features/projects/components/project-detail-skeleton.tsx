"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function ProjectDetailSkeleton() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <Skeleton className="h-10 w-36 rounded-lg" />

      <div className="overflow-hidden rounded-2xl border border-welcome-surface-border/50 sm:rounded-3xl">
        <Skeleton className="h-1 w-full rounded-none" />
        <div className="space-y-4 p-6 sm:p-8">
          <Skeleton className="h-8 w-2/3 max-w-md" />
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-36" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="space-y-6 lg:col-span-2">
          <Skeleton className="aspect-video w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-48 w-full rounded-xl" />
        </div>
        <div className="space-y-5">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-52 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
