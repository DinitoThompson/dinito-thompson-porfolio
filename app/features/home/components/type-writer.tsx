"use client";

import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { cn } from "@/lib/utils";

const INITIAL_TEXT = "Building scalable applications";

const TYPEWRITER_WORDS = [
  "Building scalable applications",
  "Crafting intuitive backend services",
  "Exploring modern dev practices",
  "Researching AI applications",
  "Designing thoughtful UX",
  "Optimizing performance & a11y",
];

interface TypeWriterProps {
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypeWriter({
  className,
  speed = 55,
  delay = 2200,
}: TypeWriterProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [typewriterText] = useTypewriter({
    words: TYPEWRITER_WORDS,
    loop: 0,
    typeSpeed: speed,
    deleteSpeed: 45,
    delaySpeed: delay,
  });

  return (
    <span
      className={cn(
        "inline-flex min-h-[1.25rem] w-full min-w-0 items-center",
        className
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="truncate whitespace-nowrap text-sm font-medium text-welcome-accent-cyan sm:text-base">
        {mounted ? typewriterText : INITIAL_TEXT}
      </span>
      {mounted && (
        <Cursor
          cursorColor="hsl(var(--welcome-accent-cyan))"
          cursorStyle="|"
          cursorBlinking={true}
        />
      )}
    </span>
  );
}
