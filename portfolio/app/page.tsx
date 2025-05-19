import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
              <span>CloudFlexIt </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-between md:hidden">
                <Link href="/" className="flex items-center space-x-2 font-bold">
                  <span>Raymond </span>
                </Link>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, Im <span className="text-primary">Raymond Zamora</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    A passionate web developer specializing in creating beautiful and functional websites.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="transition-transform duration-300 hover:translate-y-[-2px]">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline" className="transition-transform duration-300 hover:translate-y-[-2px]">
                      View My Work
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="left" className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="aspect-square overflow-hidden rounded-full object-cover border border-gray-200 dark:border-gray-800"
                />
              </FadeIn>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Im a passionate web developer with a strong focus on creating user-friendly and visually appealing
                  websites. With several years of experience in the field, Ive worked on a variety of projects ranging
                  from small business websites to complex web applications.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                  <StaggerChildren className="grid gap-6">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Bachelors Degree in Computer Science, University Name, 2018-2022
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Experience</h3>
                      <p className="text-gray-500 dark:text-gray-400">Web Developer at Company Name, 2022-Present</p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Interests</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        When Im not coding, I enjoy hiking, photography, and reading.
                      </p>
                    </div>
                  </StaggerChildren>
                </FadeIn>
                <FadeIn direction="left" className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="About Me"
                    width={400}
                    height={400}
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the technologies and tools I work with.
                </p>
              </div>
              <StaggerChildren className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <SkillBadge name="HTML" />
                    <SkillBadge name="CSS" />
                    <SkillBadge name="JavaScript" />
                    <SkillBadge name="React" />
                    <SkillBadge name="Next.js" />
                    <SkillBadge name="Tailwind CSS" />
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m3 9 4-4 5 5 4-4 5 5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Backend Development</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <SkillBadge name="Node.js" />
                    <SkillBadge name="Express" />
                    <SkillBadge name="MongoDB" />
                    <SkillBadge name="PostgreSQL" />
                    <SkillBadge name="Firebase" />
                    <SkillBadge name="REST API" />
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
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
                  </div>
                  <h3 className="text-xl font-bold">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <SkillBadge name="Git" />
                    <SkillBadge name="GitHub" />
                    <SkillBadge name="VS Code" />
                    <SkillBadge name="Figma" />
                    <SkillBadge name="Responsive Design" />
                    <SkillBadge name="SEO" />
                  </div>
                </div>
              </StaggerChildren>
            </FadeIn>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of my recent work.
                </p>
              </div>
              <StaggerChildren className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Website"
                  description="A fully functional e-commerce website with product listings, cart functionality, and payment integration."
                  tags={["Next.js", "Tailwind CSS", "Stripe", "MongoDB"]}
                  imageUrl="/placeholder.svg?height=300&width=400"
                  projectUrl="#"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website showcasing my skills and projects."
                  tags={["React", "Tailwind CSS", "Framer Motion"]}
                  imageUrl="/placeholder.svg?height=300&width=400"
                  projectUrl="#"
                />
                <ProjectCard
                  title="Task Management App"
                  description="A task management application with user authentication, task creation, and progress tracking."
                  tags={["Next.js", "Firebase", "Tailwind CSS"]}
                  imageUrl="/placeholder.svg?height=300&width=400"
                  projectUrl="#"
                />
                <ProjectCard
                  title="Weather App"
                  description="A weather application that displays current weather and forecasts based on location."
                  tags={["React", "OpenWeather API", "CSS"]}
                  imageUrl="/placeholder.svg?height=300&width=400"
                  projectUrl="#"
                />
                <ProjectCard
                  title="Blog Platform"
                  description="A blog platform with content management system and user authentication."
                  tags={["Next.js", "MongoDB", "Tailwind CSS"]}
                  imageUrl="/placeholder.svg?height=300&width=400"
                  projectUrl="#"
                />
                <ProjectCard
                  title="Recipe App"
                  description="A recipe application with search functionality and user-submitted recipes."
                  tags={["React", "Firebase", "CSS"]}
                  imageUrl="/placeholder.svg?height=300&width=400"
                  projectUrl="#"
                />
              </StaggerChildren>
            </FadeIn>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have a project in mind or want to chat? Feel free to reach out!
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-12 py-12 lg:grid-cols-2">
                <FadeIn direction="right" className="flex flex-col gap-6">
                  <StaggerChildren className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold">Email</h3>
                        <p className="text-gray-500 dark:text-gray-400">raymondjesuszamora@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold">LinkedIn</h3>
                        <p className="text-gray-500 dark:text-gray-400">linkedin.com/in/yourusername</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold">GitHub</h3>
                        <p className="text-gray-500 dark:text-gray-400">github.com/yourusername</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Twitter className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold">Twitter</h3>
                        <p className="text-gray-500 dark:text-gray-400">twitter.com/yourusername</p>
                      </div>
                    </div>
                  </StaggerChildren>
                </FadeIn>
                <FadeIn direction="left">
                  <ContactForm />
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
            © 2024 CloudFlexIt. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
