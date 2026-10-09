"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import Navbar from "@/app/components/Navbar";
import HeroSection2 from "@/app/components/HeroSection2";
import {
  FaReact,
  FaNodeJs,
  FaGoogle,
  FaLock,
  FaRupeeSign,
  FaShieldAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiScikitlearn,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiSupabase,
} from "react-icons/si";
import { AiOutlineBarChart } from "react-icons/ai";

// Tech icon mapper helper
const getTechIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "next.js":
      return <SiNextdotjs />;
    case "react":
    case "react.js":
      return <FaReact className="text-blue-500" />;
    case "typescript":
      return <SiTypescript className="text-blue-600" />;
    case "node.js":
      return <FaNodeJs className="text-green-600" />;
    case "express.js":
      return <SiExpress className="text-zinc-500" />;
    case "tailwind css":
      return <SiTailwindcss className="text-cyan-500" />;
    case "mongodb":
      return <SiMongodb className="text-green-500" />;
    case "supabase":
      return <SiSupabase className="text-emerald-500" />;
    case "razorpay":
      return <FaRupeeSign className="text-blue-500" />;
    case "google oauth":
    case "gemini llm":
      return <FaGoogle className="text-amber-500" />;
    case "jwt":
      return <FaLock className="text-amber-500" />;
    case "python":
      return <FaPython className="text-yellow-500" />;
    case "flask":
      return <SiFlask className="text-zinc-500" />;
    case "scikit-learn":
      return <SiScikitlearn className="text-orange-500" />;
    case "jsearch api":
      return <AiOutlineBarChart className="text-purple-500" />;
    case "clerk":
      return <FaShieldAlt className="text-blue-600" />;
    default:
      return null;
  }
};

export default function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();

  // Find project by slug
  const decodedSlug = decodeURIComponent(resolvedParams.slug || "")
    .toLowerCase()
    .replace(/\.com$/, "");
  const cleanParam = decodedSlug.replace(/[^a-z0-9]/g, "");
  const project = projects.find(
    (p) =>
      p.slug.toLowerCase() === decodedSlug ||
      p.slug.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanParam ||
      p.title.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanParam
  );

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.id !== project.id);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const heroScale = useTransform(smoothY, [0, 500], [1, 0.95]);
  const heroOpacity = useTransform(smoothY, [0, 450], [1, 0.7]);
  const heroY = useTransform(smoothY, [0, 500], [0, 40]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedParams.slug]);

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Showcase Frame */}
      <div className="sticky top-2 sm:top-12 md:top-16 h-[38vh] sm:h-[65vh] md:h-[80vh] w-full flex items-center justify-center px-4 sm:px-8 md:px-12 pt-2 sm:pt-8 md:pt-10 z-0 pointer-events-none">
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY,
            transformOrigin: "center top",
          }}
          className="relative w-full max-w-6xl aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.5] rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden shadow-xl shadow-zinc-300/30 border border-zinc-200 bg-zinc-100 will-change-transform pointer-events-auto"
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>

      {/* Main Content Card */}
      <section className="relative z-10 w-full mt-[-12vh] sm:mt-[-14vh] md:mt-[-18vh]">
        <div className="w-full bg-white rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] rounded-b-none px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 shadow-[0_-20px_60px_rgba(0,0,0,0.08)] border-t border-zinc-200 min-h-screen">
          <div className="max-w-7xl mx-auto relative">
            {/* Close / Back button */}
            <button
              onClick={() => router.push("/#featured-works")}
              className="absolute top-0 right-0 w-11 h-11 rounded-full bg-zinc-100 shadow-sm border border-zinc-200 text-zinc-500 flex items-center justify-center hover:bg-zinc-200 hover:border-zinc-300 hover:text-zinc-900 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-base z-20"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Project Title */}
            <div className="pr-14 mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight">
                {project.title}
              </h1>
            </div>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[160px_1fr] gap-y-7 md:gap-y-9 gap-x-10 lg:gap-x-16 mb-16 text-sm items-start">
              {/* Overview */}
              <div className="text-zinc-400 font-medium tracking-wide">
                Overview
              </div>
              <div className="space-y-4 text-zinc-500 text-[15px] sm:text-base md:text-[17px] leading-[1.85] max-w-5xl">
                {project.overviewParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Categories */}
              <div className="text-zinc-400 font-normal tracking-wide text-sm">
                Categories
              </div>
              <div className="text-zinc-700 font-medium text-sm sm:text-[15px] flex items-center gap-2 flex-wrap">
                {project.categories.map((cat, idx) => (
                  <span key={cat} className="flex items-center gap-2">
                    <span>{cat}</span>
                    {idx < project.categories.length - 1 && (
                      <span className="text-zinc-300">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="text-zinc-400 font-normal tracking-wide text-sm">
                Date
              </div>
              <div className="text-zinc-700 font-medium text-sm sm:text-[15px]">
                {project.date}
              </div>

              {/* Tech Stack */}
              <div className="text-zinc-400 font-normal tracking-wide text-sm">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techNames.map((techName) => {
                  const icon = getTechIcon(techName);
                  return (
                    <span
                      key={techName}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 text-xs font-medium text-zinc-700 border border-zinc-200"
                    >
                      {icon && <span className="text-sm">{icon}</span>}
                      {techName}
                    </span>
                  );
                })}
              </div>

              {/* Live Preview Button */}
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-[#2563eb] text-white text-[13px] sm:text-sm font-bold hover:bg-[#1d4ed8] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-blue-500/15"
                >
                  Live Preview <span className="text-sm">→</span>
                </a>
              </div>
              <div></div>
            </div>

            {/* Visual Gallery */}
            <div className="space-y-6 mb-16">
              {project.images.length >= 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm aspect-[16/10]">
                    <img
                      src={project.images[1] || project.images[0]}
                      alt={`${project.title} screenshot 2`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm aspect-[16/10]">
                    <img
                      src={project.images[2] || project.images[0]}
                      alt={`${project.title} screenshot 3`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}

              <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm aspect-[16/9]">
                <img
                  src={project.images[0]}
                  alt={`${project.title} full showcase`}
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>

            {/* More works section */}
            <div className="border-t border-zinc-200 pt-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-8">
                More{" "}
                <span className="text-zinc-500 italic font-normal">works</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.slice(0, 2).map((other) => (
                  <Link
                    key={other.id}
                    href={`/work/${other.slug}`}
                    className="group block bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/60 hover:border-zinc-300 transition-all duration-400 cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                      <img
                        src={other.images[0]}
                        alt={other.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {other.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 text-zinc-500 border border-zinc-200/60"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#2563eb] transition-colors duration-200">
                        {other.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <HeroSection2 />
    </main>
  );
}
