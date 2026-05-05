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
        navy: {
          950: '#060E1B',
          900: '#0C1A2E',
          800: '#112340',
          700: '#1A3258',
          600: '#234070',
        },
        accent: {
          DEFAULT: '#3B6FD4',
          dark: '#2A54A8',
          light: '#6B97E8',
          subtle: '#EEF3FC',
        },
        stone: {
          50: '#FAFAF8',
          100: '#F4F3F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
