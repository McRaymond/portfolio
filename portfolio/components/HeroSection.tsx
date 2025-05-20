"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"

export function HeroSection() {
  return (
    <section
      className="overflow-hidden bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2670&q=80')] bg-cover bg-top bg-no-repeat"
    >
      <div className="bg-black/60 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Hi, I'm <span className="text-primary">Raymond Zamora</span>
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  A passionate web developer specializing in creating beautiful and functional websites.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#"
                  className="inline-block rounded-full border border-[#3b82f6] bg-[#3b82f6] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#3b82f6] transition-colors"
                >
                  Contact Me
                </Link>
                <Link
                  href="#projects"
                  className="inline-block rounded-full bg-white/10 px-12 py-3 text-sm font-medium text-white transition hover:bg-white/20 focus:ring-3 focus:ring-yellow-400 focus:outline-none"
                >
                  View My Work
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="flex items-center justify-center">
              <img
                src="/img/profile.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="aspect-square rounded-full object-cover border border-gray-200 dark:border-gray-800"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
