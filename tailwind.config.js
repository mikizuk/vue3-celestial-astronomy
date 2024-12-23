/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-background-primary': 'var(--background-primary)',
        'color-background-secondary': 'var(--background-secondary)',
        'color-border': 'var(--border)',
        'color-card': 'var(--card)',
        'color-copy-primary': 'var(--copy-primary)',
        'color-copy-secondary': 'var(--copy-secondary)',
        'color-cta': 'var(--cta)',
        'color-cta-active': 'var(--cta-active)',
        'color-cta-text': 'var(--cta-text)',
      },
      gridTemplateRows: {
        'wrapper-layout': 'min-content 1fr min-content',
      },
    },
  },
  plugins: [],
}
