"use client"

import { useState, useEffect } from "react"

const milestones = [
  { label: "Capture", desc: "First signal recorded with source fingerprint" },
  { label: "Understand", desc: "AI classifies intent, property preference, urgency" },
  { label: "Prioritize", desc: "Lead ranked by conversion probability" },
  { label: "Engage", desc: "Agent alerted with recommended action" },
  { label: "Convert", desc: "Meeting booked. Deal momentum preserved." },
]

export default function Scene05() {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    const el = document.getElementById("s05")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setStep((prev) => (prev < milestones.length - 1 ? prev + 1 : prev))
    }, 2000)
    return () => clearInterval(timer)
  }, [visible])

  return (
    <section id="s05" className="relative w-full min-h-[140dvh] overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center_top,rgba(217,181,90,0.08)_0%,transparent_60%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[140dvh] px-6 md:px-16">
        <div className="max-w-5xl w-full pt-24">
          <p className="text-precision text-champagne mb-6">AI LEAD JOURNEY</p>
          <h2 className="text-editorial text-6xl md:text-8xl font-bold text-platinum mb-6 tracking-tighter">
            From first signal <br /><span className="gold-gradient-text">to next best action.</span>
          </h2>
          <p className="text-stone text-xl max-w-2xl mb-16 font-light">
            Agents coordinate qualification, nurturing, routing, reminders, and conversion momentum across the entire journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-5xl">
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 md:gap-0">
            {milestones.map((m, i) => (
              <div key={m.label} className="relative flex-1 min-w-[160px]" style={{ zIndex: 10 }}>
                <div className={`transition-all duration-700 ease-out ${step >= i ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"}`}>
                  <div className={`w-4 h-4 rounded-full mx-auto mb-6 border-2 transition-all duration-500 ${step >= i ? "bg-champagne border-champagne shadow-[0_0_15px_rgba(217,181,90,0.5)]" : "bg-transparent border-stone/30"}`} />
                  <div className="text-center">
                    <span className="text-editorial text-2xl md:text-3xl text-platinum block mb-2">{m.label}</span>
                    <span className="text-xs text-stone/60">{m.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
