"use client"

import { useRef, useEffect } from "react"

export default function Scene01() {
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

    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }[] = []
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        life: Math.random() * 100,
        maxLife: 100,
        size: Math.random() * 2 + 1,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.3
            ctx.strokeStyle = `rgba(217,181,90,${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.5
        if (p.life <= 0 || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          p.x = Math.random() * w
          p.y = Math.random() * h
          p.life = p.maxLife
        }
        const alpha = (p.life / p.maxLife) * 0.9
        ctx.fillStyle = `rgba(217,181,90,${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <section id="s01" className="relative w-full min-h-[100dvh] overflow-hidden bg-obsidian">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      {/* Dark vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#060606_90%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100dvh] px-6 md:px-16 text-center">
        <div className="max-w-5xl">
          <p className="text-precision text-champagne mb-8">NEXORA AI / REAL ESTATE INTELLIGENCE CLOUD</p>
          <h1 className="text-editorial text-6xl md:text-9xl font-bold text-platinum mb-8 tracking-tighter">
            Intelligence <br />
            <span className="gold-gradient-text">awakens.</span>
          </h1>
          <p className="text-stone text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            The secure operating system for intelligent real estate. Not a CRM. Not a tool. An operating environment.
          </p>
        </div>
        {/* Minimal loader indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="w-px h-16 bg-gradient-to-b from-champagne/0 via-champagne/60 to-champagne/0" />
          <span className="text-precision text-stone/40">SCROLL TO BEGIN</span>
        </div>
      </div>

      {/* Gold particle cluster forming N */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-[0.15]">
        <svg width="400" height="500" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 80 L80 140 L60 200 M80 140 L140 80 M80 140 L140 200" stroke="#D9B55A" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
}
