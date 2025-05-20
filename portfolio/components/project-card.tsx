"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HoverCard } from "@/components/animations/hover-card"

// Props for a single project card
export interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
}

// Project card UI component
export function ProjectCard({ title, description, tags, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <HoverCard>
      <Card className="overflow-hidden h-full">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link
            href={projectUrl}
            className="group inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      </Card>
    </HoverCard>
  )
}

// Full section including title and project cards
export function ProjectSection() {
  return (
    <section id="projects" className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl space-y-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Projects</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore some of the applications and tools I’ve built.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

// Project data
export const projects: ProjectCardProps[] = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my skills and projects.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    imageUrl: "/img/portfolio.jpg",
    projectUrl: "https://github.com/McRaymond/portfolio.git",
  },
  {
    title: "Financial Helper",
    description: "a personal finance dashboard that helps you track credit card usage, plan weekly payments, and visualize your financial health — all in one clean, interactive interface.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1605512930496-4dd6e7e82978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxmaW5hbmNpYWwlMjBoZWxwZXJ8ZW58MHx8MHx8fDA%3D",
    projectUrl: "https://github.com/McRaymond/financial-helper.git",
  },
  {
    title: "Task Management App",
    description: "A task app with user auth and progress tracking.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "#",
  },
  {
    title: "Weather App",
    description: "Get real-time weather updates using OpenWeather API.",
    tags: ["React", "OpenWeather API", "CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "#",
  },
  {
    title: "Blog Platform",
    description: "A blog with markdown support, admin dashboard and CMS.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "#",
  },
  {
    title: "Recipe App",
    description: "Search, save, and share recipes with a community.",
    tags: ["React", "Firebase", "CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "#",
  },
]
