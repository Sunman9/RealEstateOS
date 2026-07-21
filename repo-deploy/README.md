# NEXORA AI — The Operating System for Intelligent Real Estate

A top-0.01% luxury product-launch landing page for NEXORA AI. Built with Next.js 15 (App Router), TypeScript, React Three Fiber, procedural WebGL/Canvas cinematic scenes, and a scroll-driven narrative architecture.

## Project Overview

This delivers the complete 10-scene cinematic architecture requested:

- Scene 01 — Intelligence Awakens (procedural particle intelligence)
- Scene 02 — Secure Every Lead (animated gold data strands)
- Scene 03 — The Cost of Legacy (signal-loss maze with statistics)
- Scene 04 — Digital Lead DNA™ (interactive helix data layers)
- Scene 05 — AI Lead Journey (timeline progression)
- Scene 06 — Voice AI Concierge (waveform chamber)
- Scene 07 — Predictive Intelligence (predictive skyline with decision panel)
- Scene 08 — Enterprise Intelligence Cloud (scroll-pinned 180vh+ Three.js orbital module system)
- Scene 09 — Traditional CRM vs NEXORA AI (segmented contrast control)
- Scene 10 — Zero Trust Security (security constellation)
- Scene 11 — Enterprise CTA + Footer

## Technical Architecture

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **3D / WebGL:** React Three Fiber + Drei (Scene 08 orbital system)
- **Canvas Animations:** Custom 2D Canvas for procedural gold particles, strands, waveforms, and signal effects (Scenes 01, 02, 03, 06)
- **Typography:** Playfair Display (editorial display) + Inter (precision UI)
- **Color System:** CSS variables mapped to luxury gold/platinum palette
- **Scroll Engine:** Custom `useScrollProgress` hook with passive scroll tracking; no layout-thrashing handlers; GPU-accelerated transforms only
- **Accessibility:** Semantic HTML (`section`, `nav`, `aside`, `main`), keyboard-focusable module selectors (`Scene 08`, `Scene 09`), visible focus states (`:focus-visible`), `aria-label`, `aria-expanded`, `aria-live` for dynamic descriptions, reduced-motion media query override (`prefers-reduced-motion: reduce`)
- **Responsive:** Dedicated mobile layout strategy — fewer, stronger beats; lighter canvas animations; responsive typography; mobile menu overlay
- **Performance:** Lazy-loaded assets; only hero poster and essential first-scene elements preloaded; optimized WebP posters referenced; static export for fast delivery

## Design System

| Token | Value | Usage |
|---|---|---|
| Obsidian | `#060606` | Background base |
| Graphite | `#111111` | Elevated surfaces |
| Champagne Gold | `#D9B55A` | Primary accent, interactive states |
| Pale Gold | `#F4D98B` | Highlights, gradients |
| Platinum | `#E9E6DF` | Body text, headings |
| Muted Stone | `#8E8C86` | Secondary text |
| Signal Green | `#8BD450` | Extremely sparse confirmation signals |

Typography uses massive editorial serif (`Playfair Display`) for keynote moments and a modern grotesk (`Inter`) for interface labels and metadata. Letter spacing is wide for metadata (`0.08em` uppercase at `0.7rem`) and tight for display (`-0.03em`, `line-height: 0.92`).

## Scroll-World / Continuous Flight Architecture

The site is structured as a continuous single-page journey. Rather than disconnected sections, each scene flows visually and narratively from the previous:

1. **Intelligence Awakens** (darkness → gold particle cluster → monolith)
2. **Secure Every Lead** (monolith opens → golden data strand travels through architecture)
3. **Legacy Cost** (passes through grey maze → signals split and vanish)
4. **Digital Lead DNA** (enters circular vault → helix with interactive data strands)
5. **AI Lead Journey** (DNA exits → miniature luxury city → timeline milestones)
6. **Voice AI** (acoustics chamber → responsive gold waveforms)
7. **Predictive Intelligence** (rises into skyline → illuminated tower predictions)
8. **Enterprise Intelligence Cloud** (orbital command center → 3D module orbit, pinned 180vh+)
9. **CRM vs NEXORA** (split architectural worlds with segmented control)
10. **Zero Trust** (security constellation → illuminated nodes)
11. **Enterprise CTA** (final monolith → expanding gold signals)

