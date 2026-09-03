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

// Nav items in order: Home -> About -> Projects -> Tech Stack -> Connect
const navItems: NavItem[] = [
  { name: "Home", shortName: "Home", sectionId: "home", path: "/#home" },
  { name: "About", shortName: "About", sectionId: "about", path: "/#about" },
  { name: "Projects", shortName: "Projects", sectionId: "featured-works", path: "/#featured-works" },
  { name: "Tech Stack", shortName: "Stack", sectionId: "skills", path: "/#skills" },
  { name: "Connect", shortName: "Connect", sectionId: "connect", path: "/#connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("home");

  // Scroll-spy: detects which section is in view and handles navbar pill transition
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      const sectionIds = ["home", "about", "featured-works", "skills", "connect"];
      const triggerPoint = window.innerHeight * 0.35; // 35% from viewport top

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

      // Check if user is at the bottom of the page
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
      (pathname === "/projects" || pathname?.startsWith("/work") || pathname === "/works")
    )
      return true;
    return false;
  };

  const showPill = scrolled || pathname !== "/";

  return (
    <div className="fixed top-3.5 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.25rem)]">
      <motion.nav
        animate={{
          backgroundColor: showPill
            ? "rgba(20, 20, 20, 0.94)"
            : "rgba(20, 20, 20, 0)",
          borderColor: showPill
            ? "rgba(39, 39, 42, 0.8)"
            : "rgba(39, 39, 42, 0)",
          boxShadow: showPill
            ? "0 8px 32px rgba(0, 0, 0, 0.55)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex items-center gap-0.5 sm:gap-1.5 px-1.5 py-1 sm:px-4 sm:py-1.5 backdrop-blur-xl border rounded-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* NAV ITEMS */}
        {navItems.map((item) => {
          const active = isItemActive(item);

          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className="relative px-2 sm:px-3.5 md:px-5 py-1 sm:py-1.5 rounded-full transition cursor-pointer group shrink-0"
            >
              <span
                className={`relative z-10 font-semibold text-[11px] sm:text-[13px] md:text-[14px] tracking-[0.04em] sm:tracking-[0.08em] transition-colors duration-200 whitespace-nowrap ${
                  active ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span className="hidden sm:inline">{item.name.toUpperCase()}</span>
                <span className="sm:hidden">{item.shortName.toUpperCase()}</span>
              </span>

              {/* Animated glowing underline */}
              {active && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0.5 left-1.5 right-1.5 sm:left-4 sm:right-4 h-[2px]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Glow layer */}
                  <div className="absolute inset-0 bg-[#e8dcc8] blur-[5px] opacity-70 rounded-full" />
                  {/* Solid line */}
                  <div className="relative h-full bg-[#e8dcc8] rounded-full" />
                </motion.div>
              )}
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}