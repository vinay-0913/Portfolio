"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Monitor, Book, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [showMore, setShowMore] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClick = () => setShowMore(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMore(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMore(false);
    }, 180);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // ❌ Blogs removed from here
  ];

  const handleNavigation = (path: string) => {
  if (pathname === path) return;
  router.push(path);
};

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 px-2.5 py-1.5 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

        {/* NAV ITEMS */}
        <div className="flex items-center gap-1 text-sm relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="relative px-3.5 py-1 rounded-full overflow-hidden group transition"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-zinc-900 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 font-medium text-xs transition ${
                    isActive
                      ? "text-white"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* MORE BUTTON */}
          <button
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 hover:bg-zinc-200 transition text-zinc-700"
          >
            More ▾
          </button>
        </div>

        {/* CTA */}
        <Link
          href="/book-call"
          className="ml-1 px-3.5 py-1 bg-zinc-900 text-white rounded-full text-xs font-medium hover:bg-zinc-800 hover:scale-105 transition"
        >
          Book a Call
        </Link>
      </div>

      {/* DROPDOWN */}
      {showMore && (
        <div
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-14 right-0 w-[300px] bg-white/95 border border-zinc-200 rounded-2xl p-3 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-2 gap-2.5">

            <Link href="/uses">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700">
                  <Monitor size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900">Uses</p>
                  <p className="text-[10px] text-zinc-500">
                    DevTools, AI & Socials
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/guestbook">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700">
                  <Book size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900">Guestbook</p>
                  <p className="text-[10px] text-zinc-500">
                    Sign my wall
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blogs">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900">Blogs</p>
                  <p className="text-[10px] text-zinc-500">
                    Read my articles
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}