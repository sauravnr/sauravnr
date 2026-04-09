"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    fontFamily: 'var(--font-code), monospace',
    fontSize: '0.875rem',
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderTop: '1px solid var(--border)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] flex items-center" style={{ gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '4px', height: '16px', backgroundColor: 'var(--accent)', borderRadius: '9999px' }} />
            // contact
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1rem' }}>
            Have a project in mind? Let&apos;s talk.
          </p>

          <div className="contact-grid">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="name"
                style={inputStyle}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email"
                style={inputStyle}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={2000}
                  placeholder="message"
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                />
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'right', marginTop: '0.35rem' }}>
                  {formData.message.length} / 2000
                </p>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "sent"}
                  className="font-mono hover:opacity-90 transition-opacity"
                  style={{ padding: '0.85rem 2.5rem', backgroundColor: 'var(--accent)', color: 'var(--bg)', borderRadius: '6px', fontSize: '0.875rem', border: 'none', cursor: 'pointer', opacity: (status === 'loading' || status === 'sent') ? 0.5 : 1 }}
                >
                  {status === "loading"
                    ? "sending..."
                    : status === "sent"
                      ? "sent \u2713"
                      : status === "error"
                        ? "failed \u2014 retry"
                        : "send message"}
                </button>
              </div>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                  links
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { label: "github", url: SOCIAL_LINKS.github },
                    { label: "linkedin", url: SOCIAL_LINKS.linkedin },
                    { label: "twitter", url: SOCIAL_LINKS.twitter },
                    {
                      label: "email",
                      url: "mailto:" + SOCIAL_LINKS.email,
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono hover:text-[var(--accent)] transition-colors"
                      style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}
                    >
                      → {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '6px' }}>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                  status
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                  <span className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--text)' }}>
                    available for work
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '6px' }}>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                  resume
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="font-mono hover:text-[var(--accent)] transition-colors"
                  style={{ fontSize: '0.875rem', color: 'var(--text)', cursor: 'pointer', textDecoration: 'none' }}
                >
                  ↓ download cv
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
