"use client"

import { useState } from "react"

const nodes = [
  { label: "Document Security", desc: "Encrypted storage, role-based access, audit trails" },
  { label: "Digital Watermarking", desc: "Verifiable document fingerprinting" },
  { label: "Access Control", desc: "Zero Trust identity verification" },
  { label: "Verifiable Authenticity", desc: "Proof of origin and integrity" },
  { label: "Encrypted Storage", desc: "Enterprise-grade encryption at rest and in transit" },
]

export default function Scene10() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="s10" className="relative w-full min-h-[140dvh] overflow-hidden bg-graphite">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_left_top,rgba(217,181,90,0.06)_0%,transparent_40%),radial-gradient(circle_at_right_bottom,rgba(217,181,90,0.06)_0%,transparent_40%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[140dvh] px-6 md:px-16 text-center">
        <div className="max-w-5xl pt-24 mb-12">
          <p className="text-precision text-champagne mb-6">ZERO TRUST BY DESIGN</p>
          <h2 className="text-editorial text-6xl md:text-9xl font-bold text-platinum mb-6 tracking-tighter">
            Intelligence <br /><span className="gold-gradient-text">without compromise.</span>
          </h2>
          <p className="text-stone text-xl max-w-2xl mx-auto font-light">
            Protect every document, conversation, lead, and decision with verifiable ownership, watermarking, role-based access, encryption, and enterprise-grade auditability.
          </p>
        </div>

        {/* Security constellation */}
        <div className="relative w-full max-w-4xl h-[420px] md:h-[500px]">
          {/* Central shield */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-champagne/30 flex items-center justify-center bg-obsidian/60 backdrop-blur-md shadow-[0_0_60px_rgba(217,181,90,0.15)]">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-champagne/40 flex items-center justify-center">
              <span className="text-champagne text-2xl md:text-3xl">🔒</span>
            </div>
          </div>

          {nodes.map((node, i) => {
            const angles = [0, 72, 144, 216, 288]
            const angleDeg = angles[i]
            const angleRad = (angleDeg * Math.PI) / 180
            const radius = 160 + (i % 2) * 40
            const cx = Math.cos(angleRad) * radius + 200
            const cy = Math.sin(angleRad) * radius + 200

            return (
              <div
                key={node.label}
                className="absolute transition-all duration-300"
                style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <a href="#cta" className="block">
                  <div className={`glass-panel rounded-xl p-4 text-center w-40 md:w-48 transition-all duration-300 hover:border-champagne/40 hover:shadow-[0_0_30px_rgba(217,181,90,0.1)] ${hovered === i ? "border-champagne/40 scale-105" : ""}`}>
                    <span className="text-editorial text-sm text-platinum block mb-1">{node.label}</span>
                    <span className="text-[10px] text-stone/50">{node.desc}</span>
                  </div>
                </a>
                {/* Connector line */}
                <svg className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 overflow-visible" style={{ zIndex: -1 }}>
                  <line x1="0" y1="0" x2={Math.cos(angleRad) * 80} y2={Math.sin(angleRad) * 80} stroke="rgba(217,181,90,0.15)" strokeWidth="1" />
                </svg>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
