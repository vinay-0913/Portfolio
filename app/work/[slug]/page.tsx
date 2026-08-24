"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import Navbar from "@/app/components/Navbar";
import TopLeft from "@/app/components/TopLeft";
import HeroSection2 from "@/app/components/HeroSection2";
import { FaReact, FaNodeJs, FaGoogle, FaLock, FaRupeeSign, FaShieldAlt, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlask, SiScikitlearn, SiTypescript, SiMongodb, SiExpress } from "react-icons/si";
import { AiOutlineBarChart } from "react-icons/ai";

// Tech icon mapper helper
const getTechIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "next.js":
      return <SiNextdotjs />;
    case "react":
    case "react.js":
      return <FaReact className="text-blue-400" />;
    case "typescript":
      return <SiTypescript className="text-blue-500" />;
    case "node.js":
      return <FaNodeJs className="text-green-500" />;
    case "express.js":
      return <SiExpress className="text-gray-400" />;
    case "tailwind css":
      return <SiTailwindcss className="text-cyan-400" />;
    case "mongodb":
      return <SiMongodb className="text-green-400" />;
    case "razorpay":
      return <FaRupeeSign className="text-blue-400" />;
    case "google oauth":
    case "gemini llm":
      return <FaGoogle className="text-yellow-400" />;
    case "jwt":
      return <FaLock className="text-yellow-400" />;
    case "python":
      return <FaPython className="text-yellow-400" />;
    case "flask":
      return <SiFlask className="text-gray-400" />;
    case "scikit-learn":
      return <SiScikitlearn className="text-orange-400" />;
    case "jsearch api":
      return <AiOutlineBarChart className="text-purple-400" />;
    case "clerk":
      return <FaShieldAlt className="text-blue-500" />;
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
  const normalizedSlug = resolvedParams.slug.toLowerCase().replace(/\.com$/, "");
  const project = projects.find(
    (p) =>
      p.slug.toLowerCase() === normalizedSlug ||
      p.title.toLowerCase().replace(/[^a-z0-9]/g, "") ===
        normalizedSlug.replace(/[^a-z0-9]/g, "")
  );

  if (!project) {
    notFound();
  }

  // Other projects for "More works"
  const otherProjects = projects.filter((p) => p.id !== project.id);

  // Scroll tracking for buttery smooth layered animations
  const { scrollY } = useScroll();

  // Smooth springs with physics damping
  const smoothY = useSpring(scrollY, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Hero transformations: gently recedes with scale & parallax as description card places over it
  const heroScale = useTransform(smoothY, [0, 500], [1, 0.93]);
  const heroOpacity = useTransform(smoothY, [0, 450], [1, 0.65]);
  const heroY = useTransform(smoothY, [0, 500], [0, 50]);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedParams.slug]);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <TopLeft />
      <Navbar />

      {/* Hero Showcase Frame - Sticky at Top with Buttery Smooth Parallax */}
      <div className="sticky top-0 h-[65vh] sm:h-[75vh] md:h-[82vh] w-full flex items-center justify-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 z-0 pointer-events-none">
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY,
            transformOrigin: "center top",
          }}
          className="relative w-full max-w-6xl aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.5] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border border-zinc-800 bg-neutral-900 will-change-transform pointer-events-auto"
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Main Content Card - Slides up and covers top hero section */}
      <section className="relative z-10 w-full mt-[-10vh] sm:mt-[-14vh] md:mt-[-18vh]">
        <div className="w-full bg-[#141414] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] rounded-b-none px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 shadow-[0_-30px_70px_rgba(0,0,0,0.5)] border-t border-zinc-800 min-h-screen">
          <div className="max-w-7xl mx-auto relative">
            {/* Close / Back button */}
            <button
              onClick={() => router.push("/#featured-works")}
              className="absolute top-0 right-0 w-11 h-11 rounded-full bg-zinc-900 shadow-md border border-zinc-700 text-zinc-400 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-base z-20"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Project Title */}
            <div className="pr-14 mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {project.title}
              </h1>
            </div>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[160px_1fr] gap-y-7 md:gap-y-9 gap-x-10 lg:gap-x-16 mb-16 text-sm items-start">
              {/* Overview */}
              <div className="text-zinc-500 font-medium tracking-wide">
                Overview
              </div>
              <div className="space-y-4 text-zinc-400 text-[15px] sm:text-base md:text-[17px] leading-[1.85] max-w-5xl">
                {project.overviewParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Categories */}
              <div className="text-zinc-500 font-normal tracking-wide text-sm">
                Categories
              </div>
              <div className="text-zinc-300 font-medium text-sm sm:text-[15px] flex items-center gap-2 flex-wrap">
                {project.categories.map((cat, idx) => (
                  <span key={cat} className="flex items-center gap-2">
                    <span>{cat}</span>
                    {idx < project.categories.length - 1 && (
                      <span className="text-zinc-600">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="text-zinc-500 font-normal tracking-wide text-sm">
                Date
              </div>
              <div className="text-zinc-300 font-medium text-sm sm:text-[15px]">
                {project.date}
              </div>

              {/* Client / Role */}
              <div className="text-zinc-500 font-normal tracking-wide text-sm">
                Client
              </div>
              <div className="text-zinc-300 font-medium text-sm sm:text-[15px]">
                {project.client}
              </div>

              {/* Tech Stack */}
              <div className="text-zinc-500 font-normal tracking-wide text-sm">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techNames.map((techName) => {
                  const icon = getTechIcon(techName);
                  return (
                    <span
                      key={techName}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] text-xs font-medium text-zinc-300 border border-zinc-800"
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
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-[#e8dcc8] text-[#0a0a0a] text-[13px] sm:text-sm font-bold hover:bg-[#d9ccb6] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_12px_28px_rgba(232,220,200,0.15)]"
                >
                  Live Preview <span className="text-sm">→</span>
                </a>
              </div>
              <div></div>
            </div>

            {/* Visual Gallery */}
            <div className="space-y-6 mb-16">
              {/* Top 2 side-by-side images */}
              {project.images.length >= 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-sm aspect-[16/10]">
                    <img
                      src={project.images[1] || project.images[0]}
                      alt={`${project.title} screenshot 2`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-sm aspect-[16/10]">
                    <img
                      src={project.images[2] || project.images[0]}
                      alt={`${project.title} screenshot 3`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}

              {/* Wide bottom image */}
              <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-sm aspect-[16/9]">
                <img
                  src={project.images[0]}
                  alt={`${project.title} full showcase`}
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>

            {/* More works section */}
            <div className="border-t border-zinc-800 pt-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8">
                More <span className="text-[#e8dcc8]">works</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.slice(0, 2).map((other) => (
                  <Link
                    key={other.id}
                    href={`/work/${other.slug}`}
                    className="group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] md:rounded-[28px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-neutral-900 block"
                  >
                    <img
                      src={other.images[0]}
                      alt={other.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 z-10 flex flex-col items-start gap-2.5">
                      <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                        {other.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        {other.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/15 backdrop-blur-md text-white/95 border border-white/20 shadow-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
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
