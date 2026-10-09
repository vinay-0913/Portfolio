"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

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
      icon: <FiGithub className="text-[15px]" />,
    },
    {
      name: "LinkedIn",
      label: "LINKEDIN",
      href: "https://linkedin.com/in/vinay-ratnakar-650a05264/",
      icon: <FiLinkedin className="text-[15px]" />,
    },
    {
      name: "Twitter",
      label: "TWITTER",
      href: "https://twitter.com/",
      icon: <FaXTwitter className="text-[15px]" />,
    },
    {
      name: "Instagram",
      label: "INSTAGRAM",
      href: "https://instagram.com/",
      icon: <FiInstagram className="text-[15px]" />,
    },
    {
      name: "Email",
      label: "EMAIL",
      href: "mailto:vinayratnakar0913@gmail.com",
      icon: <FiMail className="text-[15px]" />,
    },
  ];

  return (
    <section id="connect" className="relative bg-white overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16 h-px bg-zinc-100" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-20 sm:pt-24 pb-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            Let&apos;s Connect
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-[-0.02em] leading-[1.1] text-zinc-900 mb-5">
              Let&apos;s build something cool{" "}
              <span
                className={`${playfair.className} italic font-normal text-zinc-500`}
              >
                together.
              </span>
            </h2>

            {/* Description */}
            <p className="text-[13.5px] text-zinc-400 leading-[1.65] max-w-[400px] mb-10">
              Always open to discussing new projects, creative ideas, or
              opportunities to collaborate. Feel free to reach out — I&apos;d love
              to hear from you!
            </p>

            {/* Social Links with Icons + Labels below */}
            <div className="flex items-center gap-6 sm:gap-7">
              {socialLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex flex-col items-center gap-2"
                >
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-900 hover:bg-zinc-50 transition-all duration-200"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                  <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-zinc-400">
                    {link.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Decorative blue sketch accent at top right of card */}
            <div className="absolute -top-3 -right-3 text-blue-500 pointer-events-none hidden sm:block">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="16" y1="8" x2="20" y2="2" />
                <line x1="22" y1="12" x2="29" y2="8" />
                <line x1="24" y1="18" x2="30" y2="20" />
              </svg>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 shadow-sm">
              {/* Form header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10.5px] font-semibold tracking-[0.15em] uppercase text-zinc-400">
                  Send a Message
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-1">
                    <span className="text-emerald-500 text-xl">✓</span>
                  </div>
                  <h4 className="text-base font-bold text-zinc-900">
                    Message Sent!
                  </h4>
                  <p className="text-zinc-400 text-[13px] max-w-[240px]">
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-lg bg-zinc-100 text-zinc-600 text-[12px] font-semibold hover:bg-zinc-200 transition border border-zinc-200 cursor-pointer"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/80 text-zinc-900 placeholder:text-zinc-400 text-[13px] focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/80 text-zinc-900 placeholder:text-zinc-400 text-[13px] focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-zinc-400 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={3}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/80 text-zinc-900 placeholder:text-zinc-400 text-[13px] focus:outline-none focus:bg-white focus:border-zinc-400 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-zinc-900 text-white font-medium text-[13px] tracking-wide hover:bg-black active:scale-[0.98] transition-all duration-200 shadow-sm disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <svg
                          width="14"
                          height="14"
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
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
          <p>© 2024 Vinay Ratnakar. All rights reserved.</p>
          <p>Designed &amp; Built with Passion</p>
        </div>
      </div>
    </section>
  );
}
