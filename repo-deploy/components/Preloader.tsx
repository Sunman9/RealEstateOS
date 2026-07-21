"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [loaded, setLoaded] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200)
    const hideTimer = setTimeout(() => setShow(false), 2000)
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-[200] bg-obsidian flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none ${
        loaded ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={!loaded ? "false" : "true"}
    >
      <div className="flex flex-col items-center gap-6">
        <span className="text-editorial text-3xl md:text-5xl text-platinum tracking-tighter">NEXORA</span>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent relative overflow-hidden">
          <div className={`absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-transparent via-champagne to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]`} />
        </div>
        <span className="text-precision text-stone">Intelligence. Security. Growth.</span>
      </div>
    </div>
  )
}
