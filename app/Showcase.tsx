"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { projects } from "@/app/data/projects";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

// Custom metadata mapping for pixel-perfect match with reference design
const featuredProjectsData = [
  {
    slug: "instaqrcode",
    title: "Instagram QR Code Generator",
    tags: ["Web App", "Full Stack"],
    desc: "Create custom QR codes with colors, shapes and logos. Download high-res for social media or print.",
    image: "/projects/qrcode1.png",
  },
  {
    slug: "jobs-hive",
    title: "Jobs Hive",
    tags: ["Web Platform", "Data Engineering"],
    desc: "Aggregates tech job listings from 30+ ATS platforms with real-time search and filters.",
    image: "/projects/Job1.png",
  },
  {
    slug: "interview-mentor-ai",
    title: "Interview Mentor AI",
    tags: ["AI / NLP", "Web App"],
    desc: "AI powered mock interviews with personalized feedback to help you prepare better.",
    image: "/projects/AI3.png",
  },
  {
    slug: "news-now",
    title: "News Now",
    tags: ["Full Stack", "Machine Learning"],
    desc: "News aggregation platform with personalized recommendations using TF-IDF and NLP.",
    image: "/projects/News.png",
  },
];

export default function Showcase() {
  return (
    <section
      id="featured-works"
      className="relative bg-white py-20 sm:py-24 px-6 md:px-10 lg:px-16"
    >
      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16 h-px bg-zinc-100" />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-2.5">
              Featured Work
            </p>
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-[-0.01em] text-zinc-900">
              Some things{" "}
              <span
                className={`${playfair.className} italic font-normal text-zinc-500`}
              >
                I&apos;ve built
              </span>
            </h2>
          </div>
          <Link
            href="/works"
            className="hidden sm:flex items-center gap-1.5 text-[12px] font-medium text-zinc-400 hover:text-zinc-700 transition-colors duration-200"
          >
            View all projects
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
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {featuredProjectsData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block bg-white rounded-2xl border border-zinc-200/80 overflow-hidden hover:shadow-lg hover:shadow-zinc-200/40 hover:border-zinc-300 transition-all duration-300 cursor-pointer"
              >
                {/* Image container */}
                <div className="relative w-full aspect-[16/10] bg-zinc-50 overflow-hidden border-b border-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Tags row */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-zinc-100 text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Arrow Button */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-zinc-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900 group-hover:bg-zinc-50 transition-all shrink-0">
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
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-zinc-400 leading-[1.6]">
                    {project.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View all" link */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}