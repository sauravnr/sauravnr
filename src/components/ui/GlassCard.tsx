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
      whileHover={hover ? { y: -8 } : {}}
      onClick={onClick}
      className={`
        relative rounded-2xl backdrop-blur-md border
        ${
          isDark
            ? "bg-white/5 border-white/10 hover:border-cyan-500/50"
            : "bg-white/10 border-white/20 hover:border-cyan-400/50"
        }
        transition-all duration-300
        ${hover ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
