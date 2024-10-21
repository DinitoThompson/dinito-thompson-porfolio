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
      className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden shadow-md group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
      onClick={onClick}
    >
      <div className="relative aspect-square">
        <Image
          src={design.image}
          alt={design.title}
          priority={true}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-sm font-bold text-white mb-1 truncate">
            {design.title}
          </h3>
          <Badge
            variant="secondary"
            className="bg-purple-500/50 text-white text-xs"
          >
            {design.category}
          </Badge>
        </div>
      </div>
    </Card>
  );
};
