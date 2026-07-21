"use client"

import { useState } from "react"

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Intelligence", href: "#intelligence" },
    { label: "Security", href: "#security" },
    { label: "Enterprise", href: "#enterprise" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none" aria-label="Primary">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="pointer-events-auto relative group" aria-label="NEXORA AI Home">
          <div className="flex items-center gap-3">
            <span className="text-editorial text-2xl font-bold text-platinum tracking-tight">
              NEXORA <span className="text-champagne">AI</span>
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-precision text-platinum/70 hover:text-champagne transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#cta"
            className="magnetic-btn pointer-events-auto px-6 py-2.5 border border-champagne/30 text-champagne text-xs tracking-[0.15em] uppercase hover:border-champagne hover:text-platinum transition-all duration-300"
          >
            Enterprise Access
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden pointer-events-auto z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-8 h-8 flex flex-col items-center justify-center gap-1.5">
            <span className={`block w-6 h-px bg-champagne transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-px bg-champagne transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-6 h-px bg-champagne transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-editorial text-3xl text-platinum hover:text-champagne transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-6 px-8 py-3 border border-champagne text-champagne text-sm tracking-[0.15em] uppercase"
          >
            Enterprise Access
          </a>
        </div>
      </div>
    </nav>
  )
}
