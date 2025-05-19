"use client"

import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"


export function HeroSection() {
  return (
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
                  <Link href="#">
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
                  src="/img/profile.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="aspect-square overflow-hidden rounded-full object-cover border border-gray-200 dark:border-gray-800"
                />
              </FadeIn>

            </div>
          </div>
        </section>
  )
}
