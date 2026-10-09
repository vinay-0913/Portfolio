"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";


export default function ProjectHero() {
  return (
    <main className="relative w-full min-h-screen bg-white text-zinc-900 overflow-hidden">

      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 blur-3xl rounded-full pointer-events-none" />

      <Navbar />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[80px] md:text-[180px] font-extrabold tracking-[-0.03em] text-zinc-900"
        >
          MY WORKS
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xs md:text-sm tracking-[0.3em] text-zinc-400 uppercase"
        >
          CRAFTING DIGITAL EXPERIENCES
        </motion.p>

        {/* ITALIC TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-2xl md:text-5xl italic text-zinc-500 font-light tracking-wide"
          style={{ fontFamily: "serif" }}
        >
          with passion &amp; code.
        </motion.p>
      </div>

      {/* ================= FADE TO NEXT ================= */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
       </main>
  );
}