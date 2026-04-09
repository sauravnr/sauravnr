"use client";

import React from "react";
import { motion } from "framer-motion";
import { BIO, TIMELINE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderTop: '1px solid var(--border)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] flex items-center gap-3" style={{ marginBottom: '2.5rem' }}>
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // about
          </h2>

          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed whitespace-pre-line" style={{ marginBottom: '3.5rem' }}>
            {BIO}
          </p>

          <div className="grid grid-cols-3" style={{ gap: '2rem', marginBottom: '4.5rem' }}>
            {[
              { value: "2+", label: "years exp" },
              { value: "5+", label: "projects" },
              { value: "8+", label: "skills" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center border border-[var(--border)] rounded bg-[var(--surface)]"
                style={{ padding: '1.5rem' }}
              >
                <div className="font-mono font-bold text-[var(--accent)]" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-mono text-sm text-[var(--accent)]" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // journey
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {TIMELINE.map((item) => (
              <div key={item.year} style={{ display: 'flex', gap: '1.5rem' }}>
                <span className="font-mono text-sm text-[var(--accent)]" style={{ flexShrink: 0, paddingTop: '2px', width: '3rem' }}>
                  {item.year}
                </span>
                <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '1.5rem' }}>
                  <h4 className="font-medium text-[var(--text)]" style={{ marginBottom: '0.35rem' }}>
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
      </Container>
    </section>
  );
}
