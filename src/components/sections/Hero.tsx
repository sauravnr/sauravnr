"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/lib/theme-context";

export function Hero() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: [0, 0, 1, 1] }}
          className={`absolute w-96 h-96 rounded-full opacity-30 mix-blend-screen
            ${isDark ? "bg-cyan-500" : "bg-cyan-400"}
          `}
          style={{ top: "-10%", left: "-5%" }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: [0, 0, 1, 1] }}
          className={`absolute w-96 h-96 rounded-full opacity-30 mix-blend-screen
            ${isDark ? "bg-purple-500" : "bg-purple-400"}
          `}
          style={{ bottom: "-10%", right: "-5%" }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold text-cyan-400">
              SN
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent
            ${
              isDark
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                : "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
            }
          `}
        >
          Saurav Niraula
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-xl md:text-2xl mb-6 font-light
            ${isDark ? "text-cyan-200" : "text-cyan-300"}
          `}
        >
          Full-Stack Developer & Problem Solver
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-lg max-w-2xl mx-auto mb-12 leading-relaxed
            ${isDark ? "text-gray-300" : "text-gray-400"}
          `}
        >
          I build practical web and mobile applications that solve real-world
          problems. With a strong focus on React and React Native, I enjoy
          turning complex ideas into clean, usable products that actually get
          used.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center
          ${isDark ? "border-cyan-400" : "border-cyan-300"}
        `}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-2 rounded-full mt-2
              ${isDark ? "bg-cyan-400" : "bg-cyan-300"}
            `}
          />
        </div>
      </motion.div>
    </section>
  );
}
