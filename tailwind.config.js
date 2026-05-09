/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        card: 'hsl(var(--card))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-mono)'],
      },
    },
  },
  plugins: [],
}
