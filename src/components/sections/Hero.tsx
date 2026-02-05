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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-36 pb-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className={`absolute w-80 h-80 rounded-full opacity-20 mix-blend-screen left-1/2 -translate-x-1/2
            ${isDark ? "bg-teal-400" : "bg-teal-300"}
          `}
          style={{ top: "-15%" }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className={`absolute w-[24rem] h-[24rem] rounded-full opacity-[0.04] blur-3xl mix-blend-screen left-1/2 -translate-x-1/2
            ${isDark ? "bg-amber-300" : "bg-amber-200"}
          `}
          style={{ bottom: "-35%" }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-2xl px-6 sm:px-8 lg:px-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className={`mx-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border mb-5 text-sm md:text-base shadow-sm
            ${isDark ? "border-white/10 bg-white/5 text-slate-200" : "border-slate-200 bg-white/70 text-slate-700"}
          `}
        >
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-sm font-medium">Available for new projects</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight bg-clip-text text-transparent
            ${
              isDark
                ? "bg-gradient-to-r from-teal-200 via-cyan-300 to-sky-300"
                : "bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-700"
            }
          `}
        >
          Saurav Niraula
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-xl md:text-2xl mb-6 font-medium
            ${isDark ? "text-slate-200" : "text-slate-700"}
          `}
        >
          Full-Stack Developer focused on clean UX and reliable systems.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-lg mx-auto mb-12 leading-relaxed max-w-[60ch]
            ${isDark ? "text-slate-300" : "text-slate-600"}
          `}
        >
          I build practical web and mobile applications that solve real-world
          problems. With a strong focus on React and React Native, I turn
          complex ideas into clean, usable products that people enjoy using.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center !mt-10"
        >
          <Button
            variant="primary"
            size="xl"
            className="min-w-[240px] font-semibold !px-12 !h-14"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="min-w-[240px] font-semibold !px-12 !h-14"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>

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
