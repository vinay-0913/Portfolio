"use client";

import { useRef, memo, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

// ─── Skills Data ────────────────────────────────────────────────────────────
const SKILLS = [
  { label: "React.js", icon: "⚛" },
  { label: "Next.js", icon: "▲" },
  { label: "TypeScript", icon: "TS" },
  { label: "Tailwind CSS", icon: "◈" },
  { label: "Node.js", icon: "⬡" },
  { label: "MongoDB", icon: "🍃" },
  { label: "PostgreSQL", icon: "⬡" },
  { label: "GraphQL", icon: "◇" },
  { label: "Framer Motion", icon: "✦" },
  { label: "Three.js", icon: "△" },
  { label: "Docker", icon: "⬢" },
  { label: "AWS", icon: "☁" },
];

// ─── Skill Badge ─────────────────────────────────────────────────────────────
const SkillBadge = memo(function SkillBadge({
  label,
  icon,
  index,
}: {
  label: string;
  icon: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-default select-none transition-all duration-300"
      style={{
        background: hovered ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
        border: `1px solid ${hovered ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.08)"}`,
        boxShadow: hovered
          ? "0 10px 25px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)"
          : "0 2px 8px rgba(0, 0, 0, 0.02)",
      }}
    >
      <span
        className="text-xs font-mono w-4 text-center font-bold text-zinc-500"
      >
        {icon}
      </span>
      <span
        className="text-sm font-medium text-zinc-800"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
});

// ─── Main Component ──────────────────────────────────────────────────────────
export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── UI fade / slide animations ───────────────────────────────────────────
  const headingOpacity = useTransform(
    scrollYProgress, [0, 0.08, 0.72, 0.88], [0, 1, 1, 0]
  );
  const headingY = useTransform(scrollYProgress, [0, 0.08], [28, 0]);

  const badgesOpacity = useTransform(
    scrollYProgress, [0.35, 0.5, 0.85, 1], [0, 1, 1, 0]
  );
  const badgesY = useTransform(scrollYProgress, [0.35, 0.5], [24, 0]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800;900&display=swap');

        .skill-gradient-text-light {
          background: linear-gradient(130deg, #18181b 0%, #71717a 50%, #27272a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section
        ref={containerRef}
        style={{ height: "240vh", position: "relative", background: "#f5f3ef" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            background: "#f5f3ef",
          }}
        >
          {/* Atmospheric subtle radial for depth */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Subtle grid */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }}
          />

          {/* Center layout */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              gap: "24px",
              padding: "0 24px",
              zIndex: 10,
            }}
          >
            {/* Heading */}
            <motion.div
              style={{ opacity: headingOpacity, y: headingY }}
              className="text-center"
            >
              <p
                style={{
                  margin: "0 0 12px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                }}
              >
                My Skillset
              </p>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(40px, 6vw, 70px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="text-zinc-900">The Magic </span>
                <span className="skill-gradient-text-light">Behind</span>
              </h2>
            </motion.div>

            {/* Skill badges */}
            <motion.div
              style={{ opacity: badgesOpacity, y: badgesY }}
              className="w-full"
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "12px",
                  maxWidth: "680px",
                  margin: "0 auto",
                }}
              >
                {SKILLS.map((skill, i) => (
                  <SkillBadge key={skill.label} {...skill} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}