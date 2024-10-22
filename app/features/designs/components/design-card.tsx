import { Card } from "@/components/ui/card";
import { Design } from "../types/designs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface DesignCardProps {
  design: Design;
  onClick: () => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({ design, onClick }) => {
  return (
    <Card
      className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden shadow-md group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-blue-500/50"
      onClick={onClick}
    >
      <motion.div
        className="relative aspect-square"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={design.image}
          alt={design.title}
          priority={true}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 bg-white"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-gray-900/90 to-transparent">
          <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 line-clamp-1">
            {design.title}
          </h3>
          <Badge
            variant="secondary"
            className="bg-blue-500/50 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5"
          >
            {design.category}
          </Badge>
        </div>
      </motion.div>
    </Card>
  );
};
