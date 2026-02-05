import React from "react";
import { Navigation } from "@/components/Navigation";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[color:var(--page-bg)] text-[color:var(--page-fg)]">
      <AnimatedBackground />
      <CursorFollower />
      <Navigation />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="relative z-10 border-t border-[color:var(--panel-border)] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-[color:var(--muted)]">
            (c) 2024 Saurav Niraula. Built with React, Next.js, Tailwind CSS,
            and Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  );
}
