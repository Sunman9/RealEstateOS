"use client"

import { useRef, useEffect, useState } from "react"

export default function Scene03() {
  const [statVisible, setStatVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = document.getElementById("s03")
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatVisible(true) },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const signals: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; lost: boolean }[] = []
    for (let i = 0; i < 200; i++) {
      signals.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        life: Math.random() * 100,
        maxLife: 100,
        lost: Math.random() > 0.6,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      // Maze-like grey walls
      ctx.fillStyle = "rgba(255,255,255,0.03)"
      for (let i = 0; i < 8; i++) {
        const x = (w / 8) * i + 20
        const thickness = 30 + Math.sin(Date.now() * 0.002 + i) * 15
        ctx.fillRect(x, 0, thickness, h)
      }

      for (const s of signals) {
        s.x += s.vx
        s.y += s.vy
        s.life -= 0.8
        if (s.life <= 0 || s.x < 0 || s.x > w || s.y < 0 || s.y > h) {
          s.x = Math.random() * w
          s.y = Math.random() * h
          s.life = s.maxLife
          s.lost = Math.random() > 0.6
        }

        const alpha = Math.max(0, s.life / s.maxLife) * (s.lost ? 0.15 : 0.7)
        const size = s.lost ? 0.5 : 2 + Math.random() * 2
        ctx.fillStyle = s.lost ? `rgba(142,140,134,${alpha})` : `rgba(217,181,90,${alpha})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="s03" className="relative w-full min-h-[150dvh] overflow-hidden bg-[#0a0a0a]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,transparent_20%,#060606_80%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[150dvh] px-6 md:px-16 text-center">
        <div className="max-w-5xl pt-24 pb-16">
          <p className="text-precision text-stone mb-8">THE HIDDEN COST OF LEGACY</p>
          <h2 className="text-editorial text-6xl md:text-8xl font-bold text-platinum mb-10 tracking-tighter leading-[0.92]">
            Leakage is not a <br />
            <span className="text-stone/50">workflow problem.</span>
            <br />
            <span className="gold-gradient-text">It is a revenue problem.</span>
          </h2>

          <div className={`transition-all duration-1000 ease-out ${statVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-block px-12 py-8 border-y border-champagne/20 my-12">
              <span className="block text-editorial text-7xl md:text-9xl font-bold text-champagne tracking-tighter">₹10,000+</span>
              <span className="text-precision text-stone mt-2 block">Cr annual opportunity lost to fragmented systems</span>
            </div>
          </div>

          <p className="text-platinum/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Fragmented systems conceal ownership, weaken follow-up, and leave high-value intent unprotected. The cost is invisible—until it isn't.
          </p>
        </div>
      </div>
    </section>
  )
}
