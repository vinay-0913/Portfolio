"use client";

import Image from "next/image";
import CubeHero from "./CubeHero";
import Link from "next/link";

export default function HeroSection2() {
  return (
    <section className="bg-[#f5f3ef] text-zinc-900 pt-20 pb-10 px-6 md:px-16 lg:px-24 flex flex-col justify-between max-w-7xl mx-auto">

      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">

        {/* LEFT (TEXT) */}
        <div className="flex flex-col gap-3 max-w-2xl">

          <div className="flex items-center gap-4">
            <Image
              src="/profile3.jpg"
              alt="profile"
              width={56}
              height={56}
              className="rounded-full object-cover border-2 border-white shadow-sm"
            />

            <h1 className="text-[36px] md:text-[60px] font-semibold text-zinc-900 tracking-tight">
              Let’s create
            </h1>
          </div>

          <h1 className="text-[36px] md:text-[60px] font-semibold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-800 text-transparent bg-clip-text">
            something real.
          </h1>
        </div>

        {/* RIGHT (CUBE) */}
        <div className="flex items-center justify-center w-[200px] h-[200px]">
          <CubeHero />
        </div>

      </div>

      {/* FOOTER CARD (matching the reference design) */}
      <div className="mt-20 bg-zinc-900 text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between gap-12 w-full shadow-xl">

        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-sm">
            <h2 className="text-[38px] md:text-[46px] text-white leading-none font-bold tracking-tight">
              VINAY
            </h2>
            <p className="mt-4 text-zinc-400 text-[14px] leading-relaxed">
              Building digital products that matter with meaningful impact.
              Crafting interfaces that feel alive, solving problems that make a difference,
              and turning ideas into reality.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

            {/* GENERAL */}
            <div>
              <h3 className="text-zinc-400 font-semibold text-xs uppercase tracking-wider mb-4">
                General
              </h3>

              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/"
                    className="block text-zinc-300 text-[14px] hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="block text-zinc-300 text-[14px] hover:text-white transition"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/uses"
                    className="block text-zinc-300 text-[14px] hover:text-white transition"
                  >
                    Uses
                  </Link>
                </li>
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="text-zinc-400 font-semibold text-xs uppercase tracking-wider mb-4">
                About
              </h3>

              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="block text-zinc-300 text-[14px] hover:text-white transition"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="block text-zinc-300 text-[14px] hover:text-white transition"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-call"
                    className="block text-zinc-300 text-[14px] hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="text-zinc-400 font-semibold text-xs uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/terms"
                    className="block text-zinc-300 text-[14px] hover:text-white transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM COPYRIGHT & SOCIAL */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} VINAY RATNAKAR. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-5 text-zinc-400 text-sm">
            <a
              href="https://github.com/vinay-0913"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vinay-ratnakar-650a05264/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Twitter / X
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
