"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY

      const elements = ids
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return { id, top: -1, bottom: -1 }

          const rect = element.getBoundingClientRect()
          const top = rect.top + scroll - offset
          const bottom = rect.bottom + scroll - offset

          return { id, top, bottom }
        })
        .filter(({ top, bottom }) => top !== -1 && bottom !== -1)

      // Find the first section that is currently visible on the screen
      for (const { id, top, bottom } of elements) {
        if (scroll >= top && scroll < bottom) {
          setActiveId(id)
          return
        }
      }

      // If we're at the top of the page, set the first section as active
      if (scroll < elements[0]?.top) {
        setActiveId(elements[0]?.id || null)
        return
      }

      // If we're at the bottom of the page, set the last section as active
      if (elements.length > 0 && scroll >= elements[elements.length - 1]?.top) {
        setActiveId(elements[elements.length - 1]?.id || null)
      }
    }

    listener()
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [ids, offset])

  return activeId
}
