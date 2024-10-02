"use client";

import React, { useState, useEffect } from "react";
import Intro from "./sections/intro";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Designs from "./sections/designs";
import { motion, useAnimation } from "framer-motion";

export function PortfolioComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const controls = useAnimation();
  const cursorControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setCursorVariant("hover");
    const handleMouseOut = () => setCursorVariant("default");

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  useEffect(() => {
    controls.start({
      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.2) 0%, transparent 20%)`,
    });

    cursorControls.start({
      x: mousePosition.x,
      y: mousePosition.y,
    });
  }, [mousePosition, controls, cursorControls]);

  const cursorVariants = {
    default: {
      scale: 1,
      borderColor: "rgba(59,130,246,0.5)",
    },
    hover: {
      scale: 1.5,
      borderColor: "rgba(236,72,153,0.8)",
    },
  };

  return (
    <React.Fragment>
      <div className="text-gray-100 relative">
        <motion.div
          className="fixed inset-0 pointer-events-none z-10"
          animate={controls}
          transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
        />
        <motion.div
          className="cursor-effect fixed pointer-events-none z-50"
          animate={cursorVariant}
          variants={cursorVariants}
          initial="default"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "2px solid rgba(59,130,246,0.5)",
            marginLeft: -20,
            marginTop: -20,
          }}
        />
        <motion.div
          className="cursor-dot fixed pointer-events-none z-50"
          animate={cursorControls}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "rgba(59,130,246,0.8)",
            marginLeft: -4,
            marginTop: -4,
          }}
        />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Designs />
        <Contact />
      </div>
    </React.Fragment>
  );
}
