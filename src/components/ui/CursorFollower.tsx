"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followPos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      if (followRef.current) {
        followPos.current.x += (mousePos.current.x - followPos.current.x) * 0.2;
        followPos.current.y += (mousePos.current.y - followPos.current.y) * 0.2;

        followRef.current.style.left = `${followPos.current.x}px`;
        followRef.current.style.top = `${followPos.current.y}px`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-screen"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
        }}
      />

      {/* Following ring */}
      <div
        ref={followRef}
        className="fixed w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-50 mix-blend-screen"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0.6,
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
        }}
      />
    </>
  );
}
