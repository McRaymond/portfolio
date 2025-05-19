import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/about"
import { SkillsSection } from "@/components/skill-badge"
import { ContactSection } from "@/components/contact-form"
import { CompanySection } from "@/components/Company"
import { ProjectCard, projects } from "@/components/project-card"
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
        <StaggerChildren className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </StaggerChildren>
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>

      <section id="company">
        <CompanySection />
      </section>
    </main>
  )
}
