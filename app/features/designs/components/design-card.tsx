"use client";

import { Card } from "@/components/ui/card";
import { Design } from "../types/designs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface DesignCardProps {
  design: Design;
  onClick: () => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({ design, onClick }) => {
  return (
    <Card
      className="group relative w-full h-full overflow-hidden rounded-lg border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-full">
        <Image
          src={design.image}
          alt={design.title}
          priority={true}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />

        {/* Semi-transparent background for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/80 opacity-100" />

        {/* Content overlay - always visible but more prominent on hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 transition-all duration-300">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white line-clamp-1 opacity-90 group-hover:opacity-100">
              {design.title}
            </h3>
            <Badge
              variant="secondary"
              className="bg-blue-500/20 text-blue-200 border border-blue-500/30 text-xs"
            >
              {design.category}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};
