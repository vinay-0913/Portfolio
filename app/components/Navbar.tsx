"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Pill scroll effect — always active on every page
  useEffect(() => {
    const handlePillScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handlePillScroll, { passive: true });
    handlePillScroll();
    return () => window.removeEventListener("scroll", handlePillScroll);
  }, []);

  // Section spy — only on homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
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
      {/* ── Top Nav ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          top: scrolled ? 12 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <motion.div
          animate={{
            borderRadius: scrolled ? 9999 : 0,
            paddingLeft: scrolled ? 8 : 0,
            paddingRight: scrolled ? 8 : 0,
            width: scrolled ? "auto" : "100%",
            maxWidth: scrolled ? 620 : "100%",
            boxShadow: scrolled
              ? "0 2px 16px 0 rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)"
              : "none",
            backgroundColor: scrolled ? "rgba(250,250,248,0.95)" : "rgba(250,250,248,1)",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: scrolled ? 48 : 56,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: scrolled ? "none" : "1px solid var(--color-hairline)",
            pointerEvents: "auto",
            overflow: "hidden",
          }}
          className="relative w-full"
        >
          <div
            className="h-full flex items-center justify-center relative"
            style={{ paddingLeft: scrolled ? 16 : 24, paddingRight: scrolled ? 16 : 24 }}
          >
            {/* Desktop Nav — centered */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="relative px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer group"
                  >
                    <span
                      className={`transition-all duration-200 ${active
                        ? "text-[var(--color-ink)] font-medium"
                        : "text-[var(--color-ink)]/50 hover:text-[var(--color-ink)]"
                        }`}
                      style={{
                        fontSize: scrolled ? 15 : 16,
                        fontWeight: active ? 480 : 330,
                        letterSpacing: "-0.14px",
                      }}
                    >
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    {active && (
                      <motion.div
                        layoutId="navActivePill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ backgroundColor: scrolled ? "rgba(0,0,0,0.06)" : "#f1f1f1" }}
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

            {/* Mobile hamburger — always visible on small screens */}
            <div className="md:hidden flex items-center ml-auto">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex flex-col gap-1.5 p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block w-5 h-[2px] bg-[var(--color-ink)] rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-5 h-[2px] bg-[var(--color-ink)] rounded-full origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block w-5 h-[2px] bg-[var(--color-ink)] rounded-full"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-14 left-0 right-0 backdrop-blur-xl border-b border-[var(--color-hairline)] z-40 md:hidden origin-top"
            style={{ backgroundColor: "#fafaf8" }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navItems.map((item, i) => {
                const active = isItemActive(item);
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => handleNavigation(item)}
                    className={`text-left px-4 py-3 rounded-[var(--rounded-lg)] text-[18px] transition-all cursor-pointer ${active
                      ? "text-[var(--color-ink)] bg-[var(--color-surface-soft)] font-medium"
                      : "text-[var(--color-ink)]/40 hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)]"
                      }`}
                    style={{ fontWeight: active ? 480 : 330 }}
                  >
                    {item.name}
                  </motion.button>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={scrollToConnect}
                className="mt-3 px-5 py-3 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] text-[18px] text-center flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontWeight: 480 }}
              >
                Let&apos;s Talk
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
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}