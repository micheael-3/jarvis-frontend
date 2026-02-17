/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        jarvis: {
          bg: '#0a0a0f',
          surface: '#12121a',
          border: '#1e1e2e',
          accent: '#3b82f6',
          success: '#22c55e',
          warning: '#eab308',
          error: '#ef4444',
          text: '#e4e4e7',
          muted: '#71717a'
        }
      }
    },
  },
  plugins: [],
}