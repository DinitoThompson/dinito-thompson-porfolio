"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Design } from "../types/designs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const DesignDialog: React.FC<{
  design: Design;
  isOpen: boolean;
  onClose: () => void;
}> = ({ design, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95%] bg-gray-900 text-gray-100 p-0 overflow-hidden rounded-xl border border-gray-700">
        <div className="flex flex-col max-h-[90vh]">
          <DialogHeader className="p-5 sm:p-6 bg-gray-800 relative">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500 pr-8">
              {design.title}
            </DialogTitle>
          </DialogHeader>

          <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-white/5">
            <Image
              src={design.image}
              alt={design.title}
              priority={true}
              fill
              className="object-contain"
            />
          </div>

          <div className="p-5 sm:p-6 bg-gray-800">
            <p className="text-gray-300 text-center text-base sm:text-lg mb-4 leading-relaxed">
              {design.description}
            </p>
            <Badge
              variant="secondary"
              className="bg-blue-500/30 text-blue-200 text-sm mx-auto block w-fit px-4 py-1"
            >
              {design.category}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
