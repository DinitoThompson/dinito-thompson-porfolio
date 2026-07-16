"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const SKELETON_LAYOUT = [
  { featured: true },
  { featured: false },
  { featured: false },
  { featured: false },
  { featured: false },
  { featured: true },
  { featured: false },
  { featured: false },
  { featured: false },
  { featured: false },
];

export function DesignGridSkeleton() {
  return (
    <div className="space-y-8">
      {/* Filter bar skeleton */}
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-20 rounded-lg" />
        ))}
      </div>

      {/* Grid skeleton */}
      <div
        className={cn(
          "grid gap-3 sm:gap-4",
          "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
          "auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[200px]"
        )}
      >
        {SKELETON_LAYOUT.map((item, i) => (
          <Skeleton
            key={i}
            className={cn(
              "rounded-xl",
              item.featured && "col-span-2 row-span-2"
            )}
          />
        ))}
      </div>
    </div>
  );
}
