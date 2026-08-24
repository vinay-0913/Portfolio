"use client";

import { motion } from "framer-motion";

export default function HeroLighting() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0">
      {/* 1. Main Overhead Cone / Spotlight */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[650px]"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(232, 220, 200, 0.22) 0%, rgba(232, 220, 200, 0.08) 40%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* 2. Top-Left Primary Light Source (Window God Rays Origin) */}
      <div
        className="absolute -top-24 -left-20 w-[600px] h-[600px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 250, 240, 0.28) 0%, rgba(232, 220, 200, 0.12) 35%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* 3. Diagonal Volumetric Window Light Beams (God Rays / Streaks) */}
      <motion.div
        animate={{
          opacity: [0.75, 0.95, 0.75],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[140%] h-[140%]"
        style={{
          background: `
            linear-gradient(
              130deg,
              rgba(255, 255, 255, 0.0) 0%,
              rgba(232, 220, 200, 0.18) 12%,
              rgba(255, 255, 255, 0.0) 22%,
              rgba(232, 220, 200, 0.0) 28%,
              rgba(255, 248, 235, 0.16) 38%,
              rgba(255, 255, 255, 0.0) 48%,
              rgba(232, 220, 200, 0.14) 58%,
              rgba(255, 255, 255, 0.0) 68%,
              rgba(232, 220, 200, 0.08) 78%,
              rgba(255, 255, 255, 0.0) 90%,
              transparent 100%
            )
          `,
          filter: "blur(32px)",
          transformOrigin: "top left",
        }}
      />

      {/* 4. Second Subtle Cross-Ray for Cinematic Depth */}
      <motion.div
        animate={{
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -top-20 left-10 w-[120%] h-[120%]"
        style={{
          background: `
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.0) 0%,
              rgba(232, 220, 200, 0.10) 20%,
              rgba(255, 255, 255, 0.0) 35%,
              rgba(232, 220, 200, 0.12) 52%,
              rgba(255, 255, 255, 0.0) 65%,
              transparent 100%
            )
          `,
          filter: "blur(48px)",
        }}
      />

      {/* 5. Center Glow directly behind "VINAY" & Heading */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232, 220, 200, 0.12) 0%, rgba(232, 220, 200, 0.04) 50%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />

      {/* 6. Soft bottom shadow gradient to seamlessly blend into #0a0a0a */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.8) 70%, #0a0a0a 100%)",
        }}
      />
    </div>
  );
}
