"use client"

export default function Scene11() {
  return (
    <section id="cta" className="relative w-full min-h-[100dvh] overflow-hidden bg-obsidian">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(217,181,90,0.1)_0%,transparent_60%)]" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100dvh] px-6 md:px-16 text-center">
        <div className="max-w-4xl">
          <p className="text-precision text-champagne mb-8">THE NEW STANDARD FOR REAL ESTATE</p>
          <h2 className="text-editorial text-6xl md:text-9xl font-bold text-platinum mb-8 tracking-tighter leading-[0.92]">
            Build the <br />
            <span className="gold-gradient-text">intelligence advantage.</span>
          </h2>
          <p className="text-stone text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light">
            Secure every lead. See every signal. Move every opportunity.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="magnetic-btn px-10 py-5 bg-champagne text-graphite font-semibold text-sm tracking-[0.15em] uppercase hover:bg-pale-gold transition-all duration-300 shadow-[0_0_30px_rgba(217,181,90,0.3)]"
            >
              Request enterprise access
            </a>
            <a
              href="#"
              className="magnetic-btn px-10 py-5 border border-platinum/20 text-platinum text-sm tracking-[0.15em] uppercase hover:border-champagne hover:text-champagne transition-all duration-300"
            >
              Talk to NEXORA
            </a>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-16 py-8 border-t border-platinum/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-editorial text-xl font-bold text-platinum">NEXORA <span className="text-champagne">AI</span></span>
          </div>
          <div className="text-precision text-stone/40">Intelligence. Security. Growth.</div>
        </div>
      </footer>
    </section>
  )
}
