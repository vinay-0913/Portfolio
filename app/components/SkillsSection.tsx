"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDocker,
  FaDatabase,
  FaBrain,
  FaBolt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiAnthropic,
  SiMongodb,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { AiOutlineBarChart, AiOutlineApi } from "react-icons/ai";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-emerald-500" /> },
    ],
  },
  {
    title: "FRAMEWORKS",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-zinc-300" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-zinc-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-zinc-300" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Claude Code", icon: <SiAnthropic className="text-amber-500" /> },
      { name: "Antigravity", icon: <FaBolt className="text-purple-400" /> },
    ],
  },
  {
    title: "TECHNOLOGIES",
    skills: [
      { name: "LLMs", icon: <FaBrain className="text-pink-400" /> },
      { name: "AWS", icon: <FaAws className="text-amber-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "REST APIs", icon: <AiOutlineApi className="text-indigo-400" /> },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Pandas", icon: <SiPandas className="text-blue-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-cyan-500" /> },
      { name: "Matplotlib", icon: <AiOutlineBarChart className="text-emerald-400" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-zinc-500 mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills &amp;{" "}
            <span className={`${playfair.className} italic font-normal text-[#e8dcc8]`}>
              Expertise
            </span>
          </h2>
        </div>

        {/* Categorized Skills Grid / Rows */}
        <div className="space-y-4 md:space-y-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] items-start gap-4 md:gap-8 p-6 md:p-8 rounded-2xl bg-[#141414] border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Category Title on Left */}
              <div className="flex items-center">
                <h3 className="text-xl md:text-2xl font-black tracking-wider text-white uppercase">
                  {cat.title}
                </h3>
              </div>

              {/* Badges on Right */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white transition-all duration-200 cursor-default select-none"
                  >
                    <span className="text-base flex items-center justify-center">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium tracking-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}