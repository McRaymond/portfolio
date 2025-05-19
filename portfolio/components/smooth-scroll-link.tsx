"use client"

import type React from "react"

import type { ReactNode } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  isActive?: boolean
  duration?: number
  offset?: number
}

export function SmoothScrollLink({
  href,
  children,
  className = "",
  isActive = false,
  duration = 1000,
  offset = 0,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition

      let startTime: number | null = null

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)

        // Easing function: easeInOutQuad
        const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

        window.scrollTo(0, startPosition + distance * ease(progress))

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  const activeClass = isActive ? "text-primary font-medium" : ""

  return (
    <a href={href} onClick={handleClick} className={`${className} ${activeClass} transition-colors hover:text-primary`}>
      {children}
    </a>
  )
}
