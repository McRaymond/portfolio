"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"

interface SkillBadgeProps {
  name: string
}

function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      whileHover={{
        scale: 1.05,
        backgroundColor: "var(--primary-50)",
        borderColor: "var(--primary-200)",
        transition: { duration: 0.2 },
      }}
    >
      {name}
    </motion.span>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the technologies and tools I work with.
            </p>
          </div>
          <StaggerChildren className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Card Template */}
            {[
              {
                title: "Frontend Development",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                ),
                skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
              },
              {
                title: "Backend Development",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M3 3v18h18" />
                    <path d="m3 9 4-4 5 5 4-4 5 5" />
                  </svg>
                ),
                skills: ["Node.js", "Express", "MongoDB", "Python", "Java", "PostgreSQL", "Firebase", "REST API"]
              },
              {
                title: "Tools & Others",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M12.5 2h-1V1h1z" />
                    <path d="M18.5 6h1v1h-1z" />
                    <path d="M6 18.5h-1v-1h1z" />
                    <path d="M12 12.5v.5" />
                    <path d="m9 9 .5.5" />
                    <path d="M4.5 6h1V5h-1z" />
                    <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                    <path d="M12 12h.5" />
                    <path d="m14.5 9-.5.5" />
                    <path d="M18 12a6 6 0 0 0-6-6" />
                    <path d="M12 18a6 6 0 0 0 6-6" />
                  </svg>
                ),
                skills: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design", "SEO"]
              },
              {
                title: "Certifications",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20v-6M6 20v-4M18 20v-8M4 4h16v4H4z" />
                  </svg>
                ),
                skills: ["CompTIA Network+", "CompTIA Security+", "CompTIA A+"]
              }
            ].map((category, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-4 rounded-lg border p-6 h-full min-h-[360px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <SkillBadge key={i} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </FadeIn>
      </div>
    </section>
  )
}
