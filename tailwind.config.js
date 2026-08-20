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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#046bd2',
          600: '#045cb4',
          700: '#0550a0',
          800: '#064085',
          900: '#0a3570',
        },
        slate: {
          700: '#1e293b',
          600: '#334155',
          500: '#475569',
          400: '#64748b',
          300: '#94a3b8',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f9fafb',
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
