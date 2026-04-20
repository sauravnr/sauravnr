"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const codeLines = [
  { indent: 0, text: "const developer = {", color: "text-[var(--text)]" },
  {
    indent: 1,
    text: 'name: "Saurav Niraula",',
    color: "text-[var(--text-secondary)]",
  },
  {
    indent: 1,
    text: 'role: "Full-Stack Dev",',
    color: "text-[var(--text-secondary)]",
  },
  { indent: 1, text: "stack: [", color: "text-[var(--text-secondary)]" },
  { indent: 2, text: '"React",', color: "text-[var(--accent)]" },
  { indent: 2, text: '"React Native",', color: "text-[var(--accent)]" },
  { indent: 2, text: '"Node.js",', color: "text-[var(--accent)]" },
  { indent: 2, text: '"MongoDB",', color: "text-[var(--accent)]" },
  { indent: 1, text: "],", color: "text-[var(--text-secondary)]" },
  {
    indent: 1,
    text: 'location: "Nepal",',
    color: "text-[var(--text-secondary)]",
  },
  { indent: 1, text: 'status: "available",', color: "text-[var(--accent)]" },
  { indent: 0, text: "}", color: "text-[var(--text)]" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-14">
      <Container wide className="py-20">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-16 items-center">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-sm text-[var(--accent)] mb-5">
              hi, i&apos;m
            </p>

            <h1 className="font-mono text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--text)] mb-4 tracking-tight leading-[1.1]">
              Saurav Niraula
              <span className="text-[var(--accent)] cursor-blink">_</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-5 leading-relaxed">
              Full-Stack Developer focused on clean UX and reliable systems.
            </p>

            <p
              className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed"
              style={{ marginBottom: "3.5rem" }}
            >
              I build practical web and mobile apps that solve real-world
              problems. React, React Native, MERN stack - turning complex ideas
              into clean products people actually use.
            </p>

            <div className="flex flex-wrap" style={{ gap: "1.25rem" }}>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-mono font-medium hover:opacity-90 transition-opacity"
                style={{
                  fontSize: "0.95rem",
                  padding: "0.85rem 2rem",
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                view work
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                style={{
                  fontSize: "0.95rem",
                  padding: "0.85rem 2rem",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                get in touch
              </button>
            </div>
          </motion.div>

          {/* Right - code block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--surface)]">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-xs text-[var(--text-secondary)] ml-3">
                  developer.ts
                </span>
              </div>
              {/* code */}
              <div className="p-5">
                <div className="font-mono text-xs sm:text-sm leading-7">
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="select-none text-[var(--border)] w-6 shrink-0 text-right mr-4">
                        {i + 1}
                      </span>
                      <span
                        className={line.color}
                        style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                      >
                        {line.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