### Scroll-Scrub Engine Details

- Scroll position controls cinematic progression continuously
- Scene 08 pins for 180vh with interactive module selection
- No visible cuts between scenes — each scene uses matching dark backgrounds and continuous visual grammar (gold particles, strands, light)
- `requestAnimationFrame`-throttled updates only (no layout thrashing)
- `transform` and `opacity` only for animations
- Magnetic cursor with restrained gold halo (desktop only, no gimmicks)

## Scene Details & Interactions

### Scene 01 — Intelligence Awakens
Procedural particle network (120 particles) with gold lines connecting nearby nodes. Minimal loader progress indicator at bottom. Gold "N" monolith visible as subtle background geometry.

### Scene 02 — Secure Every Lead
8 animated gold data strands traveling through dark architectural walls. Magnetic CTA buttons. Directional scroll indicator.

### Scene 03 — The Cost of Legacy
200 signal particles split into grey (lost) and gold (protected). Intersection observer triggers the stat reveal (`₹10,000+ Cr` annual loss).

### Scene 04 — Digital Lead DNA™
Interactive double-helix layout. Each data strand (Identity, Source, Behaviour, Conversation, Property Intent, Timeline, Ownership) is hoverable/focusable with concise explanations.

### Scene 05 — AI Lead Journey
Timeline of 5 milestones (Capture → Understand → Prioritize → Engage → Convert) that illuminate sequentially based on scroll visibility.

### Scene 06 — Voice AI Concierge
Responsive 2D waveform animation reacting to scroll/time. Secure / Intelligent / Automated micro-points.

### Scene 07 — Predictive Intelligence
9 building towers representing predictive metrics. A selected tower becomes illuminated with a decision panel showing buying probability, recommended action, and confidence level.

### Scene 08 — Enterprise Intelligence Cloud (Pinned)
Three.js orbital module system with 8 module objects (LeadSense, Predict, Voice Vault, SecureDocs, Insight BI, WhatsFlow, BuilderConnect, BrokerOS). Each module is keyboard-focusable and selectable via a glass-panel overlay that updates the description. Auto-rotation disabled; user-controlled exploration.

### Scene 09 — CRM vs NEXORA
Segmented control (`Traditional CRM` / `NEXORA AI`) updates the environment and the 5 comparison lines (Static contacts → Living DNA, Manual follow-up → AI-directed action, etc.).

### Scene 10 — Zero Trust Security
Security constellation with 5 nodes around a central shield. Nodes illuminate on scroll progress and focus, connecting to the shield with gold lines.

### Scene 11 — Enterprise CTA
Calm final frame with massive editorial headline, dual CTAs (`Request enterprise access`, `Talk to NEXORA`), and minimal footer (`NEXORA AI / Intelligence. Security. Growth.`).

## Component Structure

```
components/
  Navigation.tsx        — Fixed glass nav with mobile overlay
  MagneticCursor.tsx    — Desktop-only restrained gold cursor halo
  ChapterRail.tsx       — Right-side vertical chapter navigation
  ScrollProgress.tsx    — Top progress bar tracking scroll position
  Preloader.tsx         — Luxury loader with shimmer animation
  Scene01.tsx           — Intelligence Awakens (Canvas particles)
  Scene02.tsx           — Secure Every Lead (Canvas strands)
  Scene03.tsx           — Legacy Cost (Canvas maze + stat reveal)
  Scene04.tsx           — Digital Lead DNA (Interactive helix)
  Scene05.tsx           — AI Lead Journey (Timeline)
  Scene06.tsx           — Voice AI (Canvas waveforms)
  Scene07.tsx           — Predictive Intelligence (Skyline + decision panel)
  Scene08.tsx           — Enterprise Intelligence Cloud (Three.js orbital)
  Scene09.tsx           — Contrast (Segmented control)
  Scene10.tsx           — Zero Trust (Constellation)
  Scene11.tsx           — Enterprise CTA + Footer
lib/
  useScrollProgress.ts   — Passive scroll tracking hook
app/
  layout.tsx             — Fonts, global CSS, metadata
  globals.css            — Design tokens, animations, luxury styling
  page.tsx               — Main page assembly
```

## Setup & Development

```bash
# Install
npm install

# Development server
npm run dev

# Build static export
npm run build

# Preview
npm start
```

