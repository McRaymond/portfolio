"use client"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"

export function AnimatedNavigation() {
  const activeSection = useScrollSpy(["about", "skills", "projects", "contact"], 100)

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <SmoothScrollLink href="#about" isActive={activeSection === "about"}>
        About
      </SmoothScrollLink>
      <SmoothScrollLink href="#skills" isActive={activeSection === "skills"}>
        Skills
      </SmoothScrollLink>
      <SmoothScrollLink href="#projects" isActive={activeSection === "projects"}>
        Projects
      </SmoothScrollLink>
      <SmoothScrollLink href="#contact" isActive={activeSection === "contact"}>
        Contact
      </SmoothScrollLink>
    </nav>
  )
}
