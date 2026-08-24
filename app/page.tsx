"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import TopLeft from "./components/TopLeft";
import Showcase from "./Showcase";
import SkillsSection from "./components/SkillsSection";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import HeroLighting from "./components/HeroLighting";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

export default function Home() {
  const text = "VINAY";
  return (
    <>
      <main id="home" className="relative min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 overflow-hidden">

        {/* Cinematic Atmospheric Light Rays & Glow */}
        <HeroLighting />

        {/* TOP LEFT */}
        <TopLeft />

        {/* NAVBAR */}
        <Navbar />

        {/* HERO CONTENT */}
        <div className="max-w-4xl text-center z-10">

          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e8dcc8]/20 bg-[#e8dcc8]/5 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(232,220,200,0.08)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8dcc8] animate-pulse" />
            <span className="text-[11px] tracking-[0.25em] text-[#e8dcc8] uppercase font-semibold">
              Creative Developer
            </span>
          </motion.div>

          {/* NAME */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[90px] md:text-[150px] font-extrabold tracking-tight leading-none text-center bg-gradient-to-b from-white via-[#faf8f5] to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_12px_35px_rgba(232,220,200,0.18)]"
            >
              {text}
            </motion.h1>
          </div>

          {/* TAGLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 text-3xl md:text-5xl font-semibold"
          >
            Crafting impactful{" "}
            <span className={`${playfair.className} text-[#e8dcc8]`}>
              Products
            </span>{" "}
            that matter
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-zinc-500 max-w-2xl mx-auto text-sm sm:text-base"
          >
            I design and develop modern web applications that deliver seamless,
            impactful user experiences.
          </motion.p>

        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute bottom-6 left-6 z-50">
          <div className="flex items-start gap-2">
            <span className="text-lg">📍</span>

            <div className="flex flex-col leading-tight">
              <span className="text-zinc-400 text-[12px] uppercase tracking-[0.15em]">
                Based in Raipur,
              </span>
              <span className="text-zinc-600 text-[11px] uppercase tracking-[0.15em]">
                India
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute bottom-6 right-6 z-50 text-center">
          <div className="flex justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#e8dcc8]">
              <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="leading-tight">
            <p className="text-zinc-400 text-[12px] uppercase tracking-[0.15em]">
              FULL STACK DEV,
            </p>
            <p className="text-zinc-600 text-[11px] uppercase tracking-[0.15em]">
              & DESIGNER
            </p>
          </div>
        </div>

      </main>

      {/* ================= ABOUT + REMAINING SECTIONS ================= */}
      <div className="relative bg-[#0a0a0a]">
        <HeroSection />
        <Showcase />
        <SkillsSection />
        <HeroSection2 />
      </div>
    </>
  );
}