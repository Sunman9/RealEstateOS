"use client"

import { useState } from "react"

const comparisons = [
  { left: "Static contacts", right: "Living Digital Lead DNA", detail: "Every lead is continuously enriched with behavior, conversation, and ownership data." },
  { left: "Manual follow-up", right: "AI-directed next best action", detail: "Predictive intelligence determines priority, timing, and recommended engagement." },
  { left: "Fragmented tools", right: "One intelligence cloud", detail: "Lead capture, qualification, security, analytics, and automation in a connected system." },
  { left: "Reactive reporting", right: "Predictive executive clarity", detail: "Real-time dashboards show risk, opportunity value, and conversion probability." },
  { left: "Vulnerable lead data", right: "Zero Trust protection", detail: "Every document, conversation, and lead protected by encryption, watermarking, and role-based access." },
]

export default function Scene09() {
  const [mode, setMode] = useState<"traditional" | "nexora">("traditional")
  const [index, setIndex] = useState(0)

  return (
    <section id="s09" className="relative w-full min-h-[120dvh] overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(217,181,90,0.04)_0%,transparent_50%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[120dvh] px-6 md:px-16 text-center">
        <div className="max-w-5xl pt-24 mb-12">
          <p className="text-precision text-champagne mb-6">THE DIFFERENCE IS ARCHITECTURE</p>
          <h2 className="text-editorial text-6xl md:text-8xl font-bold text-platinum mb-6 tracking-tighter">
            Traditional CRM records <br />
            <span className="text-stone/40">activity.</span><br />
            <span className="gold-gradient-text">NEXORA directs intelligence.</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex gap-3 mb-12">
          <button
            onClick={() => setMode("traditional")}
            className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
              mode === "traditional" ? "border-platinum/20 text-platinum bg-platinum/5" : "border-platinum/10 text-stone hover:text-platinum"
            }`}
          >
            Traditional CRM
          </button>
          <button
            onClick={() => setMode("nexora")}
            className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
              mode === "nexora" ? "border-champagne/50 text-champagne bg-champagne/10" : "border-platinum/10 text-stone hover:text-platinum"
            }`}
          >
            NEXORA AI
          </button>
        </div>

        {/* Split comparison */}
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-0 border border-platinum/10 rounded-2xl overflow-hidden">
          <div className={`p-8 md:p-12 transition-all duration-700 ${mode === "traditional" ? "bg-graphite/60" : "bg-graphite/30 opacity-60"}`}>
            <span className="text-precision text-stone mb-8 block">TRADITIONAL</span>
            <h3 className="text-editorial text-3xl md:text-4xl text-platinum mb-4">{comparisons[index].left}</h3>
          </div>
          <div className={`p-8 md:p-12 transition-all duration-700 ${mode === "nexora" ? "bg-graphite/60 border-l border-champagne/20" : "bg-graphite/30 opacity-60"}`}>
            <span className="text-precision text-champagne mb-8 block">NEXORA AI</span>
            <h3 className="text-editorial text-3xl md:text-4xl text-platinum mb-4">{comparisons[index].right}</h3>
          </div>
        </div>

        <p className="text-stone text-lg max-w-2xl mx-auto mt-8 mb-12">{comparisons[index].detail}</p>

        <div className="flex gap-4 flex-wrap justify-center">
          {comparisons.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Compare point ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-champagne scale-125" : "bg-stone/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
