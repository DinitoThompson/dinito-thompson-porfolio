"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  children,
}) => (
  <Link href={href} passHref>
    <Button
      className="
        bg-gradient-to-r from-blue-700 to-blue-900
        hover:from-blue-800 hover:to-blue-950
        text-white font-medium
        transition-all duration-200
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      "
    >
      {children}
    </Button>
  </Link>
);
