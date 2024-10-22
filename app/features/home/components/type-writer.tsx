"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function TypeWriter() {
  const [typewriterText] = useTypewriter({
    words: [
      "Innovation leads, Imitation follows",
      "Code gives us superpowers",
      "Dream in code, build reality",
      "Imagination fuels impact",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <>
      {typewriterText}
      <Cursor cursorColor="white" />
    </>
  );
}
