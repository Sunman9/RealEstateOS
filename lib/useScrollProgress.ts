"use client"

import { useState, useEffect, useCallback } from "react"

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState<"up" | "down">("down")

  const onScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const pct = docHeight > 0 ? scrollTop / docHeight : 0
    setProgress(Math.min(1, Math.max(0, pct)))
    setDirection(scrollTop > (window.__lastScrollY || 0) ? "down" : "up")
    window.__lastScrollY = scrollTop
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return { progress, direction }
}

declare global {
  interface Window {
    __lastScrollY?: number
  }
}
