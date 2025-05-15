/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0D1117',
        'primary-blue': '#00FFFF',
        'primary-purple': '#9F44D3',
        'secondary-dark': '#1A1E24',
        'secondary-light': '#E2E8F0',
        'accent-1': '#F72585',
        'accent-2': '#4CC9F0'
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 10px #00FFFF, 0 0 20px #00FFFF' },
          '100%': { 'text-shadow': '0 0 20px #9F44D3, 0 0 30px #9F44D3' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)'
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF',
        'neon-purple': '0 0 5px #9F44D3, 0 0 10px #9F44D3',
      }
    },
  },
  plugins: [],
};