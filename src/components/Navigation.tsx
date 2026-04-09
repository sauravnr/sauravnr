"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/lib/theme-context";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] backdrop-blur-md bg-[var(--bg)]" style={{ opacity: 1 }}>
      <Container wide className="h-14 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-mono text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ cursor: 'pointer', color: 'var(--text)' }}
        >
          <span style={{ color: 'var(--accent)' }}>{"{ "}</span>saurav<span style={{ color: 'var(--accent)' }}>{" }"}</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
              style={{ cursor: 'pointer' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            style={{ cursor: 'pointer' }}
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? "[close]" : "[menu]"}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <Container wide className="py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors text-left py-1"
              >
                → {link.label}
              </button>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
}
