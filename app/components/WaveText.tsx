"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

import type { Variants } from "framer-motion";

const charVariants: Variants = {
  hidden: (_i: number) => ({
    y: 40,
    opacity: 0,
    color: "#00FF66",
  }),
  visible: (i: number) => ({
    y: 0,
    opacity: 0.45,
    color: "inherit",
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.39, 0.575, 0.565, 1] as [number, number, number, number],
    },
  }),
};

export function WaveText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ ...style, display: "inline", overflow: "hidden" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          initial="hidden"
          animate={controls}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
