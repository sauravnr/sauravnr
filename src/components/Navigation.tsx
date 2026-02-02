"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

export function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md
        ${isDark ? "bg-gray-900/50 border-white/10" : "bg-white/50 border-white/20"}
        border-b transition-all duration-300
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`text-2xl font-bold
            ${isDark ? "text-cyan-400" : "text-cyan-500"}
          `}
        >
          SN
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-sm font-medium transition-colors
                ${
                  activeSection === link.id
                    ? isDark
                      ? "text-cyan-400"
                      : "text-cyan-500"
                    : isDark
                      ? "text-gray-400 hover:text-cyan-300"
                      : "text-gray-600 hover:text-cyan-400"
                }
              `}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="underline"
                  className={`absolute bottom-0 left-0 right-0 h-0.5
                    ${isDark ? "bg-cyan-400" : "bg-cyan-500"}
                  `}
                />
              )}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-all
            ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-white/20 hover:bg-white/30"}
          `}
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </motion.button>
      </div>
    </motion.nav>
  );
}
