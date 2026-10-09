"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Showcase from "./Showcase";
import SkillsSection from "./components/SkillsSection";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

export default function Home() {
  const scrollToWork = () => {
    const el = document.getElementById("featured-works");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ======= HERO SECTION ======= */}
      <main
        id="home"
        className="relative min-h-[calc(100vh-64px)] bg-white flex items-center pt-16 overflow-hidden"
      >
        {/* Subtle decorative blobs */}
        <div className="absolute top-20 right-[-60px] w-[420px] h-[420px] rounded-full bg-blue-50/70 blur-[80px] blob-animate pointer-events-none" />
        <div className="absolute bottom-10 left-[-80px] w-[320px] h-[320px] rounded-full bg-indigo-50/50 blur-[80px] blob-animate-delayed pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
            {/* LEFT COLUMN — Text */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-500 text-[10px] font-semibold tracking-[0.18em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  A Creative Developer
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[40px] sm:text-[50px] md:text-[56px] lg:text-[62px] font-extrabold leading-[1.06] tracking-[-0.02em] text-zinc-900 mb-1"
              >
                Hi, I&apos;m{" "}
                <span className="text-[#2563eb]">Vinay</span>{" "}
                <span className="inline-block">👋</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-[24px] sm:text-[30px] md:text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] text-zinc-800 mb-4"
              >
                Crafting impactful{" "}
                <span
                  className={`${playfair.className} italic font-normal`}
                >
                  products
                </span>{" "}
                that matter.
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-[13.5px] sm:text-[14.5px] text-zinc-400 max-w-[440px] leading-[1.7] mb-7"
              >
                I design and develop modern web applications that deliver
                seamless, meaningful and human-centered experiences.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 mb-10"
              >
                <button
                  onClick={scrollToWork}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white text-[13px] font-semibold hover:bg-zinc-800 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-zinc-900/10 cursor-pointer"
                >
                  View My Work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <a
                  href="https://drive.google.com/file/d/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-200 text-zinc-600 text-[13px] font-medium hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  Download Resume
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-10 sm:gap-14"
              >
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-none">
                    10+
                  </p>
                  <p className="text-[11px] text-zinc-400 font-medium mt-1">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-none">
                    Live
                  </p>
                  <p className="text-[11px] text-zinc-400 font-medium mt-1">
                    Deployed
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-none">
                    Open to
                  </p>
                  <p className="text-[11px] text-zinc-400 font-medium mt-1">
                    Opportunities
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN — Photo + Annotations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Profile Photo Card */}
              <div className="relative w-full max-w-[360px] ml-auto">
                <div className="relative rounded-[28px] overflow-hidden shadow-xl shadow-zinc-200/50 border border-zinc-200/60">
                  <Image
                    src="/MyPhotograh.jpeg"
                    alt="Vinay Ratnakar"
                    width={360}
                    height={440}
                    className="object-cover object-top w-full aspect-[4/4.8]"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="absolute -bottom-3 -right-2 px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200/90 shadow-lg flex items-center gap-3"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-medium text-zinc-400">
                        Currently
                      </span>
                    </div>
                    <span className="text-[12px] font-bold text-zinc-900 block leading-tight">
                      Open to Work
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
                    <svg
                      width="11"
                      height="11"
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
                  </div>
                </motion.div>
              </div>

              {/* Handwritten Annotations */}
              <div
                className="absolute -top-3 left-[15%] text-[13.5px] rotate-[-5deg]"
                style={{ fontFamily: "var(--font-dancing), cursive" }}
              >
                <span className="text-zinc-400/80 italic leading-tight">
                  Build full-stack
                  <br />
                  products &amp; tools ✨
                </span>
              </div>

              <div
                className="absolute top-[44%] left-[-45px] text-[13.5px] rotate-[3deg]"
                style={{ fontFamily: "var(--font-dancing), cursive" }}
              >
                <span className="text-zinc-400/80 italic leading-tight">
                  Creative
                  <br />
                  Engineer 🚀
                </span>
              </div>

              <div
                className="absolute -bottom-9 right-[-10px] text-[13px] rotate-[-2deg]"
                style={{ fontFamily: "var(--font-dancing), cursive" }}
              >
                <span className="text-zinc-400/80 italic leading-tight">
                  Some curiosity,
                  <br />
                  Bigger dreams 💡
                </span>
              </div>

              {/* Decorative curved arrow pointing from annotation to photo */}
              <svg
                className="absolute top-3 left-[48%] w-8 h-8 text-zinc-300/60 rotate-[35deg]"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 10 C15 10, 25 15, 30 25" strokeLinecap="round" />
                <path d="M25 25 L30 25 L30 20" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ================= REMAINING SECTIONS ================= */}
      <div className="relative bg-white">
        <HeroSection />
        <Showcase />
        <SkillsSection />
        <HeroSection2 />
      </div>
    </>
  );
}