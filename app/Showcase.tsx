"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

// Wave color-shift char animation (Framer Motion equivalent of GSAP SplitText)
const charVariants = {
  hidden: (i: number) => ({
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
      ease: [0.39, 0.575, 0.565, 1], // sine.out
    },
  }),
};

function WaveText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <span ref={ref} className={className} style={{ ...style, display: "inline", overflow: "hidden" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          initial="hidden"
          animate={controls}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Color block accents per project — matches DESIGN.md palette ── */
const featuredProjectsData = [
  {
    slug: "instaqrcode",
    title: "Instagram QR Code Generator",
    tags: ["Web App", "Full Stack"],
    desc: "Create custom QR codes with colors, shapes and logos. Download high-res for social media or print.",
    image: "/projects/qrcode1.png",
    accent: "var(--block-coral)",
  },
  {
    slug: "jobs-hive",
    title: "Jobs Hive",
    tags: ["Web Platform", "Data Engineering"],
    desc: "Aggregates tech job listings from 30+ ATS platforms with real-time search and filters.",
    image: "/projects/Job1.png",
    accent: "var(--block-lime)",
  },
  {
    slug: "interview-mentor-ai",
    title: "Interview Mentor AI",
    tags: ["AI / NLP", "Web App"],
    desc: "AI powered mock interviews with personalized feedback to help you prepare better.",
    image: "/projects/AI3.png",
    accent: "var(--block-lilac)",
  },
  {
    slug: "news-now",
    title: "News Now",
    tags: ["Full Stack", "Machine Learning"],
    desc: "News aggregation platform with personalized recommendations using TF-IDF and NLP.",
    image: "/projects/News.png",
    accent: "var(--block-mint)",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Showcase() {
  return (
    <section
      id="featured-works"
      className="relative"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)", backgroundColor: "#fafaf8" }}
    >
      {/* Hairline divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16"
        style={{ height: "var(--space-hair)", background: "var(--color-hairline-soft)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.6px",
                textTransform: "uppercase" as const,
                color: "var(--color-ink)",
                opacity: 0.4,
                marginBottom: "12px",
              }}
            >
              Featured Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 340,
                letterSpacing: "-0.96px",
                lineHeight: 1.1,
                color: "var(--color-ink)",
              }}
            >
              Projects
              <WaveText
                text=" I've built"
                className={`${playfair.className} italic`}
                style={{ fontWeight: 400 }}
              />
            </motion.h2>
          </div>

          {/* View all — pill link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/works"
              className="group hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-hairline)] hover:border-black/30 transition-all duration-300"
              style={{
                fontSize: "14px",
                fontWeight: 480,
                letterSpacing: "-0.10px",
                color: "var(--color-ink)",
                backgroundColor: "#ffffff",
              }}
            >
              View all projects
              <span className="inline-flex transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
        >
          {featuredProjectsData.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block overflow-hidden transition-all duration-400 cursor-pointer"
                style={{ borderRadius: "var(--rounded-lg)" }}
              >
                {/* Image container with color-block accent background */}
                <div
                  className="relative w-full aspect-[16/10] overflow-hidden"
                  style={{
                    background: project.accent,
                    borderRadius: "var(--rounded-lg) var(--rounded-lg) 0 0",
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Content — on canvas surface */}
                <div
                  className="p-6 border border-t-0 border-[var(--color-hairline)]"
                  style={{
                    background: "var(--color-canvas)",
                    borderRadius: "0 0 var(--rounded-lg) var(--rounded-lg)",
                  }}
                >
                  {/* Tags row — pill shaped per design */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[var(--color-ink)] rounded-full"
                        style={{
                          fontSize: "12px",
                          fontWeight: 480,
                          letterSpacing: "-0.10px",
                          background: "var(--color-surface-soft)",
                          borderRadius: "var(--rounded-pill)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Arrow Button */}
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <h3
                      className="group-hover:opacity-70 transition-opacity duration-300"
                      style={{
                        fontSize: "22px",
                        fontWeight: 540,
                        color: "var(--color-ink)",
                        lineHeight: 1.3,
                        letterSpacing: "-0.26px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -25 }}
                      className="w-9 h-9 rounded-full border border-[var(--color-hairline)] flex items-center justify-center text-[var(--color-ink)] group-hover:border-[var(--color-ink)] group-hover:bg-[var(--color-surface-soft)] transition-all duration-300 shrink-0"
                      style={{ opacity: 0.5 }}
                    >
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
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Description — body-sm */}
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 330,
                      lineHeight: 1.5,
                      letterSpacing: "-0.14px",
                      color: "var(--color-ink)",
                      opacity: 0.4,
                    }}
                  >
                    {project.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile "View all" link */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/works"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-hairline)] text-[var(--color-ink)] transition-all duration-300"
            style={{
              fontSize: "16px",
              fontWeight: 480,
              backgroundColor: "#ffffff",
            }}
          >
            View all projects
            <span className="inline-flex transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}