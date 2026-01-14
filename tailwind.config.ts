import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from BRAND-STYLE-GUIDE.md
        cream: '#F5F3EF',
        'warm-taupe': '#D4C5B3',
        'soft-grey': '#9B9B9B',
        charcoal: '#3A3A3A',
        'natural-wood': '#A67C52',
        'sage-green': '#8A9A7B',
      },
      fontFamily: {
        // Playfair Display for headings (serif)
        serif: ['Playfair Display', 'serif'],
        // Inter for body text (sans-serif)
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Typography hierarchy from brand guide
        'hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 56px
        'h1': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],   // 40px
        'h2': ['1.75rem', { lineHeight: '1.4' }],                            // 28px
        'h3': ['1.25rem', { lineHeight: '1.5' }],                            // 20px
      },
      spacing: {
        // Spacing system (8px base) from brand guide
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
    },
  },
  plugins: [],
}
export default config
