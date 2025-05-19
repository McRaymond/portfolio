"use client"

import type React from "react"

import { motion } from "framer-motion"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        y: 0,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}
