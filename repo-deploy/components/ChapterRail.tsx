"use client"

import { useState, useEffect } from "react"

const chapters = [
  { id: "s01", label: "Awaken" },
  { id: "s02", label: "Secure" },
  { id: "s03", label: "Legacy" },
  { id: "s04", label: "DNA" },
  { id: "s05", label: "Journey" },
  { id: "s06", label: "Voice" },
  { id: "s07", label: "Predict" },
  { id: "s08", label: "Cloud" },
  { id: "s09", label: "Contrast" },
  { id: "s10", label: "Zero Trust" },
  { id: "cta", label: "CTA" },
]

export default function ChapterRail() {
  const [active, setActive] = useState("s01")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    )
    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-6"
      aria-label="Chapter navigation"
    >
      {chapters.map((ch) => (
        <a
          key={ch.id}
          href={`#${ch.id}`}
          className="group flex items-center gap-3 transition-all duration-300"
          aria-label={`Go to ${ch.label}`}
        >
          <span
            className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
              active === ch.id ? "text-champagne" : "text-stone/30"
            }`}
          >
            {ch.label}
          </span>
          <span
            className={`w-8 h-px transition-all duration-500 ${
              active === ch.id ? "bg-champagne w-12" : "bg-stone/20 w-6"
            }`}
          />
        </a>
      ))}
    </aside>
  )
}
