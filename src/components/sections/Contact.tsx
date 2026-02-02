"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/lib/theme-context";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: SOCIAL_LINKS.github },
    { name: "LinkedIn", icon: "💼", url: SOCIAL_LINKS.linkedin },
    { name: "Twitter", icon: "𝕏", url: SOCIAL_LINKS.twitter },
    { name: "Email", icon: "✉️", url: `mailto:${SOCIAL_LINKS.email}` },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center
            ${isDark ? "text-white" : "text-gray-900"}
          `}
        >
          Let's Work Together
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2
                    ${isDark ? "text-cyan-300" : "text-cyan-600"}
                  `}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg backdrop-blur-lg
                      ${
                        isDark
                          ? "bg-white/8 border-white/15 text-white placeholder-gray-400"
                          : "bg-white/15 border-white/30 text-gray-900 placeholder-gray-600"
                      }
                      border transition-all duration-300
                      focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30
                    `}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2
                    ${isDark ? "text-cyan-300" : "text-cyan-600"}
                  `}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg backdrop-blur-lg
                      ${
                        isDark
                          ? "bg-white/8 border-white/15 text-white placeholder-gray-400"
                          : "bg-white/15 border-white/30 text-gray-900 placeholder-gray-600"
                      }
                      border transition-all duration-300
                      focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30
                    `}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2
                    ${isDark ? "text-cyan-300" : "text-cyan-600"}
                  `}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg backdrop-blur-lg
                      ${
                        isDark
                          ? "bg-white/8 border-white/15 text-white placeholder-gray-400"
                          : "bg-white/15 border-white/30 text-gray-900 placeholder-gray-600"
                      }
                      border transition-all duration-300
                      focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30
                      resize-none
                    `}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50">
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}

                <motion.div
                  animate={submitted ? { scale: 1 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    type="submit"
                    disabled={submitted || loading}
                  >
                    {submitted
                      ? "✓ Message Sent!"
                      : loading
                        ? "Sending..."
                        : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </GlassCard>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <GlassCard className="p-8">
              <h3
                className={`text-xl font-bold mb-6
                ${isDark ? "text-white" : "text-gray-900"}
              `}
              >
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-lg text-center transition-all
                      ${
                        isDark
                          ? "bg-white/5 hover:bg-cyan-500/20"
                          : "bg-white/10 hover:bg-cyan-400/20"
                      }
                    `}
                  >
                    <div className="text-3xl mb-2">{link.icon}</div>
                    <p
                      className={`text-sm font-medium
                      ${isDark ? "text-cyan-300" : "text-cyan-600"}
                    `}
                    >
                      {link.name}
                    </p>
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Resume Download */}
            <GlassCard className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <h3
                className={`text-xl font-bold mb-3
                ${isDark ? "text-white" : "text-gray-900"}
              `}
              >
                Get My Resume
              </h3>
              <p
                className={`text-sm mb-6
                ${isDark ? "text-gray-400" : "text-gray-600"}
              `}
              >
                Download my CV to learn more about my experience and skills.
              </p>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-6 py-3 rounded-lg
                  ${
                    isDark
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50"
                      : "bg-gradient-to-r from-purple-400 to-pink-500 hover:shadow-lg hover:shadow-purple-400/50"
                  }
                  text-white font-semibold transition-all duration-300
                `}
              >
                <span>📄</span>
                <span className="ml-2">Download CV</span>
              </motion.a>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
