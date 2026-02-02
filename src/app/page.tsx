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
    <main className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <CursorFollower />
      <Navigation />

      <section id="home" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Hero />
      </section>

      <section id="about" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <About />
      </section>

      <section id="skills" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Skills />
      </section>

      <section id="projects" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Projects />
      </section>

      <section id="contact" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>

      <footer className="relative z-10 border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          © 2024 Saurav Niraula. Built with React, Next.js, Tailwind CSS, and
          Framer Motion.
        </p>
      </footer>
    </main>
  );
}
