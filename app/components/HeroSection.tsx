"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative bg-white py-20 sm:py-24 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16 h-px bg-zinc-100" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            About
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Statement */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.18] tracking-[-0.01em] text-zinc-900 mb-6">
              I am Vinay Ratnakar,{" "}
              <br className="hidden sm:block" />
              <span
                className={`${playfair.className} italic font-normal text-zinc-500`}
              >
                an aspiring Software Engineer.
              </span>
            </h2>

            {/* Description Paragraphs */}
            <p className="text-[13.5px] sm:text-[14px] text-zinc-400 leading-[1.75] max-w-[520px] mb-4">
              Curiosity drives me. I enjoy solving real world problems,
              breaking concepts down, and turning ideas into working
              products. Whether it&apos;s a full stack platform, an AI-powered
              tool, or a clean user interface — if it&apos;s interesting, I&apos;m all in.
            </p>
            <p className="text-[13.5px] sm:text-[14px] text-zinc-400 leading-[1.75] max-w-[520px] mb-10">
              I recently completed my B.Tech in Computer Science and
              Engineering from BIT Durg, and I&apos;m actively looking for
              opportunities to build, learn and contribute.
            </p>

            {/* Metadata Row */}
            <div className="flex flex-wrap gap-x-12 gap-y-5">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-zinc-500 text-[13px]">🎓</span>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400">
                    Education
                  </p>
                </div>
                <p className="text-zinc-800 text-[13px] font-semibold">
                  B.Tech, CSE
                </p>
                <p className="text-zinc-400 text-[12px]">BIT, Durg</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-zinc-500 text-[13px]">📍</span>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400">
                    Location
                  </p>
                </div>
                <p className="text-zinc-800 text-[13px] font-semibold">
                  Raipur, India
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-zinc-500 text-[13px]">💻</span>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400">
                    Focus Areas
                  </p>
                </div>
                <p className="text-zinc-800 text-[13px] font-semibold">
                  Web Dev, AI/ML
                </p>
                <p className="text-zinc-400 text-[12px]">Product Building</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex items-start pt-2"
          >
            <div className="relative bg-white rounded-2xl border border-zinc-200/80 p-8 shadow-sm w-full max-w-[380px]">
              {/* Quote icon */}
              <div className="text-4xl text-zinc-800 mb-4 leading-none font-serif select-none">
                &ldquo;&ldquo;
              </div>
              <p
                className={`${playfair.className} italic text-[17px] text-zinc-700 leading-[1.6] mb-6 font-normal`}
              >
                I believe great software solves real problems and makes life a
                little easier for people.
              </p>
              {/* Divider line */}
              <div className="w-12 h-[2px] bg-zinc-300 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}