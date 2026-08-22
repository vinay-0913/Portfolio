"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  // 🔥 rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 delayed navigation (for transition)
  const handleNavigation = () => {
    setTimeout(() => {
      router.push("/about");
    }, 600);
  };

  return (
    <section className="bg-[#f5f3ef] text-zinc-900 py-28 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-20 overflow-hidden max-w-7xl mx-auto">
      
      {/* LEFT */}
      <div className="max-w-2xl">

        <p className="text-xs tracking-[0.3em] font-semibold text-zinc-400 mb-6 uppercase">
          A QUICK GLANCE
        </p>

        <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.1] text-zinc-900">
          <span className="block">
            Building the bridge between
          </span>

          <span className="block">
            ideas and{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-800 text-transparent bg-clip-text">
              experiences
            </span>
          </span>
        </h1>

        <p className="mt-8 text-zinc-600 leading-relaxed max-w-lg text-[15px]">
          I'm Vinay Ratnakar, an engineering-driven developer who turns complex
          technical challenges into high-speed web products. I manage the entire
          stack with a focus on clean, reusable code and seamless performance.
          I excel in Next.js and full-stack architecture, always delivering
          modern solutions that actually solve problems for every user.
          <br /><br />
          My code is built to last, helping your startup reach the next level!
        </p>

        <p className="mt-4 text-zinc-500 max-w-lg text-[14px]">
          Building scalable solutions and crafting modern digital experiences.
        </p>

        {/* SOCIAL */}
        <div className="flex items-center gap-5 mt-8 text-zinc-500">

          <a
            href="https://www.linkedin.com/in/vinay-ratnakar-650a05264/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition text-lg"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/vinay-0913/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition text-lg"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition text-lg"
          >
            <FaTwitter />
          </a>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleNavigation}
          className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-zinc-900 group cursor-pointer"
        >
          Dive in deeper

          <span className="w-8 h-8 flex items-center justify-center border border-zinc-300 rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white">
            →
          </span>
        </button>

      </div>

      {/* RIGHT (IMAGE STACK) */}
      <div className="relative w-[340px] h-[420px] flex items-center justify-center overflow-hidden">

        {images.map((img, i) => {
          const position = (i - index + images.length) % images.length;

          return (
            <motion.div
              key={i}
              className="absolute w-full h-full rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/80"
              animate={{
                x: position === 0 ? 0 : position === 1 ? 70 : -70,
                scale: position === 0 ? 1 : 0.9,
                rotate: position === 0 ? 0 : position === 1 ? 6 : -6,
                zIndex: position === 0 ? 3 : position === 1 ? 2 : 1,
                opacity: position === 2 ? 0.5 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={img}
                alt="Highlight"
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}