"use client"

import { useState, useEffect, useRef } from "react"

export default function MagneticCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [])

  useEffect(() => {
    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const interactive = el.closest("a, button, [data-magnetic], .magnetic-btn")
      setHover(!!interactive)
    }
    document.addEventListener("mousemove", checkHover)
    return () => document.removeEventListener("mousemove", checkHover)
  }, [])

  // Don't show on touch devices
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) setIsTouch(true)
  }, [])

  if (isTouch) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] mix-blend-screen"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease, transform 0.05s linear",
        willChange: "transform",
      }}
    >
      <div
        className="relative -translate-x-1/2 -translate-y-1/2"
        style={{
          width: hover ? 80 : 36,
          height: hover ? 80 : 36,
          transition: "width 0.35s ease, height 0.35s ease",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-champagne/30" />
        <div
          className="absolute inset-0 rounded-full bg-champagne/15 blur-md"
          style={{ opacity: hover ? 0.8 : 0.3 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-champagne"
          style={{ boxShadow: "0 0 12px 2px rgba(217,181,90,0.6)" }}
        />
      </div>
    </div>
  )
}
