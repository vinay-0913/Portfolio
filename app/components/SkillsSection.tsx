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
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDocker,
  FaDatabase,
  FaBrain,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { VscCode } from "react-icons/vsc";
import { FiCode, FiLayers, FiTool, FiCloud } from "react-icons/fi";

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
  categoryIcon: React.ReactNode;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    categoryIcon: <FiCode className="text-zinc-700 text-base" />,
    skills: [
      {
        name: "Python",
        icon: <FaPython className="text-[#3776ab] text-[13px]" />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-[#e76f00] text-[13px]" />,
      },
      {
        name: "JavaScript",
        icon: (
          <span className="w-3.5 h-3.5 bg-[#f7df1e] text-black font-extrabold text-[8px] rounded-[2px] flex items-center justify-center leading-none">
            JS
          </span>
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <span className="w-3.5 h-3.5 bg-[#3178c6] text-white font-extrabold text-[8px] rounded-[2px] flex items-center justify-center leading-none">
            TS
          </span>
        ),
      },
      {
        name: "C",
        icon: (
          <span className="w-3.5 h-3.5 bg-[#5c8bc2] text-white font-extrabold text-[8px] rounded-[2px] flex items-center justify-center leading-none">
            C
          </span>
        ),
      },
      {
        name: "HTML",
        icon: <FaHtml5 className="text-[#e34f26] text-[13px]" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-[#1572b6] text-[13px]" />,
      },
      {
        name: "SQL",
        icon: <FaDatabase className="text-[#00758f] text-[12px]" />,
      },
    ],
  },
  {
    title: "Frameworks",
    categoryIcon: <FiLayers className="text-zinc-700 text-base" />,
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-[#61dafb] text-[13px]" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-zinc-900 text-[13px]" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#5fa04e] text-[13px]" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-zinc-600 text-[13px]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06b6d4] text-[13px]" />,
      },
    ],
  },
  {
    title: "Tools",
    categoryIcon: <FiTool className="text-zinc-700 text-base" />,
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-[#f05032] text-[13px]" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-zinc-800 text-[13px]" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[#ff6c37] text-[13px]" />,
      },
      {
        name: "VS Code",
        icon: <VscCode className="text-[#007acc] text-[13px]" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47a248] text-[13px]" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-[#2496ed] text-[13px]" />,
      },
    ],
  },
  {
    title: "Technologies",
    categoryIcon: <FiCloud className="text-zinc-700 text-base" />,
    skills: [
      {
        name: "AI/ML",
        icon: <FaBrain className="text-[#a855f7] text-[13px]" />,
      },
      {
        name: "AWS",
        icon: <FaAws className="text-[#ff9900] text-[13px]" />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="text-[#3ecf8e] text-[13px]" />,
      },
      {
        name: "REST APIs",
        icon: <AiOutlineApi className="text-[#3b82f6] text-[13px]" />,
      },
      {
        name: "Linux",
        icon: <FaLinux className="text-zinc-800 text-[13px]" />,
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-white py-20 sm:py-24 px-6 md:px-10 lg:px-16"
    >
      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16 h-px bg-zinc-100" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-2.5">
            Skills &amp; Expertise
          </p>
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-[-0.01em] text-zinc-900">
            Tools{" "}
            <span
              className={`${playfair.className} italic font-normal text-zinc-500`}
            >
              I work with
            </span>
          </h2>
        </div>

        {/* Outer Card Container */}
        <div className="bg-white rounded-2xl border border-zinc-200/80 p-5 sm:p-7 shadow-sm divide-y divide-zinc-100">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-4 sm:py-5 first:pt-1 last:pb-1"
            >
              {/* Category Title + Icon */}
              <div className="flex items-center gap-2.5 sm:w-[150px] shrink-0">
                <span className="flex items-center justify-center w-5 h-5 text-zinc-700">
                  {cat.categoryIcon}
                </span>
                <h3 className="text-[13.5px] font-bold text-zinc-800 tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, y: -1 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50/70 border border-zinc-200/80 text-zinc-700 hover:border-zinc-300 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default select-none"
                  >
                    <span className="flex items-center justify-center shrink-0">
                      {skill.icon}
                    </span>
                    <span className="text-[12px] font-medium leading-none">
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