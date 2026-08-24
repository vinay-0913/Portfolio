"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

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

  return (
    <section id="connect" className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Ambient warm glow at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(120, 80, 20, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-24 pb-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Let's{" "}
                <span
                  className={`${playfair.className} italic font-normal text-[#e8dcc8]`}
                >
                  Connect
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-md mb-12">
              Always open to discussing new projects, creative ideas, or
              opportunities to collaborate in building smarter tools. Feel free
              to shoot a message!
            </p>

            {/* Social Icon Circles */}
            <div className="flex items-center gap-4 mb-10">
              <a
                href="https://github.com/vinay-0913"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-200"
              >
                <FiGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/vinay-ratnakar-650a05264/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-200"
              >
                <FiLinkedin className="text-lg" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-200"
              >
                <FiInstagram className="text-lg" />
              </a>
              <a
                href="mailto:vinayratnakar0913@gmail.com"
                className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-200"
              >
                <FiMail className="text-lg" />
              </a>
            </div>

            {/* Bottom text links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500">
              <a
                href="mailto:vinayratnakar0913@gmail.com"
                className="hover:text-white transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://github.com/vinay-0913"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/vinay-ratnakar-650a05264/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Terminal-Style Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-[#141414] rounded-2xl sm:rounded-3xl border border-zinc-800 p-8 sm:p-10 shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
                  Secure Com-Link Terminal
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-2">
                    <span className="text-green-400 text-2xl">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Transmission Received
                  </h4>
                  <p className="text-zinc-500 text-sm max-w-xs">
                    Your message has been transmitted successfully. I'll respond shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700 transition border border-zinc-700 cursor-pointer"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-zinc-800 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@domain.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-zinc-800 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2">
                      Transmission Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-zinc-800 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#e8dcc8] text-[#0a0a0a] font-bold text-sm tracking-wide hover:bg-[#d9ccb6] active:scale-[0.98] transition-all duration-200 shadow-lg disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? "Transmitting..." : "Submit Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.15em] uppercase text-zinc-600">
          <p>© {new Date().getFullYear()} Vinay Ratnakar. All rights reserved.</p>
          <p>Designed & Built with passion</p>
        </div>
      </div>
    </section>
  );
}
