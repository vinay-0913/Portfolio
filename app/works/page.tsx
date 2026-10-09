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
    <main className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-4">
            Portfolio &amp; Archive
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
            All{" "}
            <span
              className={`${playfair.className} italic font-normal text-zinc-500`}
            >
              Works.
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl">
            A curated showcase of full-stack platforms, machine learning systems,
            and AI-driven web applications engineered for performance and
            real-world impact.
          </p>
        </motion.div>
      </section>

      {/* All Projects Grid */}
      <section className="pb-24 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/60 hover:border-zinc-300 transition-all duration-400 cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 text-zinc-500 border border-zinc-200/60"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-1.5 group-hover:text-[#2563eb] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-2">
                    {project.desc.replace(/\*\*/g, "").slice(0, 120)}...
                  </p>
                </div>
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
