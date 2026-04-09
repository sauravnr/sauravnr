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

  const inputClass =
    "w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded font-mono text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors";

  return (
    <section id="contact" className="py-24 border-t border-[var(--border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] mb-4 flex items-center gap-3">
            <span className="inline-block w-1 h-4 bg-[var(--accent)] rounded-full" />
            // contact
          </h2>
          <p className="text-[var(--text-secondary)] mb-10">
            Have a project in mind? Let&apos;s talk.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email"
                className={inputClass}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="message"
                className={inputClass + " resize-none"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "sent"}
                className="font-mono text-sm px-6 py-3 bg-[var(--accent)] text-[var(--bg)] rounded hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "loading"
                  ? "sending..."
                  : status === "sent"
                    ? "sent ✓"
                    : status === "error"
                      ? "failed — retry"
                      : "send message"}
              </button>
            </form>

            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-3">
                  links
                </h3>
                <div className="space-y-2">
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
                      className="block font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      → {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 border border-[var(--border)] rounded">
                <p className="font-mono text-xs text-[var(--text-secondary)] mb-2">
                  status
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span className="font-mono text-sm text-[var(--text)]">
                    available for work
                  </span>
                </div>
              </div>

              <div className="p-4 border border-[var(--border)] rounded">
                <p className="font-mono text-xs text-[var(--text-secondary)] mb-2">
                  resume
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="font-mono text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors"
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
