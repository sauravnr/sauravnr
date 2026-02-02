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
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      onClick={onClick}
      className={`
        relative rounded-2xl backdrop-blur-lg border
        ${
          isDark
            ? "bg-white/8 border-white/15 hover:border-cyan-500/60 hover:bg-white/12"
            : "bg-white/15 border-white/30 hover:border-cyan-400/60 hover:bg-white/20"
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
