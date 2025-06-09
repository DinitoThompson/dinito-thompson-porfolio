"use client";

import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const SocialButton = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
  label?: string;
  isExpanded?: boolean;
}) => (
  <Button
    variant="outline"
    size={"icon"}
    className={`bg-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 text-blue-300 hover:text-white border-blue-900 transition-all duration-300 w-full`}
    asChild
  >
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-full h-full"
      >
        {icon}
      </motion.div>
    </Link>
  </Button>
);
