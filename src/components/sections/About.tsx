"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "@/lib/theme-context";
import { TIMELINE, BIO } from "@/lib/constants";

export function About() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-24 flex justify-center"
    >
      <div className="w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-5xl font-semibold mb-12 text-center tracking-tight
            ${isDark ? "text-slate-100" : "text-slate-900"}
          `}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:max-w-xl md:justify-self-end"
          >
            <GlassCard className="p-8 h-full">
              <p
                className={`text-lg leading-relaxed whitespace-pre-line
                ${isDark ? "text-slate-300" : "text-slate-700"}
              `}
              >
                {BIO}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6 w-full md:max-w-xl md:justify-self-start"
          >
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-teal-300" : "text-teal-600"}
              `}
              >
                2+
              </div>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Years Experience
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-amber-300" : "text-amber-600"}
              `}
              >
                5+
              </div>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Projects Shipped
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-sky-300" : "text-sky-600"}
              `}
              >
                100%
              </div>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Client Focus
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-emerald-300" : "text-emerald-600"}
              `}
              >
                8+
              </div>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Tech Skills
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          <h3
            className={`text-2xl font-semibold mb-8 text-center
            ${isDark ? "text-slate-100" : "text-slate-900"}
          `}
          >
            My Journey
          </h3>

          <div className="space-y-8">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div
                    className={`md:text-right ${index % 2 === 1 ? "md:order-2 md:text-left" : "md:order-1"}`}
                  >
                    <h4
                      className={`text-3xl font-bold mb-2
                      ${isDark ? "text-teal-300" : "text-teal-600"}
                    `}
                    >
                      {item.year}
                    </h4>
                  </div>
                  <GlassCard
                    className={`p-6 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                  >
                    <h5
                      className={`text-xl font-semibold mb-2
                      ${isDark ? "text-slate-100" : "text-slate-900"}
                    `}
                    >
                      {item.title}
                    </h5>
                    <p className={isDark ? "text-slate-400" : "text-slate-700"}>
                      {item.description}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
