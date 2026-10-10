"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { WaveText } from "@/app/components/WaveText";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

/* ── Staggered reveal ── */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)", backgroundColor: "#ffffff" }}
    >
      {/* Hairline divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16"
        style={{ height: "var(--space-hair)", background: "var(--color-hairline-soft)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Eyebrow — figmaMono style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <span
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.6px",
              textTransform: "uppercase" as const,
              color: "var(--color-ink)",
              opacity: 0.4,
            }}
          >
            About
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start"
        >
          {/* LEFT COLUMN — Text */}
          <div>
            {/* Hero Statement — display-lg style */}
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 340,
                lineHeight: 1.15,
                letterSpacing: "-0.96px",
                color: "var(--color-ink)",
              }}
              className="mb-7"
            >
              I am Vinay Ratnakar,{" "}
              <br className="hidden sm:block" />
              <WaveText
                text="an aspiring Software Engineer."
                className={`${playfair.className} italic`}
                style={{ fontWeight: 400 }}
              />
            </motion.h2>

            {/* Description — body-lg */}
            <motion.p
              variants={fadeUp}
              className="max-w-[520px] mb-4"
              style={{
                fontSize: "20px",
                fontWeight: 330,
                lineHeight: 1.5,
                letterSpacing: "-0.14px",
                color: "var(--color-ink)",
                opacity: 0.45,
              }}
            >
              Curiosity drives me. I enjoy solving real world problems,
              breaking concepts down, and turning ideas into working
              products. Whether it&apos;s a full stack platform, an AI-powered
              tool, or a clean user interface — if it&apos;s interesting, I&apos;m all in.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="max-w-[520px] mb-12"
              style={{
                fontSize: "20px",
                fontWeight: 330,
                lineHeight: 1.5,
                letterSpacing: "-0.14px",
                color: "var(--color-ink)",
                opacity: 0.45,
              }}
            >
              I recently completed my B.Tech in Computer Science and
              Engineering from BIT Durg, and I&apos;m actively looking for
              opportunities to build, learn and contribute.
            </motion.p>

            {/* Metadata Row — with color-block accent pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-14 gap-y-6">
              {[
                {
                  emoji: "🎓",
                  label: "Education",
                  title: "B.Tech, CSE",
                  subtitle: "BIT, Durg",
                  accent: "var(--block-lilac)",
                },
                {
                  emoji: "📍",
                  label: "Location",
                  title: "Raipur, India",
                  subtitle: null,
                  accent: "var(--block-mint)",
                },
                {
                  emoji: "💻",
                  label: "Focus Areas",
                  title: "Web Dev, AI/ML",
                  subtitle: "Product Building",
                  accent: "var(--block-cream)",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[13px]"
                      style={{ background: item.accent }}
                    >
                      {item.emoji}
                    </span>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        textTransform: "uppercase" as const,
                        color: "var(--color-ink)",
                        opacity: 0.35,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 480,
                      color: "var(--color-ink)",
                      letterSpacing: "-0.14px",
                    }}
                  >
                    {item.title}
                  </p>
                  {item.subtitle && (
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 330,
                        color: "var(--color-ink)",
                        opacity: 0.4,
                        letterSpacing: "-0.14px",
                      }}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Quote Card on color block */}
          <motion.div
            variants={fadeUp}
            className="hidden lg:flex items-start pt-4"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[380px] p-8 color-block color-block-cream"
            >
              {/* Quote icon */}
              <div
                className="mb-5 leading-none font-serif select-none"
                style={{
                  fontSize: "48px",
                  color: "var(--color-ink)",
                  opacity: 0.25,
                }}
              >
                &ldquo;
              </div>
              <p
                className={`${playfair.className} italic mb-7`}
                style={{
                  fontSize: "20px",
                  lineHeight: 1.55,
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  opacity: 0.8,
                }}
              >
                I believe great software solves real problems and makes life a
                little easier for people.
              </p>
              {/* Divider line */}
              <div
                className="w-12 rounded-full"
                style={{
                  height: "2px",
                  background: "var(--color-ink)",
                  opacity: 0.15,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}