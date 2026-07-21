"use client"

import { useRef, useMemo, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, MeshDistortMaterial, Environment } from "@react-three/drei"
import * as THREE from "three"

const modules = [
  { id: "leadsense", label: "LeadSense AI", desc: "Intelligent lead capture, fingerprinting, and attribution." },
  { id: "predict", label: "Predict AI", desc: "Buying probability, priority scoring, next best action." },
  { id: "voice", label: "Voice Vault AI", desc: "Secure conversational intelligence and qualification." },
  { id: "securedocs", label: "SecureDocs AI", desc: "Document security, watermarking, verifiable authenticity." },
  { id: "insight", label: "Insight BI", desc: "Executive dashboards, real-time analytics, and reporting." },
  { id: "whatsflow", label: "WhatsFlow AI", desc: "WhatsApp automation, smart nurturing, engagement tracking." },
  { id: "builderconnect", label: "BuilderConnect AI", desc: "Builder collaboration, project visibility, pipeline management." },
  { id: "brokeros", label: "BrokerOS AI", desc: "Brokerage operations, deal security, and revenue optimization." },
]

function ModuleOrb({ module, index }: { module: typeof modules[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const angle = (index / modules.length) * Math.PI * 2
  const radius = 3.5 + Math.random() * 1.5

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      const x = Math.cos(angle + time * 0.3) * radius
      const z = Math.sin(angle + time * 0.3) * radius
      meshRef.current.position.set(x, Math.sin(time * 0.5 + angle) * 0.5, z)
      meshRef.current.rotation.y = time * 0.4
    }
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial
        color="#D9B55A"
        emissive="#6a5520"
        emissiveIntensity={0.4}
        roughness={0.25}
        metalness={0.9}
      />
    </mesh>
  )
}

function CentralObject() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.2, 0.4, 16, 60]} />
      <meshStandardMaterial
        color="#E9E6DF"
        emissive="#2a2a2a"
        roughness={0.15}
        metalness={1}
      />
    </mesh>
  )
}

export default function Scene08() {
  const [selected, setSelected] = useState(0)

  return (
    <section id="s08" className="relative w-full min-h-[180dvh] overflow-hidden bg-obsidian">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(217,181,90,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center min-h-[180dvh] px-6 md:px-16">
        <div className="text-center pt-24 mb-8 max-w-4xl">
          <p className="text-precision text-champagne mb-6">ENTERPRISE INTELLIGENCE CLOUD</p>
          <h2 className="text-editorial text-6xl md:text-9xl font-bold text-platinum mb-6 tracking-tighter">
            One intelligence <br /><span className="gold-gradient-text">cloud. Every decision.</span>
          </h2>
          <p className="text-stone text-xl max-w-2xl mx-auto font-light">
            A connected system for revenue, security, operations, and executive clarity.
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="relative w-full max-w-6xl h-[500px] md:h-[600px] my-4">
          <Canvas camera={{ position: [0, 4, 8], fov: 45 }} className="rounded-3xl overflow-hidden">
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#D9B55A" />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#F4D98B" />
              <CentralObject />
              {modules.map((m, i) => (
                <ModuleOrb key={m.id} module={m} index={i} />
              ))}
              <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
              <Environment preset="night" />
            </Suspense>
          </Canvas>

          {/* Module selector overlay */}
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-[320px] glass-panel rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-editorial text-2xl text-platinum mb-2">{modules[selected].label}</h3>
            <p className="text-sm text-stone mb-6">{modules[selected].desc}</p>
            <div className="flex gap-2 flex-wrap">
              {modules.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setSelected(i)}
                  aria-label={`Select ${m.label}`}
                  className={`text-[10px] tracking-[0.1em] px-3 py-1.5 border transition-all duration-300 ${
                    selected === i ? "border-champagne text-champagne bg-champagne/10" : "border-platinum/10 text-stone hover:text-platinum hover:border-platinum/30"
                  }`}
                >
                  {m.label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
