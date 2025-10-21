/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', '"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'pulse-glow-delayed-1': 'pulse-glow 4s ease-in-out infinite 1s',
        'pulse-glow-delayed-2': 'pulse-glow 4s ease-in-out infinite 2s',
        'pulse-delayed-0.5': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s',
        'pulse-delayed-1.5': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1.5s',
        'pulse-delayed-2.5': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 2.5s',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
