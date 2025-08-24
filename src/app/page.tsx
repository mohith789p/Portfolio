"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="relative">
      {/* Page transitions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-secondary/30">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/30">
          <ContactSection />
        </section>

        {/* Scroll to top button */}
        <ScrollToTop />
      </motion.div>
    </div>
  );
}
