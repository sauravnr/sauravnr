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
    <main className="relative bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <CursorFollower />
      <Navigation />

      <section id="home" className="relative z-10">
        <Hero />
      </section>

      <section id="about" className="relative z-10">
        <About />
      </section>

      <section id="skills" className="relative z-10">
        <Skills />
      </section>

      <section id="projects" className="relative z-10">
        <Projects />
      </section>

      <section id="contact" className="relative z-10">
        <Contact />
      </section>

      <footer className="relative z-10 border-t border-white/10 py-8 px-4 text-center">
        <p className="text-gray-400">
          © 2024 Saurav Niraula. Built with React, Next.js, Tailwind CSS, and
          Framer Motion.
        </p>
      </footer>
    </main>
  );
}
