"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaReact, FaNodeJs, FaGoogle, FaLock, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiZod, SiExpress } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { AiOutlineBarChart } from "react-icons/ai";
import { TbBrandRadixUi } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { Playfair_Display } from "next/font/google";
import { SiTypescript, SiSupabase, SiMongodb } from "react-icons/si";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

// ─── DATA ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Instaqrcode.com",
    categories: ["SaaS", "Full Stack"],
    link: "https://www.instaqrcode.com/",
    desc: "InstaQRCode is a full-stack QR Code Generator SaaS platform that enables users to create, customize, and manage dynamic QR codes with real-time scan analytics. The platform features secure authentication with Google OAuth, subscription management through Razorpay, and an interactive dashboard for tracking QR code performance. Built with Next.js, React, TypeScript, Node.js, and MongoDB, InstaQRCode helps businesses and individuals create branded QR experiences while gaining valuable insights from scan data.",
    gradient: "from-red-500 to-red-700",
    images: [
      "/projects/qrcode2.png",
      "/projects/qrcode3.png",
      "/projects/qrcode1.png",
    ],
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Razorpay", icon: <FaRupeeSign className="text-blue-400" /> },
      { name: "Google OAuth", icon: <FaGoogle className="text-red-400" /> },
      { name: "JWT", icon: <FaLock className="text-yellow-400" /> },
    ],
  },
  {
    id: 2,
    title: "Interview Mentor AI",
    categories: ["AI / ML", "Web App"],
    link: "https://www.interviewmentor.in/",
    desc: "Interview Mentor AI is an AI-powered mock interview platform that helps users prepare for Technical, HR, and Behavioral interviews through personalized practice sessions. Using advanced LLM technology, it generates adaptive questions, provides real-time feedback, and tailors interview experiences based on the user's responses. Built with React.js, Node.js, Express.js, and Gemini LLM, the platform enables candidates to improve their communication, problem-solving, and interview skills in a realistic interview environment.",
    gradient: "from-blue-500 to-blue-700",
    images: [
      "/projects/AI.png",
      "/projects/AI2.png",
      "/projects/AI3.png",
    ],
    tech: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Gemini LLM", icon: <FaGoogle className="text-yellow-400" /> },
    ],
  },
  {
    id: 3,
    title: "Easy Jobs",
    categories: ["Full Stack", "Job Platform"],
    link: "https://easy-jobs-five.vercel.app/",
    desc: "Easy Jobs is a job search and application management platform designed to simplify the job-hunting process. It aggregates job listings from multiple sources, helping users discover relevant opportunities quickly and efficiently. The platform includes a smart job-matching system, application tracking dashboard, and automated job data management using Cron Jobs, reducing API costs while ensuring up-to-date listings. Built with React, Node.js, Express.js, MongoDB, Clerk Authentication, and JSearch API, Easy Jobs provides a seamless experience for finding, tracking, and managing career opportunities.",
    gradient: "from-yellow-500 to-orange-500",
    images: [
      "/projects/cvforge1.png",
      "/projects/cvforge2.png",
      "/projects/cvforge3.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JSearch API", icon: <AiOutlineBarChart className="text-purple-400" /> },
      { name: "Clerk", icon: <FaShieldAlt className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
  {
    id: 4,
    title: "News Now",
    categories: ["AI / ML", "News Platform"],
    link: "https://news-now-nine.vercel.app/",
    desc: "News Now is an intelligent news aggregation platform that delivers real-time news from multiple sources in a personalized and user-friendly interface. The platform enables category-based browsing, country-specific filtering, and AI-powered article recommendations to help users discover relevant content effortlessly. By leveraging NLP techniques such as tokenization, stopword removal, and lemmatization, along with TF-IDF and cosine similarity algorithms, News Now analyzes article content and recommends related news stories based on user interests. Built with Python, Flask, Scikit-learn, NLTK, and NewsData.io API, News Now provides a smarter and more personalized news-reading experience.",
    gradient: "from-yellow-500 to-orange-500",
    images: [
      "/projects/cvforge1.png",
      "/projects/cvforge2.png",
      "/projects/cvforge3.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JSearch API", icon: <AiOutlineBarChart className="text-purple-400" /> },
      { name: "Clerk", icon: <FaShieldAlt className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
];

// ─── PROJECT CARD ─────────────────────────────────────
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) {
  // Alternate card heights for visual variety
  const isLarge = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
        isLarge ? "row-span-2" : ""
      }`}
      style={{ minHeight: isLarge ? "480px" : "320px" }}
    >
      {/* Image */}
      <img
        src={project.images[0]}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white/90 border border-white/10"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </motion.div>
  );
}

// ─── DETAIL MODAL ─────────────────────────────────────
function ProjectModal({
  project,
  onClose,
  onSelectProject,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
  onSelectProject: (id: number) => void;
}) {
  const otherProjects = projects.filter((p) => p.id !== project.id);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-start justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl mx-4 my-8 max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition-colors text-lg"
        >
          ✕
        </button>

        {/* Hero image */}
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-t-3xl">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info section */}
        <div className="px-8 md:px-12 py-10">
          {/* Title */}
          <h2
            className={`${playfair.className} text-3xl md:text-4xl font-semibold text-gray-900 mb-6`}
          >
            {project.title}
          </h2>

          {/* Meta grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mb-10">
            {/* Left: labels */}
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Overview
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Links
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 underline underline-offset-2 hover:text-black transition"
                >
                  Live Site ↗
                </a>
              </div>
            </div>

            {/* Right: description */}
            <div>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                {project.desc}
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-xs text-gray-700 border border-gray-200"
                >
                  <span className="text-sm">{t.icon}</span>
                  {t.name}
                </div>
              ))}
            </div>
          </div>

          {/* Live Preview button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors mb-12"
          >
            Live Preview ↗
          </a>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden ${
                  i === project.images.length - 1 && project.images.length % 2 !== 0
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* More works */}
          <div className="border-t border-gray-200 pt-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              More works
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProject(p.id)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer h-[180px]"
                >
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium">
                      {p.title}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {p.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white/80"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────
export default function Showcase() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId) || null;

  return (
    <>
      <section className="relative bg-[#f5f3ef] py-20 px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-14 max-w-7xl mx-auto">
          <h2
            className={`${playfair.className} text-4xl md:text-5xl text-gray-900`}
            style={{ fontStyle: "italic" }}
          >
            Featured works
          </h2>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            All Works <span>→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto auto-rows-[320px]">
          {projects.map((project, index) => {
            // Make first and last cards taller
            const isTall = index === 0 || index === 3;
            return (
              <div
                key={project.id}
                className={isTall ? "md:row-span-2" : ""}
                style={isTall ? { gridRow: "span 2" } : {}}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => setSelectedId(project.id)}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile "All Works" link */}
        <div className="md:hidden flex justify-center mt-10">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            All Works <span>→</span>
          </Link>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedId(null)}
            onSelectProject={(id) => setSelectedId(id)}
          />
        )}
      </AnimatePresence>
    </>
  );
}