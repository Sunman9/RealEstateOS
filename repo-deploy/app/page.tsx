"use client"

import { useEffect, useState } from "react"
import Dynamic from "next/dynamic"

import Navigation from "@/components/Navigation"
import MagneticCursor from "@/components/MagneticCursor"
import ChapterRail from "@/components/ChapterRail"
import ScrollProgress from "@/components/ScrollProgress"
import Preloader from "@/components/Preloader"

import Scene01 from "@/components/Scene01"
import Scene02 from "@/components/Scene02"
import Scene03 from "@/components/Scene03"
import Scene04 from "@/components/Scene04"
import Scene05 from "@/components/Scene05"
import Scene06 from "@/components/Scene06"
import Scene07 from "@/components/Scene07"
import Scene08 from "@/components/Scene08"
import Scene09 from "@/components/Scene09"
import Scene10 from "@/components/Scene10"
import Scene11 from "@/components/Scene11"

export default function HomePage() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", listener)
    return () => mq.removeEventListener("change", listener)
  }, [])

  return (
    <main className="relative bg-obsidian text-platinum overflow-x-hidden">
      <Preloader />
      <Navigation />
      <MagneticCursor />
      <ChapterRail />
      <ScrollProgress />

      {/* Animation override for reduced motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* Scene 01 — Intelligence Awakens */}
      <section aria-label="Chapter one: Intelligence awakens">
        <Scene01 />
      </section>

      {/* Scene 02 — Secure Every Lead */}
      <section aria-label="Chapter two: Secure every lead">
        <Scene02 />
      </section>

      {/* Scene 03 — The Cost of Legacy */}
      <section aria-label="Chapter three: Legacy cost">
        <Scene03 />
      </section>

      {/* Scene 04 — Digital Lead DNA */}
      <section aria-label="Chapter four: Digital Lead DNA">
        <Scene04 />
      </section>

      {/* Scene 05 — AI Lead Journey */}
      <section aria-label="Chapter five: AI lead journey">
        <Scene05 />
      </section>

      {/* Scene 06 — Voice AI Concierge */}
      <section aria-label="Chapter six: Voice AI">
        <Scene06 />
      </section>

      {/* Scene 07 — Predictive Intelligence */}
      <section aria-label="Chapter seven: Predictive intelligence">
        <Scene07 />
      </section>

      {/* Scene 08 — Enterprise Intelligence Cloud (Pinned, 180vh+) */}
      <section aria-label="Chapter eight: Enterprise cloud" id="platform">
        <Scene08 />
      </section>

      {/* Scene 09 — Traditional vs NEXORA */}
      <section aria-label="Chapter nine: Contrast" id="intelligence">
        <Scene09 />
      </section>

      {/* Scene 10 — Zero Trust Security */}
      <section aria-label="Chapter ten: Zero trust" id="security">
        <Scene10 />
      </section>

      {/* Scene 11 — Enterprise CTA */}
      <section aria-label="Enterprise call to action" id="enterprise">
        <Scene11 />
      </section>
    </main>
  )
}
