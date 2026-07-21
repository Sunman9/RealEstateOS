"use client"

import { useState, useEffect } from "react"

export default function Scene07() {
  const [tower, setTower] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    const el = document.getElementById("s07")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setTower((prev) => (prev < 4 ? prev + 1 : 0))
    }, 2500)
    return () => clearInterval(timer)
  }, [visible])

  const predictions = [
    { label: "Buying probability: 86%", action: "Advisor call within 14 min", confidence: "High" },
    { label: "Lead priority: Tier 1", action: "Schedule site visit today", confidence: "Very High" },
    { label: "Opportunity risk: Low", action: "Standard nurture sequence", confidence: "Medium" },
    { label: "Next best action: Offer", action: "Present premium unit options", confidence: "High" },
  ]

  return (
    <section id="s07" className="relative w-full min-h-[140dvh] overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,181,90,0.08)_0%,transparent_50%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[140dvh] px-6 md:px-16">
        <div className="max-w-5xl w-full pt-24">
          <p className="text-precision text-champagne mb-6">PREDICT AI</p>
          <h2 className="text-editorial text-6xl md:text-8xl font-bold text-platinum mb-6 tracking-tighter">
            See what <span className="gold-gradient-text">happens next.</span>
          </h2>
          <p className="text-stone text-xl max-w-2xl mb-16 font-light">
            Predictive intelligence identifies buying probability, lead priority, opportunity risk, and the actions most likely to create momentum.
          </p>
        </div>

        {/* Predictive skyline */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] flex items-end justify-center gap-4 md:gap-8">
          {/* Building towers */}
          {[30, 50, 80, 45, 70, 90, 55, 100, 40].map((h, i) => (
            <div key={i} className="relative flex-1 max-w-[40px] flex flex-col justify-end">
              <div
                className="w-full bg-gradient-to-t from-champagne/20 to-champagne/60 rounded-t-lg transition-all duration-700"
                style={{
                  height: `${h}%`,
                  boxShadow: i === tower ? "0 0 30px rgba(217,181,90,0.3)" : "none",
                  opacity: i === tower ? 1 : 0.4,
                }}
              />
              {/* Gold arc above selected */}
              {i === tower && (
                <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-16" viewBox="0 0 64 32" fill="none">
                  <path d="M4 28 Q32 4 60 28" stroke="#D9B55A" strokeWidth="2" fill="none" />
                  <circle cx="32" cy="12" r="3" fill="#D9B55A" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Decision panel */}
        <div className="w-full max-w-3xl mt-12">
          <div className={`glass-panel rounded-2xl p-8 md:p-10 text-left transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span className="text-precision text-champagne">PREDICTIVE DECISION</span>
            </div>
            <h3 className="text-editorial text-3xl md:text-4xl text-platinum mb-2">{predictions[tower].label}</h3>
            <p className="text-stone text-lg mb-4">{predictions[tower].action}</p>
            <div className="flex items-center gap-6 text-xs text-stone/50">
              <span>Confidence: <span className="text-champagne">{predictions[tower].confidence}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
