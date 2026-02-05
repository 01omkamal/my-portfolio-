// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 
          'linear-gradient(135deg, rgba(131, 58, 180, 0.25) 0%, rgba(253, 29, 29, 0.25) 50%, rgba(252, 176, 69, 0.25) 100%)',
      },
    },
  },
  plugins: [],
};
