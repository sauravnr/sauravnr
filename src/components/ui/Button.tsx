"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

interface RipplePos {
  x: number;
  y: number;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const { isDark } = useTheme();
  const [ripples, setRipples] = useState<RipplePos[]>([]);

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 overflow-hidden rounded-full whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--page-bg)] disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary: isDark
      ? "bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 text-slate-950 shadow-[0_14px_30px_-18px_rgba(45,212,191,0.8)] hover:shadow-[0_18px_40px_-20px_rgba(56,189,248,0.9)]"
      : "bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600 text-white shadow-[0_14px_30px_-18px_rgba(14,165,233,0.6)] hover:shadow-[0_18px_40px_-20px_rgba(14,165,233,0.8)]",
    secondary: isDark
      ? "bg-gradient-to-r from-amber-300 to-orange-500 text-slate-950 shadow-[0_12px_24px_-16px_rgba(251,191,36,0.8)] hover:shadow-[0_16px_34px_-18px_rgba(249,115,22,0.9)]"
      : "bg-gradient-to-r from-amber-400 to-orange-600 text-white shadow-[0_12px_24px_-16px_rgba(249,115,22,0.55)] hover:shadow-[0_16px_34px_-18px_rgba(249,115,22,0.8)]",
    outline: isDark
      ? "border border-slate-600 text-slate-100 hover:border-teal-400/70 hover:text-white hover:bg-teal-400/10"
      : "border border-slate-300 text-slate-900 hover:border-teal-500/70 hover:bg-teal-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-w-fit",
    md: "px-6 py-3 text-base min-w-fit",
    lg: "px-6 md:px-8 lg:px-10 py-4 md:text-lg lg:text-xl min-w-fit",
    xl: "h-12 md:h-14 px-12 text-base md:text-lg lg:text-xl min-w-fit",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r !== newRipple));
    }, 600);

    props.onClick?.(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      type="button"
      disabled={props.disabled || false}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>

      {/* Ripple effects */}
      {ripples.map((ripple, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white/50"
          initial={{ width: 10, height: 10, opacity: 1 }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}
