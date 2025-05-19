import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard } from "@/components/animations/hover-card";

// Props for a single project card
export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
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
  );
}

// Export a list of projects to map in your page.tsx
export const projects: ProjectCardProps[] = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my skills and projects.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    imageUrl: "/img/portfolio.jpg",
    projectUrl: "https://github.com/McRaymond/portfolio.git",
  },
  {
    title: "Another Portfolio",
    description: "A minimal portfolio powered by React and Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "#",
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
];
