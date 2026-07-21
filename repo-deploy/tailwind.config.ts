import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#060606',
        graphite: '#111111',
        'smoked-glass': 'rgba(255,255,255,0.07)',
        'champagne': '#D9B55A',
        'pale-gold': '#F4D98B',
        platinum: '#E9E6DF',
        'muted-stone': '#8E8C86',
        'signal-green': '#8BD450',
      },
      fontFamily: {
        editorial: ["'Playfair Display'", 'Georgia', 'serif'],
        precision: ["'Inter'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
