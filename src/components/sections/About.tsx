"use client";

import React from "react";
import { motion } from "framer-motion";
import { BIO, TIMELINE } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--border)]">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] mb-8 flex items-center gap-3">
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // about
          </h2>

          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-12 whitespace-pre-line">
            {BIO}
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-16 max-w-sm">
            {[
              { value: "2+", label: "years exp" },
              { value: "5+", label: "projects" },
              { value: "8+", label: "skills" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-6 border border-[var(--border)] rounded bg-[var(--surface)]"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--accent)] mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-mono text-sm text-[var(--accent)] mb-6 flex items-center gap-3">
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // journey
          </h3>

          <div className="space-y-8">
            {TIMELINE.map((item) => (
              <div key={item.year} className="flex gap-6">
                <span className="font-mono text-sm text-[var(--accent)] shrink-0 pt-0.5 w-12">
                  {item.year}
                </span>
                <div className="border-l border-[var(--border)] pl-6">
                  <h4 className="font-medium text-[var(--text)] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
