import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Minecraftia: ['Minecraftia'],
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        expand: {
          '0%, 100%': { transform: 'scale(0.95) rotate(-20deg)' },
          '50%': { transform: 'scale(1) rotate(-20deg)' },
        },
      },
      animation: {
        expand: 'expand 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
