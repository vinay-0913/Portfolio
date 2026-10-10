"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Showcase from "./Showcase";
import SkillsSection from "./components/SkillsSection";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import { useRef } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

/* ── Micro-animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Home() {
  const scrollToWork = () => {
    const el = document.getElementById("featured-works");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ======= HERO SECTION ======= */}
      <main
        id="home"
        ref={heroRef}
        className="relative min-h-screen min-h-[100dvh] flex items-center overflow-hidden"
        style={{ paddingTop: 56, backgroundColor: "#fafaf8" }}
      >
        {/* Subtle decorative blobs — softer, using pastel tones */}
        <div className="absolute top-20 right-[-60px] w-[420px] h-[420px] rounded-full bg-[var(--block-lilac)]/20 blur-[100px] blob-animate pointer-events-none" />
        <div className="absolute bottom-10 left-[-80px] w-[320px] h-[320px] rounded-full bg-[var(--block-mint)]/20 blur-[100px] blob-animate-delayed pointer-events-none" />
        <div className="absolute top-[40%] left-[50%] w-[260px] h-[260px] rounded-full bg-[var(--block-cream)]/15 blur-[80px] blob-animate pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12 lg:py-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
            {/* LEFT COLUMN — Text */}
            <div>
              {/* Eyebrow — figmaMono style */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="mb-6"
              >
                <span
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-surface-soft)] text-[var(--color-ink)]"
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase" as const,
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--color-semantic-success)] pulse-dot" />
                  A Creative Developer
                </span>
              </motion.div>

              {/* Main Heading — display-xl style */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="mb-2"
                style={{
                  fontSize: "clamp(42px, 5.5vw, 86px)",
                  fontWeight: 340,
                  lineHeight: 1.0,
                  letterSpacing: "-1.72px",
                  color: "var(--color-ink)",
                }}
              >
                Hi, I&apos;m{" "}
                <span style={{ fontWeight: 540 }}>Vinay</span>{" "}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  👋
                </motion.span>
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="mb-5"
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 340,
                  lineHeight: 1.2,
                  letterSpacing: "-0.26px",
                  color: "var(--color-ink)",
                }}
              >
                Crafting impactful{" "}
                <span
                  className={`${playfair.className} italic`}
                  style={{ fontWeight: 400, opacity: 0.55 }}
                >
                  products
                </span>{" "}
                that matter.
              </motion.h2>

              {/* Description — body-lg */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="max-w-[480px] mb-8"
                style={{
                  fontSize: "20px",
                  fontWeight: 330,
                  lineHeight: 1.4,
                  letterSpacing: "-0.14px",
                  color: "var(--color-ink)",
                  opacity: 0.45,
                }}
              >
                I design and develop modern web applications that deliver
                seamless, meaningful and human-centered experiences.
              </motion.p>

              {/* CTA Buttons — pill shape per design system */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-wrap items-center gap-3 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 0.97 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={scrollToWork}
                  className="btn-primary"
                  style={{ fontSize: "16px" }}
                >
                  View My Work
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
                className="flex items-start gap-12 sm:gap-16"
              >
                {[
                  { value: "10+", label: "Projects" },
                  { value: "Live", label: "Deployed" },
                  { value: "Open to", label: "Opportunities" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p
                      style={{
                        fontSize: "26px",
                        fontWeight: 540,
                        lineHeight: 1,
                        letterSpacing: "-0.26px",
                        color: "var(--color-ink)",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-1.5"
                      style={{
                        fontFamily:
                          "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "12px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        textTransform: "uppercase" as const,
                        color: "var(--color-ink)",
                        opacity: 0.35,
                      }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT COLUMN — Photo + Annotations */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              {/* Profile Photo Card — rounded-xl per design */}
              <div className="relative w-full max-w-[380px] ml-auto">
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: "var(--rounded-xl)" }}
                >
                  <Image
                    src="/MyPhotograh.jpeg"
                    alt="Vinay Ratnakar"
                    width={380}
                    height={460}
                    className="object-cover object-top w-full aspect-[4/4.8]"
                    priority
                  />

                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Floating badge — color block accent */}
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-4 -right-3 px-4 py-3 bg-[var(--color-canvas)] border border-[var(--color-hairline)] flex items-center gap-3"
                  style={{ borderRadius: "var(--rounded-lg)" }}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-semantic-success)] pulse-dot" />
                      <span
                        style={{
                          fontFamily:
                            "var(--font-mono), 'JetBrains Mono', monospace",
                          fontSize: "10px",
                          fontWeight: 400,
                          letterSpacing: "0.6px",
                          textTransform: "uppercase" as const,
                          color: "var(--color-ink)",
                          opacity: 0.4,
                        }}
                      >
                        Currently
                      </span>
                    </div>
                    <span
                      className="block mt-0.5"
                      style={{
                        fontSize: "16px",
                        fontWeight: 540,
                        color: "var(--color-ink)",
                        lineHeight: 1.2,
                      }}
                    >
                      Open to Work
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -15 }}
                    className="btn-icon"
                    style={{ width: 32, height: 32 }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* Handwritten Annotations */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.45, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-3 left-[15%] text-[15px] rotate-[-5deg]"
                style={{ fontFamily: "var(--font-dancing), cursive" }}
              >
                <span className="italic leading-tight text-[var(--color-ink)]">
                  Build full-stack
                  <br />
                  products &amp; tools ✨
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.45, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute top-[44%] left-[-45px] text-[15px] rotate-[3deg]"
                style={{ fontFamily: "var(--font-dancing), cursive" }}
              >
                <span className="italic leading-tight text-[var(--color-ink)]">
                  Creative
                  <br />
                  Engineer 🚀
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.45, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-9 right-[-10px] text-[14px] rotate-[-2deg]"
                style={{ fontFamily: "var(--font-dancing), cursive" }}
              >
                <span className="italic leading-tight text-[var(--color-ink)]">
                  Some curiosity,
                  <br />
                  Bigger dreams 💡
                </span>
              </motion.div>

              {/* Decorative curved arrow */}
              <motion.svg
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.25, pathLength: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="absolute top-3 left-[48%] w-8 h-8 text-[var(--color-ink)] rotate-[35deg]"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 10 C15 10, 25 15, 30 25" strokeLinecap="round" />
                <path d="M25 25 L30 25 L30 20" strokeLinecap="round" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ================= REMAINING SECTIONS ================= */}
      <div className="relative bg-[var(--color-canvas)]">
        <HeroSection />
        <Showcase />
        <SkillsSection />
        <HeroSection2 />
      </div>
    </>
  );
}