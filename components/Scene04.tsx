"use client"

import { useState } from "react"

const dnaStrands = [
  { label: "Identity", desc: "Source traceability, attribution, verification" },
  { label: "Source", desc: "Channel origin, campaign fingerprint, entry point" },
  { label: "Behaviour", desc: "Click patterns, time on property, visit depth" },
  { label: "Conversation", desc: "Call transcripts, chat history, voice intent" },
  { label: "Property Intent", desc: "Preferred units, budget signal, location bias" },
  { label: "Timeline", desc: "Engagement velocity, response windows, decay" },
  { label: "Ownership", desc: "Agent assignment, protection rules, audit trail" },
]

export default function Scene04() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="s04" className="relative w-full min-h-[140dvh] overflow-hidden bg-graphite">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(217,181,90,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,#060606_0%,transparent_70%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[140dvh] px-6 md:px-16 text-center">
        <div className="max-w-5xl pt-24">
          <p className="text-precision text-champagne mb-8">DIGITAL LEAD DNA™</p>
          <h2 className="text-editorial text-6xl md:text-9xl font-bold text-platinum mb-6 tracking-tighter">
            Know the intent <br /><span className="gold-gradient-text">behind every enquiry.</span>
          </h2>
          <p className="text-stone text-xl max-w-2xl mx-auto mb-16 font-light">
            NEXORA turns each lead into a living intelligence profile—securely attributable, continuously enriched, impossible to lose.
          </p>
        </div>

        {/* DNA Helix */}
        <div className="relative w-full max-w-4xl h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne/20 to-transparent" />

          <div className="absolute left-1/2 -translate-x-1/2 top-10 text-center">
            <div className="w-24 h-24 mx-auto rounded-full border-2 border-champagne/30 flex items-center justify-center bg-obsidian/60 backdrop-blur-md shadow-[0_0_60px_rgba(217,181,90,0.15)]">
              <span className="text-precision text-champagne">DNA</span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px]">
              {/* Double helix using CSS */}
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-champagne/30 to-transparent rounded-full" />
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-champagne/20 to-transparent rounded-full rotate-[15deg] origin-top" />

              {dnaStrands.map((strand, i) => {
                const angle = (i / dnaStrands.length) * Math.PI * 2
                const x = Math.cos(angle) * 140 + 180
                const y = (i / dnaStrands.length) * 400 + 50
                const isLeft = i % 2 === 0
                return (
                  <div
                    key={strand.label}
                    className="absolute transition-all duration-300"
                    style={{ left: isLeft ? x - 60 : x, top: y, width: 180 }}
                    onMouseEnter={() => setHovered(strand.label)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <a href="#s05" className="block group">
                      <div className={`glass-panel rounded-2xl p-5 text-left transition-all duration-300 hover:border-champagne/40 hover:shadow-[0_0_30px_rgba(217,181,90,0.1)] ${hovered === strand.label ? "border-champagne/40 scale-[1.02]" : ""}`}>
                        <span className="text-editorial text-xl text-platinum block mb-2">{strand.label}</span>
                        <span className="text-xs text-stone/60">{strand.desc}</span>
                      </div>
                    </a>
                    {/* Connector line */}
                    <div className="absolute top-1/2 left-0 w-12 h-px bg-gradient-to-r from-transparent to-champagne/40 -translate-y-1/2 -translate-x-full" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mt-16 flex flex-wrap justify-center gap-8 text-precision text-champagne/80">
          <span>Intent signals</span>
          <span>Ownership traceability</span>
          <span>AI fingerprinting</span>
        </div>
      </div>
    </section>
  )
}
