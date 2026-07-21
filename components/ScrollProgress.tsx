"use client"

import { useScrollProgress } from "@/lib/useScrollProgress"

export default function ScrollProgress() {
  const { progress } = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-champagne/60 via-champagne to-champagne/60 shadow-[0_0_10px_rgba(217,181,90,0.6)]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
