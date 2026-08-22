/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effcfa',
          100: '#c9f6ee',
          200: '#94ecdd',
          300: '#5cdcc8',
          400: '#2ec6ae',
          500: '#0d9488',
          600: '#0b7d73',
          700: '#0a655e',
          800: '#0a504b',
          900: '#08403c',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        slate: {
          700: '#1e293b',
          600: '#334155',
          500: '#475569',
          400: '#64748b',
          300: '#94a3b8',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#faf9f7',
        },
      },
      fontFamily: {
        sans: ['Assistant', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Rubik', 'Assistant', 'sans-serif'],
      },
      maxWidth: {
        'container': '1240px',
      },
      borderRadius: {
        'sm': '2px',
      },
    },
  },
  plugins: [],
}
