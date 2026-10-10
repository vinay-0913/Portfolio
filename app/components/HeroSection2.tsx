"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { WaveText } from "@/app/components/WaveText";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function HeroSection2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: "GitHub",
      label: "GITHUB",
      href: "https://github.com/vinay-0913",
      icon: <FiGithub className="text-[17px]" />,
    },
    {
      name: "LinkedIn",
      label: "LINKEDIN",
      href: "https://linkedin.com/in/vinay-ratnakar-650a05264/",
      icon: <FiLinkedin className="text-[17px]" />,
    },
    {
      name: "Twitter",
      label: "TWITTER",
      href: "https://twitter.com/",
      icon: <FaXTwitter className="text-[17px]" />,
    },
    {
      name: "Instagram",
      label: "INSTAGRAM",
      href: "https://instagram.com/",
      icon: <FiInstagram className="text-[17px]" />,
    },
    {
      name: "Email",
      label: "EMAIL",
      href: "mailto:vinayratnakar0913@gmail.com",
      icon: <FiMail className="text-[17px]" />,
    },
  ];

  return (
    <section id="connect" className="relative overflow-hidden" style={{ backgroundColor: "#fafaf8" }}>
      {/* Hairline divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16"
        style={{ height: "var(--space-hair)", background: "var(--color-hairline-soft)" }}
      />

      <div
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16"
        style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-xxl)" }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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
            Let&apos;s Connect
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* LEFT COLUMN */}
          <motion.div variants={fadeUp} className="flex flex-col">
            {/* Heading — display-lg */}
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 340,
                letterSpacing: "-0.96px",
                lineHeight: 1.08,
                color: "var(--color-ink)",
              }}
            >
              Let&apos;s build something cool{" "}
              <WaveText
                text="together."
                className={`${playfair.className} italic`}
                style={{ fontWeight: 400 }}
              />
            </h2>

            {/* Description — body-lg */}
            <p
              className="max-w-[420px] mb-12"
              style={{
                fontSize: "20px",
                fontWeight: 330,
                lineHeight: 1.5,
                letterSpacing: "-0.14px",
                color: "var(--color-ink)",
                opacity: 0.4,
              }}
            >
              Always open to discussing new projects, creative ideas, or
              opportunities to collaborate. Feel free to reach out — I&apos;d love
              to hear from you!
            </p>

            {/* Social Links — circular icon buttons per DESIGN.md */}
            <div className="flex items-center gap-5 sm:gap-6">
              {socialLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  className="flex flex-col items-center gap-2.5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: 44, height: 44 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                  <span
                    style={{
                      fontFamily:
                        "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "9px",
                      fontWeight: 400,
                      letterSpacing: "0.6px",
                      textTransform: "uppercase" as const,
                      color: "var(--color-ink)",
                      opacity: 0.3,
                    }}
                  >
                    {link.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Form Card inside color-block-lilac */}
          <motion.div variants={fadeUp} className="relative">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="color-block color-block-lilac"
              style={{ padding: "var(--space-xl)" }}
            >
              {/* Form header */}
              <div className="flex items-center gap-2.5 mb-7">
                <span className="w-2 h-2 rounded-full bg-[var(--color-semantic-success)] pulse-dot" />
                <span
                  style={{
                    fontFamily:
                      "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase" as const,
                    color: "var(--color-ink)",
                    opacity: 0.5,
                  }}
                >
                  Send a Message
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="py-14 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-full bg-[var(--color-canvas)] flex items-center justify-center"
                  >
                    <span className="text-[var(--color-semantic-success)] text-2xl">✓</span>
                  </motion.div>
                  <h4
                    style={{
                      fontSize: "22px",
                      fontWeight: 540,
                      color: "var(--color-ink)",
                    }}
                  >
                    Message Sent!
                  </h4>
                  <p
                    className="max-w-[260px]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 330,
                      color: "var(--color-ink)",
                      opacity: 0.5,
                    }}
                  >
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 0.97 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 btn-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    Send another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily:
                          "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        textTransform: "uppercase" as const,
                        color: "var(--color-ink)",
                        opacity: 0.45,
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/30 transition-all duration-200"
                      style={{
                        background: "var(--color-canvas)",
                        borderRadius: "var(--rounded-md)",
                        border: "1px solid var(--color-hairline)",
                        fontSize: "16px",
                        fontWeight: 330,
                        letterSpacing: "-0.14px",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily:
                          "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        textTransform: "uppercase" as const,
                        color: "var(--color-ink)",
                        opacity: 0.45,
                      }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/30 transition-all duration-200"
                      style={{
                        background: "var(--color-canvas)",
                        borderRadius: "var(--rounded-md)",
                        border: "1px solid var(--color-hairline)",
                        fontSize: "16px",
                        fontWeight: 330,
                        letterSpacing: "-0.14px",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily:
                          "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        textTransform: "uppercase" as const,
                        color: "var(--color-ink)",
                        opacity: 0.45,
                      }}
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={3}
                      required
                      className="w-full px-4 py-3.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/30 transition-all duration-200 resize-none"
                      style={{
                        background: "var(--color-canvas)",
                        borderRadius: "var(--rounded-md)",
                        border: "1px solid var(--color-hairline)",
                        fontSize: "16px",
                        fontWeight: 330,
                        letterSpacing: "-0.14px",
                      }}
                    />
                  </div>

                  {/* Submit Button — button-primary pill */}
                  <motion.button
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 mt-3 disabled:opacity-60 cursor-pointer"
                    style={{
                      padding: "14px 20px",
                      background: "var(--color-primary)",
                      color: "var(--color-on-primary)",
                      borderRadius: "var(--rounded-pill)",
                      fontSize: "18px",
                      fontWeight: 480,
                      letterSpacing: "-0.10px",
                      border: "none",
                    }}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full inline-block"
                      />
                    ) : (
                      <>
                        Send Message
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer — per DESIGN.md: canvas bg, caption type */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            marginTop: "var(--space-section)",
            paddingTop: "var(--space-lg)",
            borderTop: "1px solid var(--color-hairline-soft)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.6px",
              textTransform: "uppercase" as const,
              color: "var(--color-ink)",
              opacity: 0.3,
            }}
          >
            © 2024 Vinay Ratnakar
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.6px",
              textTransform: "uppercase" as const,
              color: "var(--color-ink)",
              opacity: 0.3,
            }}
          >
            Designed &amp; Built with Passion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
