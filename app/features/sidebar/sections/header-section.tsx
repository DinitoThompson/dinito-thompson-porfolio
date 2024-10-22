import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Menu } from "lucide-react";

interface HeaderSectionProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
}

export function HeaderSection({
  isExpanded,
  toggleSidebar,
  isMobile,
}: HeaderSectionProps) {
  return (
    <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-900 flex items-center justify-between">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 p-2 sm:p-3"
          >
            <Avatar className="h-16 w-16 sm:h-10 sm:w-10 ring-2 ring-blue-900">
              <AvatarImage src="/profile.jpg" alt="Dinito Thompson" />
              <AvatarFallback className="bg-gradient-to-br from-blue-900 to-purple-900 text-white text-lg sm:text-base">
                DT
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h2 className="text-base sm:text-sm font-bold text-white">
                Dinito Thompson
              </h2>
              <p className="text-sm sm:text-xs bg-clip-text text-transparent text-white">
                Software Developer
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="ml-auto text-blue-300 hover:text-white hover:bg-blue-700 transition-colors duration-300"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            isMobile ? (
              <ChevronLeft className="h-6 w-6" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.div>
      </Button>
    </div>
  );
}
