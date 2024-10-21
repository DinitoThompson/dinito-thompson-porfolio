import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Design } from "../types/designs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const DesignDialog: React.FC<{
  design: Design;
  isOpen: boolean;
  onClose: () => void;
}> = ({ design, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-11/12 bg-gray-900 text-gray-100 p-0 overflow-hidden rounded-lg border border-gray-700">
        <DialogHeader className="p-6 bg-gray-800">
          <DialogTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
            {design.title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative h-[60vh]">
          <Image
            src={design.image}
            alt={design.title}
            priority={true}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-6 bg-gray-800">
          <p className="text-gray-300 text-center text-lg mb-4">
            {design.description}
          </p>
          <Badge
            variant="secondary"
            className="bg-purple-500/50 text-white text-sm mx-auto block w-fit px-4 py-1"
          >
            {design.category}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};
