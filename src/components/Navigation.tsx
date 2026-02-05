"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}

export function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const ignoreObserverUntilRef = useRef(0);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }))
      .filter((item): item is { id: string; el: HTMLElement } => !!item.el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          if (Date.now() < ignoreObserverUntilRef.current) return;
          const id = visible[0].target.id;
          setActiveSection(id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.45, 0.6],
        rootMargin: "-30% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section.el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    ignoreObserverUntilRef.current = Date.now() + 700;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useLayoutEffect(() => {
    const updateUnderline = () => {
      const container = navContainerRef.current;
      const activeEl = navItemRefs.current[activeSection];
      if (!container || !activeEl) {
        setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const left = activeRect.left - containerRect.left + 12;
      const width = activeRect.width - 24;

      setUnderlineStyle({ left, width, opacity: 1 });
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeSection]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300
        ${
          isDark
            ? "bg-slate-950/70 border-white/10 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.7)]"
            : "bg-white/80 border-slate-200/70 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.18)]"
        }
      `}
    >
      <div className="w-full h-16 md:h-[72px]">
        {/* Mobile layout */}
        <div className="flex items-center justify-between w-full md:hidden px-6 sm:px-8">
          <button
            onClick={() => handleNavClick("home")}
            className={`text-lg font-semibold tracking-tight transition-colors
              ${isDark ? "text-teal-300 hover:text-teal-200" : "text-teal-700 hover:text-teal-600"}
            `}
            aria-label="Go to home"
          >
            SN
          </button>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all
                ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-slate-900/5 hover:bg-slate-900/10"}
              `}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-teal-200" />
              ) : (
                <MoonIcon className="h-5 w-5 text-slate-700" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`p-2 rounded-lg transition-all
                ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-slate-900/5 hover:bg-slate-900/10"}
              `}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block relative w-full h-full">
          <button
            onClick={() => handleNavClick("home")}
            className={`absolute left-6 sm:left-8 lg:left-12 2xl:left-16 top-1/2 -translate-y-1/2 text-lg md:text-xl font-semibold tracking-tight transition-colors
              ${isDark ? "text-teal-300 hover:text-teal-200" : "text-teal-700 hover:text-teal-600"}
            `}
            aria-label="Go to home"
          >
            SN
          </button>

          <div
            ref={navContainerRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2.5 text-sm font-medium transition-colors
                  ${
                    activeSection === link.id
                      ? isDark
                        ? "text-teal-200"
                        : "text-teal-700"
                      : isDark
                        ? "text-slate-300 hover:text-teal-200 hover:bg-white/5"
                        : "text-slate-600 hover:text-teal-700 hover:bg-slate-900/5"
                  }
                `}
                ref={(el) => {
                  navItemRefs.current[link.id] = el;
                }}
              >
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
            <motion.span
              className={`absolute bottom-0 h-0.5 rounded-full
                ${isDark ? "bg-teal-300/70" : "bg-teal-600/70"}
              `}
              initial={false}
              animate={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                opacity: underlineStyle.opacity,
              }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={toggleTheme}
            className={`absolute right-6 sm:right-8 lg:right-12 2xl:right-16 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all
              ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-slate-900/5 hover:bg-slate-900/10"}
            `}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-teal-200" />
            ) : (
              <MoonIcon className="h-5 w-5 text-slate-700" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden absolute left-0 right-0 z-50 px-4 pb-4
                ${
                  isDark
                    ? "bg-slate-950/95 border-white/10"
                    : "bg-white/95 border-slate-200/70"
                }
              `}
            >
              <div className="mx-auto max-w-6xl pt-2">
                <div
                  className={`rounded-2xl border p-3
                    ${isDark ? "border-white/10 bg-white/5" : "border-slate-200/70 bg-white"}
                  `}
                >
                  <div className="grid grid-cols-1 gap-1">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors
                          ${
                            activeSection === link.id
                              ? isDark
                                ? "bg-teal-400/15 text-teal-200"
                                : "bg-teal-500/10 text-teal-700"
                              : isDark
                                ? "text-slate-200 hover:bg-white/10"
                                : "text-slate-700 hover:bg-slate-100"
                          }
                        `}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
