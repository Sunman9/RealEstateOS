"use client"

import { useRef, useEffect } from "react"

export default function Scene02() {
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

    const strands: { x: number; y: number; progress: number; speed: number; width: number; color: string }[] = []
    for (let i = 0; i < 8; i++) {
      strands.push({
        x: Math.random() * w,
        y: Math.random() * h,
        progress: Math.random(),
        speed: 0.3 + Math.random() * 0.8,
        width: 0.5 + Math.random() * 1.5,
        color: `rgba(217,181,90,${0.4 + Math.random() * 0.6})`,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      // Dark architectural background shapes
      ctx.fillStyle = "rgba(255,255,255,0.015)"
      for (let i = 0; i < 5; i++) {
        const x = (w / 5) * i + Math.sin(Date.now() * 0.001 + i) * 20
        const width = 60 + Math.sin(Date.now() * 0.0008) * 20
        ctx.fillRect(x, 0, width, h)
      }

      for (const strand of strands) {
        strand.progress += strand.speed * 0.02
        if (strand.progress > 1) strand.progress = 0

        const startX = strand.x
        const startY = strand.y
        const endX = strand.x + (Math.random() - 0.5) * w * 0.3
        const endY = strand.y + h * 0.6

        const currentX = startX + (endX - startX) * strand.progress
        const currentY = startY + (endY - startY) * strand.progress

        ctx.strokeStyle = strand.color
        ctx.lineWidth = strand.width
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()

        // Small gold dots along strand
        for (let t = 0; t < strand.progress; t += 0.05) {
          const dotX = startX + (endX - startX) * t
          const dotY = startY + (endY - startY) * t
          ctx.fillStyle = `rgba(217,181,90,${0.5 + Math.random() * 0.3})`
          ctx.beginPath()
          ctx.arc(dotX, dotY, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="s02" className="relative w-full min-h-[130dvh] overflow-hidden bg-graphite">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#111111_80%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[130dvh] px-6 md:px-16 text-center">
        <div className="max-w-5xl pt-32 pb-16">
          <p className="text-precision text-champagne mb-8">SECURE EVERY LEAD / PROTECTED FROM FIRST SIGNAL</p>
          <h2 className="text-editorial text-6xl md:text-8xl font-bold text-platinum mb-10 tracking-tighter">
            Secure every <br /><span className="gold-gradient-text">lead.</span>
          </h2>
          <p className="text-stone text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16 font-light">
            Every enquiry becomes a protected, intelligent asset from its first signal to final conversion. Lost signals become owned intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#s04" className="magnetic-btn px-10 py-4 bg-champagne/10 border border-champagne/40 text-champagne text-sm tracking-[0.15em] uppercase hover:bg-champagne/20 transition-all duration-300">
              Explore the intelligence cloud
            </a>
            <a href="#cta" className="magnetic-btn px-10 py-4 border border-platinum/20 text-platinum text-sm tracking-[0.15em] uppercase hover:border-platinum hover:text-champagne transition-all duration-300">
              Request enterprise access
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
