"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

function Lightbox({
  images,
  title,
  startIndex,
  onClose,
}: {
  images: string[];
  title: string;
  startIndex: number;
  onClose: () => void;
}) {
  const [active, setActive] = useState(startIndex);

  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.88)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1rem 1.5rem",
        }}
      >
        <span className="font-mono" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
          {title}  {active + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          style={{
            background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px",
            color: "rgba(255,255,255,0.7)", cursor: "pointer",
            padding: "0.25rem 0.6rem", fontSize: "1rem", lineHeight: 1,
          }}
        >
          
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "min(900px, 92vw)", width: "100%" }}
      >
        <img
          src={images[active]}
          alt={`${title} screenshot ${active + 1}`}
          style={{
            width: "100%", display: "block", maxHeight: "78vh",
            objectFit: "contain", borderRadius: "6px",
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: "absolute", left: "-3rem", top: "50%", transform: "translateY(-50%)",
                background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px",
                color: "rgba(255,255,255,0.8)", cursor: "pointer", padding: "0.5rem 0.75rem",
                fontSize: "1rem",
              }}
            >
              
            </button>
            <button
              onClick={next}
              style={{
                position: "absolute", right: "-3rem", top: "50%", transform: "translateY(-50%)",
                background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px",
                color: "rgba(255,255,255,0.8)", cursor: "pointer", padding: "0.5rem 0.75rem",
                fontSize: "1rem",
              }}
            >
              
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ display: "flex", gap: "0.5rem", marginTop: "1.25rem" }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: "7px", height: "7px", borderRadius: "50%", border: "none", padding: 0,
                backgroundColor: i === active ? "var(--accent)" : "rgba(255,255,255,0.25)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [lightbox, setLightbox] = useState<{ images: string[]; title: string } | null>(null);

  return (
    <section id="projects" style={{ paddingTop: "6rem", paddingBottom: "6rem", borderTop: "1px solid var(--border)" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] flex items-center gap-3" style={{ marginBottom: "3rem" }}>
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="group"
                style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "6px", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                    <h3 className="font-medium text-[var(--text)]" style={{ fontSize: "1.05rem" }}>
                      {project.title}
                    </h3>
                    {project.status === "live" && (
                      <span className="font-mono" style={{ fontSize: "0.65rem", padding: "0.2rem 0.5rem", backgroundColor: "var(--accent-muted)", border: "1px solid var(--accent)", borderRadius: "4px", color: "var(--accent)" }}>
                        live
                      </span>
                    )}
                    {project.status === "in-progress" && (
                      <span className="font-mono" style={{ fontSize: "0.65rem", padding: "0.2rem 0.5rem", backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", color: "var(--text-secondary)" }}>
                        in progress
                      </span>
                    )}
                    {project.status === "private" && (
                      <span className="font-mono" style={{ fontSize: "0.65rem", padding: "0.2rem 0.5rem", backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", color: "var(--text-secondary)" }}>
                        private
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0, marginLeft: "1rem" }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="font-mono hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: "0.7rem", color: "var(--text-secondary)", textDecoration: "none" }}
                      >
                        github 
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="font-mono hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: "0.7rem", color: "var(--accent)", textDecoration: "none" }}
                      >
                        {project.demo.includes("play.google.com") ? "play store " : "live "}
                      </a>
                    )}
                    <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.25rem", lineHeight: "1.65" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono"
                        style={{ fontSize: "0.7rem", padding: "0.3rem 0.65rem", backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", color: "var(--text-secondary)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.images && project.images.length > 0 && (
                    <button
                      onClick={() => setLightbox({ images: project.images, title: project.title })}
                      className="font-mono"
                      style={{
                        fontSize: "0.7rem", padding: "0.3rem 0.75rem",
                        border: "1px solid var(--border)", borderRadius: "4px",
                        backgroundColor: "transparent", color: "var(--text-secondary)",
                        cursor: "pointer", whiteSpace: "nowrap",
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      screenshots [{project.images.length}]
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          title={lightbox.title}
          startIndex={0}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
