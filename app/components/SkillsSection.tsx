"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { WaveText } from "@/app/components/WaveText";
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
  accent: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    categoryIcon: <FiCode className="text-base text-[#6366F1]" />,
    accent: "var(--block-lilac)",
    skills: [
      {
        name: "Python",
        icon: <FaPython className="text-[14px]" style={{ color: "#3776AB" }} />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-[14px]" style={{ color: "#E76F00" }} />,
      },
      {
        name: "JavaScript",
        icon: (
          <span className="w-4 h-4 bg-[#F7DF1E] text-black font-bold text-[8px] rounded-[2px] flex items-center justify-center leading-none">
            JS
          </span>
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <span className="w-4 h-4 bg-[#3178C6] text-white font-bold text-[8px] rounded-[2px] flex items-center justify-center leading-none">
            TS
          </span>
        ),
      },
      {
        name: "C",
        icon: (
          <span className="w-4 h-4 bg-[#00599C] text-white font-bold text-[8px] rounded-[2px] flex items-center justify-center leading-none">
            C
          </span>
        ),
      },
      {
        name: "HTML",
        icon: <FaHtml5 className="text-[14px]" style={{ color: "#E34F26" }} />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-[14px]" style={{ color: "#1572B6" }} />,
      },
      {
        name: "SQL",
        icon: <FaDatabase className="text-[13px]" style={{ color: "#336791" }} />,
      },
    ],
  },
  {
    title: "Frameworks",
    categoryIcon: <FiLayers className="text-base text-[#EC4899]" />,
    accent: "var(--block-coral)",
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-[14px]" style={{ color: "#61DAFB" }} />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[14px]" style={{ color: "#000000" }} />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[14px]" style={{ color: "#539E43" }} />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-[14px]" style={{ color: "#000000" }} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[14px]" style={{ color: "#06B6D4" }} />,
      },
    ],
  },
  {
    title: "Tools",
    categoryIcon: <FiTool className="text-base text-[#10B981]" />,
    accent: "var(--block-mint)",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-[14px]" style={{ color: "#F05032" }} />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-[14px]" style={{ color: "#181717" }} />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[14px]" style={{ color: "#FF6C37" }} />,
      },
      {
        name: "VS Code",
        icon: <VscCode className="text-[14px]" style={{ color: "#007ACC" }} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[14px]" style={{ color: "#47A248" }} />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-[14px]" style={{ color: "#2496ED" }} />,
      },
    ],
  },
  {
    title: "Technologies",
    categoryIcon: <FiCloud className="text-base text-[#F59E0B]" />,
    accent: "var(--block-cream)",
    skills: [
      {
        name: "AI/ML",
        icon: <FaBrain className="text-[14px]" style={{ color: "#8B5CF6" }} />,
      },
      {
        name: "AWS",
        icon: <FaAws className="text-[14px]" style={{ color: "#FF9900" }} />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="text-[14px]" style={{ color: "#3ECF8E" }} />,
      },
      {
        name: "REST APIs",
        icon: <AiOutlineApi className="text-[14px]" style={{ color: "#0284C7" }} />,
      },
      {
        name: "Linux",
        icon: <FaLinux className="text-[14px]" style={{ color: "#FCC624" }} />,
      },
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)", backgroundColor: "#ffffff" }}
    >
      {/* Hairline divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16"
        style={{ height: "var(--space-hair)", background: "var(--color-hairline-soft)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
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
            Skills &amp; Expertise
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
            Tools{" "}
            <WaveText
              text="I work with"
              className={`${playfair.className} italic`}
              style={{ fontWeight: 400 }}
            />
          </motion.h2>
        </div>

        {/* Skills inside a color-block-cream section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="color-block color-block-cream"
          style={{ backgroundColor: "#f4dcbdff" }}
        >
          <div className="space-y-0 divide-y divide-[var(--color-ink)]/8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 first:pt-0 last:pb-0"
              >
                {/* Category Title + Icon */}
                <div className="flex items-center gap-3 sm:w-[160px] shrink-0">
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    style={{ background: "rgba(0,0,0,0.06)" }}
                  >
                    {cat.categoryIcon}
                  </span>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 540,
                      color: "var(--color-ink)",
                      letterSpacing: "-0.14px",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -1.5 }}
                      whileTap={{ y: 0, scale: 0.98 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-2 px-3.5 py-2 cursor-pointer select-none transition-[box-shadow,border-color] duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-black/20"
                      style={{
                        background: "var(--color-canvas)",
                        borderRadius: "var(--rounded-pill)",
                        border: "1px solid var(--color-hairline)",
                        willChange: "transform",
                      }}
                    >
                      <span className="flex items-center justify-center shrink-0">
                        {skill.icon}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 480,
                          lineHeight: 1,
                          letterSpacing: "-0.10px",
                          color: "var(--color-ink)",
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}