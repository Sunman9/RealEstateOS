"use client"

import { useRef, useEffect } from "react"

export default function Scene06() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const waves: { amplitude: number; frequency: number; speed: number; offset: number; color: string }[] = []
    for (let i = 0; i < 6; i++) {
      waves.push({
        amplitude: 30 + Math.random() * 60,
        frequency: 0.005 + Math.random() * 0.015,
        speed: 0.5 + Math.random() * 1.5,
        offset: Math.random() * Math.PI * 2,
        color: i < 3 ? `rgba(217,181,90,${0.15 + Math.random() * 0.25})` : `rgba(233,230,223,${0.05 + Math.random() * 0.15})`,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      const time = Date.now() * 0.001

      for (const wave of waves) {
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2
        for (let x = 0; x < w; x += 4) {
          const y = h / 2 + Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude * (0.5 + Math.sin(x * 0.01 + time) * 0.5)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Central core glow
      const cx = w / 2
      const cy = h / 2
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200)
      grad.addColorStop(0, "rgba(217,181,90,0.15)")
      grad.addColorStop(0.5, "rgba(217,181,90,0.05)")
      grad.addColorStop(1, "rgba(217,181,90,0)")
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, 250, 0, Math.PI * 2)
      ctx.fill()

      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="s06" className="relative w-full min-h-[130dvh] overflow-hidden bg-[#080808]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,#060606_70%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[130dvh] px-6 md:px-16 text-center">
        <div className="max-w-4xl pt-24">
          <p className="text-precision text-champagne mb-8">VOICE VAULT AI</p>
          <h2 className="text-editorial text-6xl md:text-9xl font-bold text-platinum mb-6 tracking-tighter">
            Every conversation <br /><span className="gold-gradient-text">becomes intelligence.</span>
          </h2>
          <p className="text-stone text-xl max-w-2xl mx-auto mb-12 font-light">
            A secure AI concierge that answers, qualifies, summarizes, verifies, and moves leads forward—24/7.
          </p>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {[
              { label: "Secure", desc: "Encrypted voice processing" },
              { label: "Intelligent", desc: "Natural qualification" },
              { label: "Automated", desc: "24/7 response engine" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="text-editorial text-2xl text-platinum block">{item.label}</span>
                <span className="text-xs text-stone/50">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
