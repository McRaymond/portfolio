"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

export function CompanySection() {
  return (
    <section id="company" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">CloudFlexIt</h2>
        <p className="text-muted-foreground text-lg">
          Building reliable web experiences, tools, and infrastructure for modern creators and developers.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="https://github.com/McRaymond" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  )
}
