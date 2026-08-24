"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { projects, Project } from "@/app/data/projects";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

// ─── PROJECT CARD ─────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] rounded-[28px] md:rounded-[32px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-neutral-900 block"
      >
        {/* Image */}
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none transition-opacity duration-300" />

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 flex flex-col items-start gap-3">
          <h3 className="text-white text-2xl md:text-[28px] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">
            {project.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 md:gap-2.5">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-white/15 backdrop-blur-md text-white/95 border border-white/25 shadow-sm transition-colors duration-300 group-hover:bg-white/25"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle glass border outline */}
        <div className="absolute inset-0 rounded-[28px] md:rounded-[32px] border border-white/10 group-hover:border-white/25 transition-colors duration-300 pointer-events-none" />
      </Link>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────
export default function Showcase() {
  return (
    <section id="featured-works" className="relative bg-[#0a0a0a] py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 md:mb-14 max-w-7xl mx-auto">
        <h2
          className={`${playfair.className} text-4xl md:text-5xl text-white`}
          style={{ fontStyle: "italic" }}
        >
          Featured <span className="text-[#e8dcc8]">works</span>
        </h2>
        <Link
          href="/works"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-sm font-medium text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-500 hover:text-white transition-all duration-200"
        >
          All Works <span>→</span>
        </Link>
      </div>

      {/* Grid - Clean, consistent 2x2 grid (Only first 4 projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 max-w-7xl mx-auto">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}