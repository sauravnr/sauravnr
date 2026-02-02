"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
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
    "relative font-semibold transition-all duration-300 overflow-hidden rounded-lg inline-block whitespace-nowrap";

  const variants = {
    primary: isDark
      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 active:shadow-cyan-500/30"
      : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-400/50 active:shadow-cyan-400/30",
    secondary: isDark
      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50 active:shadow-purple-500/30"
      : "bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-400/50 active:shadow-purple-400/30",
    outline: isDark
      ? "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 active:bg-cyan-500/20"
      : "border-2 border-cyan-400 text-cyan-500 hover:bg-cyan-400/10 active:bg-cyan-400/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-w-fit",
    md: "px-6 py-3 text-base min-w-fit",
    lg: "px-6 md:px-8 lg:px-10 py-4 md:text-lg lg:text-xl min-w-fit",
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
