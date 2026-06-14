/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'audiohive-red': '#DFB15B',
        'dark': '#0B0B0B',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',
      },
      fontFamily: {
        'sans': ['Zuume Rough', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'general-sans': ['General Sans', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'montreal': ['Neue Montreal', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'lg': ['20px', { lineHeight: '1.6' }],
        'xl': ['24px', { lineHeight: '1.6' }],
        '2xl': ['32px', { lineHeight: '1.4' }],
        '3xl': ['48px', { lineHeight: '1.3' }],
        '4xl': ['64px', { lineHeight: '1.2' }],
        '5xl': ['80px', { lineHeight: '1.1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'glow-red': '0 0 40px rgba(223, 177, 91, 0.3)',
        'glow-red-lg': '0 0 80px rgba(223, 177, 91, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(223, 177, 91, 0.3)' },
          '50%': { boxShadow: '0 0 80px rgba(223, 177, 91, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
