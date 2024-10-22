"use client";

import { Link } from "next-view-transitions";
import { menuItems } from "../types/menu-items";
import { motion } from "framer-motion";

interface MenuSectionProps {
  activeItem: string;
  handleNavigation: (href: string) => void;
  isExpanded: boolean;
}

export function MenuSection({
  activeItem,
  handleNavigation,
  isExpanded,
}: MenuSectionProps) {
  return (
    <nav className="flex-grow p-2 overflow-hidden">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <motion.li
            key={item.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              className={`flex items-center py-2 px-4 rounded-md text-gray-300 transition-all duration-300 ${
                activeItem === item.href
                  ? "bg-gradient-to-r from-blue-900 to-purple-900 text-white"
                  : "hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:text-white"
              } ${isExpanded ? "" : "justify-center"}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.href);
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="h-5 w-5" />
              </motion.div>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3"
                >
                  {item.label}
                </motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
