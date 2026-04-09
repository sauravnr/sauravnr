import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-[var(--border)] py-8">
        <Container wide className="text-center">
          <p className="font-mono text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Saurav Niraula
          </p>
        </Container>
      </footer>
    </main>
  );
}