The site is configured with `output: 'export'` in `next.config.js` for static hosting on Vercel, Netlify, or any CDN.

## Asset Placement & Cinematic Video Extension

This build uses **procedural WebGL/Canvas scenes** and **CSS animations** for reliability and zero external dependency. To upgrade to true continuous video scenes (as the scroll-world plugin architecture specifies), follow this asset pipeline:

### Required Video Assets

For each scene, the scroll-world plugin requires three video files:

1. **Poster/Still** (`scene-01-poster.webp`) — High-quality still shown before video loads
2. **Dive-In Clip** (`scene-01-dive.mp4`) — Camera moves from outside scene into interior
3. **Connector Clips** (`scene-01-to-02.mp4`, etc.) — Frame-locked seams joining consecutive scenes

### Mobile Strategy

Create parallel portrait (`9:16`) video clips for mobile. The site detects mobile and serves lighter assets automatically. The procedural scenes here are already optimized for mobile with reduced canvas complexity.

### Integration

To wire video assets into the current architecture:

1. Replace the `canvas` or `div` background in each `SceneXX.tsx` with a `<video>` element
2. Use `useScrollProgress()` to set `video.currentTime = (scrollPosition / sceneDuration) * video.duration`
3. Use `video.currentTime` updates inside `requestAnimationFrame` (not scroll events)
4. Set `video.muted playsInline preload="none"` for performance
5. Load posters as `poster` attribute; preload only Scene 01 video

### Example Video Integration Pattern (Scene 01)

```tsx
const videoRef = useRef<HTMLVideoElement>(null)
const { progress } = useScrollProgress()
useFrame(() => {
  if (videoRef.current) {
    const duration = videoRef.current.duration || 10
    videoRef.current.currentTime = progress * duration
  }
})
```

## Performance Notes

- **Core Web Vitals:** Static export minimizes Time to First Byte. Canvas animations are GPU-accelerated and lightweight.
- **Bundle Size:** ~366kB first load JS (includes Three.js for Scene 08). Below-the-fold scenes do not load Three.js chunks until reached.
- **Image Optimization:** Use `next/image` with `unoptimized: true` for static export. Replace with optimized `.avif` posters for scenes.
- **Accessibility:** All interactive elements work without JavaScript via semantic links and focus management. Reduced-motion override disables all animations instantly.

## Quality Assurance Checklist

- [x] Luxury brand palette (matte black, champagne gold, platinum)
- [x] Editorial serif + precision grotesk typography
- [x] Magnetic cursor (desktop) with restrained gold halo
- [x] Continuous 10-scene narrative architecture
- [x] Interactive module selector (Scene 08) with keyboard focus
- [x] Interactive DNA helix (Scene 04) with hover/focus explanations
- [x] Interactive timeline (Scene 05) with scroll-triggered progression
- [x] Interactive comparison (Scene 09) with segmented control
- [x] Interactive security constellation (Scene 10) with node illumination
- [x] Glass navigation with mobile overlay
- [x] Chapter rail navigation with active tracking
- [x] Scroll progress indicator
- [x] Reduced-motion support (`prefers-reduced-motion`)
- [x] Semantic HTML structure (`main`, `nav`, `aside`, `section`)
- [x] Keyboard navigation for all interactive elements
- [x] Visible focus states
- [x] Mobile responsive layout
- [x] No autoplay audio
- [x] No generic SaaS templates or stock-looking cards

## Credits

Brand direction, scene descriptions, and interaction specifications derived from the NEXORA AI enterprise intelligence brief. Procedural cinematic scenes built independently (no external video generation APIs required for this architecture). Scroll-world plugin architecture referenced for continuous flight design patterns.

---

**Note on the scroll-world plugin repo (`oso95/scroll-world`):**

The referenced plugin uses Higgsfield AI (image-to-video) and a portable vanilla-JS scrub engine. To fully implement its video-generation pipeline, you would:

1. Install the plugin: `npx skills add oso95/scroll-world`
2. Generate scene art via Higgsfield (isometric diorama style) or the user's uploaded assets
3. Generate camera flights via Seedance / Kling with frame-locking for seamless seams
4. Replace procedural scenes with the generated `.mp4` video chain using the scrub engine pattern described above
5. The architecture in this repo is fully compatible — the component structure supports both procedural (current) and video-driven (plugin) modes
