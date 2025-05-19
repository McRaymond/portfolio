import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/about"
import { SkillsSection } from "@/components/skill-badge"
import { ContactSection } from "@/components/contact-form"
import { CompanySection } from "@/components/Company"
import { ProjectSection } from "@/components/project-card"
import { StaggerChildren } from "@/components/animations/stagger-children"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Landing Hero */}
      <HeroSection />

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Skills */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects */}
      <section id="projects" className="py-12">
        <ProjectSection />
      </section>

      <section id="company">
        <CompanySection />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>

    </main>
  )
}
