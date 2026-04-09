"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const skillGroups = [
  {
    label: "frontend",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    label: "backend",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    label: "tools & practices",
    skills: ["API Integration", "UI/UX Design", "Git", "REST APIs"],
  },
];

export function Skills() {
  return (
    <section id="skills" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderTop: '1px solid var(--border)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] flex items-center gap-3" style={{ marginBottom: '3rem' }}>
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // skills
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider" style={{ marginBottom: '1rem' }}>
                  {group.label}
                </h3>
                <div className="flex flex-wrap" style={{ gap: '0.75rem' }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                      style={{ padding: '0.6rem 1.1rem', cursor: 'pointer' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
