"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section id="projects" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderTop: '1px solid var(--border)' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="group"
                style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '6px', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 className="font-medium text-[var(--text)]" style={{ fontSize: '1.05rem' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, marginLeft: '1rem' }}>
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="font-mono hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                      >
                        github
                      </a>
                    )}
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="font-mono hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                      >
                        live
                      </a>
                    )}
                    <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.65' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono"
                      style={{ fontSize: '0.7rem', padding: '0.3rem 0.65rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-secondary)' }}
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
