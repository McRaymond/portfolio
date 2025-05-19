"use client"

import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">About Me</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I’m a passionate web developer with a strong focus on creating user-friendly and visually appealing
              websites. With several years of experience in the field, I’ve worked on a variety of projects ranging
              from small business websites to complex web applications.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <StaggerChildren className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-gray-400">
                    Bachelor’s Degree in Computer Science, University Name, 2018–2022
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">Experience</h3>
                  <p className="text-gray-400">
                    Web Developer at Company Name, 2022–Present
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">Interests</h3>
                  <p className="text-gray-400">
                    When I’m not coding, I enjoy hiking, photography, and reading.
                  </p>
                </div>
              </StaggerChildren>
            </FadeIn>
            <FadeIn direction="left" className="flex justify-center">
              <img
                src="/img/profile.jpg"
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
  )
}
