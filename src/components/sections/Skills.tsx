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
    <section id="skills" className="py-28 md:py-32 border-t border-[var(--border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] mb-10 flex items-center gap-3">
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // skills
          </h2>

          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs text-[var(--text-secondary)] mb-3 uppercase tracking-wider">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm px-4 py-2 border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
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
