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
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center
            ${isDark ? "text-white" : "text-gray-900"}
          `}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8 h-full">
              <p
                className={`text-lg leading-relaxed whitespace-pre-line
                ${isDark ? "text-gray-300" : "text-gray-700"}
              `}
              >
                {BIO}
              </p>
            </GlassCard>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-cyan-400" : "text-cyan-500"}
              `}
              >
                2+
              </div>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Years Experience
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-purple-400" : "text-purple-500"}
              `}
              >
                5+
              </div>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Projects Shipped
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-blue-400" : "text-blue-500"}
              `}
              >
                100%
              </div>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Client Focus
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2
                ${isDark ? "text-pink-400" : "text-pink-500"}
              `}
              >
                8+
              </div>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Tech Skills
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          <h3
            className={`text-2xl font-bold mb-8 text-center
            ${isDark ? "text-white" : "text-gray-900"}
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
                      ${isDark ? "text-cyan-400" : "text-cyan-500"}
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
                      ${isDark ? "text-white" : "text-gray-900"}
                    `}
                    >
                      {item.title}
                    </h5>
                    <p className={isDark ? "text-gray-400" : "text-gray-700"}>
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
