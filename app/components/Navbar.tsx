"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// Nav items in order: Home -> About -> Projects -> Tech Stack -> Connect
const navItems = [
  { name: "Home", sectionId: "home", path: "/#home" },
  { name: "About", sectionId: "about", path: "/#about" },
  { name: "Projects", sectionId: "featured-works", path: "/#featured-works" },
  { name: "Tech Stack", sectionId: "skills", path: "/#skills" },
  { name: "Connect", sectionId: "connect", path: "/#connect" },
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
      item.path === "/projects" &&
      (pathname === "/projects" || pathname?.startsWith("/work"))
    )
      return true;
    return false;
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        animate={{
          backgroundColor: scrolled
            ? "rgba(20, 20, 20, 0.92)"
            : "rgba(20, 20, 20, 0)",
          borderColor: scrolled
            ? "rgba(39, 39, 42, 0.8)"
            : "rgba(39, 39, 42, 0)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.55)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-1.5 backdrop-blur-xl border rounded-full"
      >
        {/* NAV ITEMS */}
        {navItems.map((item) => {
          const active = isItemActive(item);

          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className="relative px-4 sm:px-5 py-1.5 sm:py-1.5 rounded-full transition cursor-pointer group"
            >
              <span
                className={`relative z-10 font-semibold text-[13px] sm:text-[14px] tracking-[0.08em] transition-colors duration-200 whitespace-nowrap ${active ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                {item.name.toUpperCase()}
              </span>

              {/* Animated glowing underline */}
              {active && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0.5 left-3 right-3 sm:left-4 sm:right-4 h-[2px]"
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