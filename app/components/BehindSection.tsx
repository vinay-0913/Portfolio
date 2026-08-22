"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSpotify } from "react-icons/fa";

export default function BehindSection() {
  const router = useRouter();
  return (
    <section className="bg-[#f5f3ef] text-zinc-900 py-32 px-6 md:px-16 max-w-7xl mx-auto">

      {/* HEADING */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] font-semibold text-zinc-400 mb-4 uppercase">
          BEHIND THE CURTAINS
        </p>

        <h2 className="text-[42px] md:text-[60px] font-semibold leading-tight text-zinc-900">
          Decoding logic <br />
          <span className="font-serif italic bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-800 text-transparent bg-clip-text">
            && the lyrics
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* 🔥 LEFT CARD (GITHUB) */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-zinc-300 transition duration-300">

          <div>
            <h3 className="text-xl font-semibold mb-6 text-zinc-900">
              Vinay's Github
            </h3>

            <p className="text-xs font-medium text-zinc-400 mb-2 tracking-wider uppercase">
              LATEST PUSH • 1h ago
            </p>

            <p className="text-zinc-700 text-sm leading-relaxed">
              "Refactor code structure for improved readability and maintainability"
            </p>

            <p className="text-xs text-amber-600 font-medium mt-3">
              Repo: Private work
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-8 text-zinc-400 text-lg">
            <a 
              href="https://github.com/vinay-0913" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/vinay-ratnakar-650a05264/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://x.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* 🔥 CENTER CARD */}
        <div className="relative bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-zinc-300 transition duration-300">

          {/* subtle warm glow */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-100/60 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10">
            <p className="text-xs text-zinc-400 font-semibold tracking-widest mb-4 uppercase">
              VISITORS
            </p>

            <h3 className="text-3xl font-semibold leading-tight text-zinc-900">
              Leave your{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-800 text-transparent bg-clip-text">
                signature
              </span>
            </h3>

            <p className="text-zinc-500 mt-4 text-sm">
              Let me know you were here.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-8">

            {/* avatars */}
            <div className="flex -space-x-3">
              <img src="/guestbook1.jpg" alt="Guest 1" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
              <img src="/guestbook2.jpg" alt="Guest 2" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
              <img src="/guestbook3.jpg" alt="Guest 3" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
            </div>

            {/* BUTTON */}
            <button
              onClick={() => router.push("/guestbook")}
              className="px-5 py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition shadow-sm hover:scale-105"
            >
              Sign Guestbook →
            </button>

          </div>
        </div>

        {/* 🔥 RIGHT CARD (SPOTIFY CLICKABLE) */}
        <a
          href="https://open.spotify.com/track/3hEfpBHxgieRLz4t3kLNEg"
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-zinc-300 transition duration-300 group flex flex-col justify-end min-h-[300px]"
        >

          {/* background image */}
          <img
            src="/aboutyou.jpg"
            alt="Song cover"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="relative p-7 z-10 text-white">

            <div className="flex items-center gap-2 text-xs font-medium text-white/80 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-3.5 h-3.5 fill-green-400"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 
                248-248S385 8 248 8zm100.8 365.6c-4 6.6-12.6 8.6-19.2 
                4.6-52.8-32.2-119.4-39.5-198-21.7-7.6 1.7-15.2-3-16.9-10.6-1.7-7.6 
                3-15.2 10.6-16.9 85.4-19.3 158.4-11.2 219.5 
                25.9 6.6 4 8.6 12.6 4 18.7zm27.4-61.1c-5 8.2-15.8 
                10.8-24 5.8-60.4-37.1-152.4-47.9-223.8-26.2-9.2 
                2.8-18.9-2.4-21.7-11.6-2.8-9.2 2.4-18.9 
                11.6-21.7 80.7-24.5 181-12.6 254.7 
                32.3 8.2 5 10.8 15.8 5.8 21.4zm2.4-63.5c-72.3-43-191.6-47-260.6-26.2-11 
                3.3-22.7-2.9-26-13.9-3.3-11 2.9-22.7 
                13.9-26 79.3-23.8 210.8-19.2 294.6 
                30.1 10.1 6 13.4 19.1 7.4 29.2-6 10.1-19.1 
                13.4-29.3 6.8z"/>
              </svg>
              <span>Last Played</span>
            </div>

            <h3 className="text-lg font-semibold text-white">
              About You - From "The 1975"
            </h3>

            <p className="text-xs text-white/70 mt-1">
              The 1975 • Album
            </p>

            <p className="text-xs text-green-400 font-medium mt-3 flex items-center gap-1.5">
              <span>▶</span> Play on Spotify
            </p>

          </div>
        </a>

      </div>
    </section>
  );
}