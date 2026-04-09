"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <img
          src={images[active]}
          alt={`${title} screenshot ${active + 1}`}
          style={{ width: '100%', display: 'block', maxHeight: '320px', objectFit: 'cover' }}
        />
        {images.length > 1 && (
          <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', display: 'flex', gap: '0.4rem' }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%', border: 'none',
                  backgroundColor: i === active ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer', padding: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flex: 1, padding: 0, border: `1px solid ${i === active ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', backgroundColor: 'transparent',
              }}
            >
              <img src={img} alt={`thumb ${i + 1}`} style={{ width: '100%', height: '48px', objectFit: 'cover', display: 'block' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <h3 className="font-medium text-[var(--text)]" style={{ fontSize: '1.05rem' }}>
                      {project.title}
                    </h3>
                    {project.status === 'live' && (
                      <span className="font-mono" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--accent-muted)', border: '1px solid var(--accent)', borderRadius: '4px', color: 'var(--accent)' }}>
                        live
                      </span>
                    )}
                    {project.status === 'in-progress' && (
                      <span className="font-mono" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                        in progress
                      </span>
                    )}
                    {project.status === 'private' && (
                      <span className="font-mono" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                        private
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, marginLeft: '1rem' }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="font-mono hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                      >
                        github ↗
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="font-mono hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: '0.7rem', color: 'var(--accent)', textDecoration: 'none' }}
                      >
                        live ↗
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

                <ImageGallery images={project.images ?? []} title={project.title} />

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
