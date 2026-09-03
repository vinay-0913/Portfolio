"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

function AnimatedWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(progress, range, ["#52525b", "#e8dcc8"]);
  const opacity = useTransform(progress, range, [0.4, 1]);

  return (
    <motion.span
      style={{ color, opacity }}
      className="inline-block mr-[0.28em] transition-colors duration-75"
    >
      {word}
    </motion.span>
  );
}

function AnimatedParagraph({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.55"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-[20px] leading-[1.8] max-w-xl mb-14 font-normal flex flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + 1.5 / words.length, 1);
        return (
          <AnimatedWord
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

export default function HeroSection() {
  const router = useRouter();

  const handleNavigation = () => {
    setTimeout(() => {
      router.push("/about");
    }, 600);
  };

  return (
    <section id="about" className="relative bg-[#0a0a0a] text-white py-28 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#e8dcc8]/30 bg-[#e8dcc8]/5 text-[#e8dcc8] text-[11px] font-semibold tracking-[0.2em] uppercase">
            Engineering & Dev // About
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20 items-start">
          {/* LEFT COLUMN — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Statement */}
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold leading-[1.15] tracking-tight mb-10">
              I am Vinay Ratnakar,{" "}
              <span className={`${playfair.className} italic font-normal text-[#e8dcc8]`}>
                an aspiring Software Engineer.
              </span>{" "} <br />
              I love building scalable web apps and tools that make ideas come alive.
            </h2>

            {/* Description Paragraph with Scroll-driven color reveal */}
            <AnimatedParagraph
              text="Curiosity. I enjoy solving real world problems, breaking concepts down, trying bold ideas, and pushing boundaries with code. Whether it's a full-stack platform, an AI-powered tool, or a fresh design system — if it's interesting, I'm jumping in. Graduate in B.Tech Computer Science while actively developing products."
            />

            {/* Metadata Row */}
            <div className="flex flex-wrap gap-x-16 gap-y-6">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-600 mb-1.5">
                  Institution
                </p>
                <p className="text-zinc-300 text-sm font-medium">
                  BIT, Durg
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-600 mb-1.5">
                  Focus Areas
                </p>
                <p className="text-zinc-300 text-sm font-medium">
                  Full Stack, AI/ML, Web Dev
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-600 mb-1.5">
                  Location
                </p>
                <p className="text-zinc-300 text-sm font-medium">
                  Raipur, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="bg-[#141414] rounded-2xl sm:rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/60">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-600 font-mono">
                  Profile.jpg
                </span>
                <span className="text-[10px] font-mono text-zinc-700">
                  #TTM_SYS
                </span>
              </div>

              {/* Photo */}
              <div className="relative w-full aspect-[4/4.5] bg-zinc-900">
                <Image
                  src="/MyPhotograh.jpeg"
                  alt="Vinay Ratnakar"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
                {/* Warm ambient glow overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10, 10, 10, 0.7) 0%, transparent 40%)",
                  }}
                />
              </div>

              {/* Card Footer */}
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Vinay Ratnakar
                  </h4>
                  <p className="text-zinc-600 text-[10px] tracking-[0.15em] uppercase font-semibold">
                    Builder // Developer
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 tracking-wide">
                  2026_SYS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}