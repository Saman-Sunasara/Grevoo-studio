"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only active on larger screens
    if (window.innerWidth < 1024) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = target.closest("a, button, [role='button'], input, textarea, select");
      const hasViewAttr = target.closest("[data-cursor='view']");

      if (hasViewAttr) {
        setCursorType("view");
      } else if (isClickable) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: "12px",
      height: "12px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
    },
    hover: {
      width: "48px",
      height: "48px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.6)",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
    },
    view: {
      width: "80px",
      height: "80px",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      color: "#030303",
    },
  };

  return (
    <motion.div
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
      animate={cursorType}
      variants={variants}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="fixed pointer-events-none z-50 rounded-full flex items-center justify-center mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    >
      {cursorType === "view" && (
        <span className="text-[10px] font-bold tracking-widest uppercase">
          Explore
        </span>
      )}
    </motion.div>
  );
}
