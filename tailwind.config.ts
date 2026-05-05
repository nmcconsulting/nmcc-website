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
        forest: {
          950: '#0E1A0D',
          900: '#1C2B1A',
          800: '#253822',
          700: '#2E4529',
          600: '#3A5533',
        },
        amber: {
          DEFAULT: '#C17A3A',
          dark: '#A35F22',
          light: '#D9A06B',
          subtle: '#FBF3E8',
        },
        cream: {
          50: '#FFFDF9',
          100: '#F5F0E8',
          200: '#EDE5D8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        '2xl': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

export default config
