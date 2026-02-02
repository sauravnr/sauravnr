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
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center
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
          {SKILLS.map((skill, index) => (
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

                {/* Animated progress bar */}
                <div
                  className={`h-2 rounded-full overflow-hidden
                  ${isDark ? "bg-white/10" : "bg-white/20"}
                `}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
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

        {/* Circular skills visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <GlassCard className="p-12">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Center circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="30"
                  fill="none"
                  stroke={isDark ? "#06b6d4" : "#22d3ee"}
                  strokeWidth="2"
                  opacity="0.5"
                />

                {/* Skill circles */}
                {SKILLS.map((skill, index) => {
                  const angle = (index / SKILLS.length) * Math.PI * 2;
                  const radius = 70;
                  const x = 100 + Math.cos(angle) * radius;
                  const y = 100 + Math.sin(angle) * radius;

                  return (
                    <g key={skill.name}>
                      {/* Line to center */}
                      <line
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke={isDark ? "#06b6d4" : "#22d3ee"}
                        strokeWidth="1"
                        opacity="0.3"
                      />
                      {/* Skill circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill="none"
                        stroke={isDark ? "#0ea5e9" : "#0284c7"}
                        strokeWidth="2"
                      />
                      {/* Text */}
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs"
                        fill={isDark ? "#e0f2fe" : "#164e63"}
                        style={{ pointerEvents: "none" }}
                      >
                        {skill.level}%
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className={`text-sm font-semibold
                    ${isDark ? "text-cyan-300" : "text-cyan-600"}
                  `}
                  >
                    8+ Skills
                  </p>
                  <p
                    className={`text-xs
                    ${isDark ? "text-gray-400" : "text-gray-600"}
                  `}
                  >
                    Interactive
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
