"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/lib/theme-context";
import { PROJECTS } from "@/lib/constants";

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { isDark } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-96"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1200 }}
        className="w-full h-full"
      >
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="cursor-pointer w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
          }}
        >
          {/* Front of card */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              position: "absolute",
              inset: 0,
            }}
          >
            <GlassCard
              hover
              className={`p-8 h-full flex flex-col justify-between bg-gradient-to-br ${project.color}`}
            >
              <div>
                <h3
                  className={`text-2xl font-bold mb-3
                  ${isDark ? "text-white" : "text-gray-900"}
                `}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4
                  ${isDark ? "text-gray-400" : "text-gray-600"}
                `}
                >
                  Click to see details
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full backdrop-blur
                      ${
                        isDark
                          ? "bg-white/10 text-cyan-300"
                          : "bg-white/20 text-cyan-600"
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span
                    className={`text-xs px-3 py-1 rounded-full backdrop-blur
                      ${
                        isDark
                          ? "bg-white/10 text-cyan-300"
                          : "bg-white/20 text-cyan-600"
                      }
                    `}
                  >
                    +{project.technologies.length - 2}
                  </span>
                )}
              </div>
            </GlassCard>
          </div>

          {/* Back of card */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
            }}
          >
            <GlassCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <h3
                  className={`text-xl font-bold mb-3
                  ${isDark ? "text-white" : "text-gray-900"}
                `}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed
                  ${isDark ? "text-gray-300" : "text-gray-700"}
                `}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-2 py-1 rounded-full
                      ${
                        isDark
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-cyan-400/20 text-cyan-600"
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const { isDark } = useTheme();

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
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-center max-w-2xl mx-auto mb-16
            ${isDark ? "text-gray-400" : "text-gray-600"}
          `}
        >
          Click on any project card to flip and see more details. These projects
          showcase my ability to build practical, real-world applications.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Future 3D planets section (placeholder for evolution) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <GlassCard className="p-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <h3
              className={`text-2xl font-bold mb-4
              ${isDark ? "text-white" : "text-gray-900"}
            `}
            >
              Coming Soon: 3D Project Explorer
            </h3>
            <p
              className={`max-w-xl mx-auto mb-6
              ${isDark ? "text-gray-400" : "text-gray-600"}
            `}
            >
              Upcoming: Interactive 3D planet-style project exploration. Drag
              and explore projects in an immersive 3D environment.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
