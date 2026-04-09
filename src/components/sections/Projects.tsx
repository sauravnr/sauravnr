"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section id="projects" style={{ paddingTop: '8rem', paddingBottom: '8rem', borderTop: '1px solid var(--border)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] flex items-center gap-3" style={{ marginBottom: '3rem' }}>
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // projects
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="group border border-[var(--border)] rounded hover:border-[var(--accent)] transition-colors"
                style={{ padding: '2rem' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[var(--text-secondary)] shrink-0 ml-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded text-[var(--text-secondary)]"
                    >
                      {tech}
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
