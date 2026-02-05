"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  onClick,
}: GlassCardProps) {
  const { isDark } = useTheme();

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      onClick={onClick}
      className={`
        relative rounded-2xl backdrop-blur-xl border
        ${
          isDark
            ? "bg-slate-900/50 border-white/10 hover:border-teal-400/40 hover:bg-slate-900/70 shadow-[0_18px_50px_-30px_rgba(8,47,73,0.9)]"
            : "bg-white/75 border-slate-200/70 hover:border-teal-500/40 hover:bg-white/90 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.25)]"
        }
        transition-all duration-300 will-change-transform
        ${hover ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
