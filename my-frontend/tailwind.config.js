// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your structure
  ],
  theme: {
    extend: {
      keyframes: {
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'gradient-spin': 'slow-spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
