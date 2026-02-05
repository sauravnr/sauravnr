"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "@/lib/theme-context";
import { SKILLS } from "@/lib/constants";

export function Skills() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 flex justify-center"
    >
      <div className="w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center
            ${isDark ? "text-white" : "text-gray-900"}
          `}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {SKILLS.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3
                    className={`text-lg font-semibold
                    ${isDark ? "text-cyan-300" : "text-cyan-600"}
                  `}
                  >
                    {skill.name}
                  </h3>
                  <span
                    className={`text-sm font-bold
                    ${isDark ? "text-cyan-400" : "text-cyan-500"}
                  `}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div
                  className={`h-2 rounded-full overflow-hidden
                  ${isDark ? "bg-white/10" : "bg-white/20"}
                `}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className={`h-full rounded-full
                      ${
                        isDark
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                          : "bg-gradient-to-r from-cyan-400 to-blue-500"
                      }
                    `}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
