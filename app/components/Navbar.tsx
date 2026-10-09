"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  shortName: string;
  sectionId: string;
  path: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", shortName: "Home", sectionId: "home", path: "/#home" },
  { name: "About", shortName: "About", sectionId: "about", path: "/#about" },
  {
    name: "Projects",
    shortName: "Projects",
    sectionId: "featured-works",
    path: "/#featured-works",
  },
  {
    name: "Tech Stack",
    shortName: "Stack",
    sectionId: "skills",
    path: "/#skills",
  },
  {
    name: "Connect",
    shortName: "Connect",
    sectionId: "connect",
    path: "/#connect",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll-spy
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sectionIds = [
        "home",
        "about",
        "featured-works",
        "skills",
        "connect",
      ];
      const triggerPoint = window.innerHeight * 0.35;
      let current = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            current = id;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        current = "connect";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigation = useCallback(
    (item: (typeof navItems)[0]) => {
      setMobileOpen(false);
      if (item.isExternal) {
        window.open(item.path, "_blank", "noopener,noreferrer");
        return;
      }

      if (item.path.startsWith("/#")) {
        const sectionId = item.path.replace("/#", "");
        if (pathname !== "/") {
          router.push(item.path);
        } else {
          if (sectionId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            const el = document.getElementById(sectionId);
            el?.scrollIntoView({ behavior: "smooth" });
          }
        }
        return;
      }
      router.push(item.path);
    },
    [pathname, router]
  );

  const isItemActive = (item: (typeof navItems)[0]) => {
    if (item.isExternal) return false;
    if (pathname === "/") {
      return item.sectionId === activeSection;
    }
    if (item.path === "/about" && pathname === "/about") return true;
    if (
      (item.sectionId === "featured-works" || item.path === "/projects") &&
      (pathname === "/projects" ||
        pathname?.startsWith("/work") ||
        pathname === "/works")
    )
      return true;
    return false;
  };

  const scrollToConnect = () => {
    setMobileOpen(false);
    if (pathname !== "/") {
      router.push("/#connect");
    } else {
      const el = document.getElementById("connect");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => {
                if (pathname !== "/") {
                  router.push("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <span className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center text-sm font-bold tracking-tight">
                VR
              </span>
              <div className="hidden sm:flex flex-col -gap-0.5">
                <span className="text-sm font-semibold text-zinc-900 leading-tight">
                  Vinay Ratnakar
                </span>
                <span className="text-[11px] text-zinc-400 leading-tight">
                  Creative Developer
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="relative px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer group"
                  >
                    <span
                      className={`text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                        active
                          ? "text-zinc-900 font-semibold"
                          : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Active underline */}
                    {active && (
                      <motion.div
                        layoutId="navActiveBar"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-zinc-900 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollToConnect}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 text-white text-[13px] font-medium hover:bg-zinc-800 active:scale-[0.97] transition-all duration-200 shadow-sm cursor-pointer"
              >
                Let&apos;s Talk
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[2px] bg-zinc-700 rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-[2px] bg-zinc-700 rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[2px] bg-zinc-700 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-zinc-200 z-40 md:hidden shadow-lg"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`text-left px-4 py-3 rounded-lg text-[14px] font-medium transition-all cursor-pointer ${
                    active
                      ? "text-zinc-900 bg-zinc-100 font-semibold"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <button
              onClick={scrollToConnect}
              className="mt-2 px-4 py-2.5 rounded-full bg-zinc-900 text-white text-[13px] font-semibold text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Let&apos;s Talk
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}