"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { cn } from "@/lib/utils";

interface TypeWriterProps {
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypeWriter({
  className,
  speed = 60,
  delay = 2500,
}: TypeWriterProps) {
  const [typewriterText] = useTypewriter({
    words: [
      "Building scalable web applications",
      "Crafting intuitive backend services",
      "Exploring modern development practices",
      "Researching new AI applications",
      "Designing thoughtful user experiences",
      "Optimizing performance and accessibility",
    ],
    loop: 0,
    typeSpeed: speed,
    deleteSpeed: 50,
    delaySpeed: delay,
  });

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="text-blue-300 font-normal">{typewriterText}</span>
      <Cursor cursorColor="#93c5fd" cursorStyle="|" cursorBlinking={true} />
    </span>
  );
}
