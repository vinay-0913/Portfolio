"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { projects, Project } from "@/app/data/projects";
import Navbar from "@/app/components/Navbar";
import TopLeft from "@/app/components/TopLeft";
import HeroSection2 from "@/app/components/HeroSection2";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export default function WorksPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <TopLeft />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-4">
            Portfolio & Archive
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            All{" "}
            <span className={`${playfair.className} italic font-normal text-[#e8dcc8]`}>
              Works.
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
            A curated showcase of full-stack platforms, machine learning systems, and AI-driven web applications engineered for performance and real-world impact.
          </p>
        </motion.div>
      </section>

      {/* All Projects Grid */}
      <section className="pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[28px] md:rounded-[32px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-neutral-900 block"
              >
                {/* Thumbnail Image */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none transition-opacity duration-300" />

                {/* Card Info */}
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

                {/* Glass Border Overlay */}
                <div className="absolute inset-0 rounded-[28px] md:rounded-[32px] border border-white/10 group-hover:border-white/25 transition-colors duration-300 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <HeroSection2 />
    </main>
  );
}
