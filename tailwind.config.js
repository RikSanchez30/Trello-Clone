/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'tablet-xl': '940px',
      'laptop': '1024px',
      'laptop-lg': '1090px',
      'desktop': '1280px',
      'pc': '1380px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      
      animation: {
     
        numColorChange: 'numColorChange 3s infinite',
        colorChange: 'colorChange 3s infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        
        numColorChange: {
          '0%, 100%': { color: '#2525da' },   
          '25%': { color: '#ffffff' },
          '50%': { color: '#2525da' },
          '75%': { color: '#ffffff' },
        },
        colorChange: {
          '0%, 100%': { color: '#ffffff' },   
          '25%': { color: '#2525da' },
          '50%': { color: '#ffffff' },
          '75%': { color: '#2525da' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateY(30px)' },
          '50%': { transform: 'translateY(-60px)' },
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.grid-cols-auto-fit': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        },
        '.grid-cols-auto-fill': {
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        },
    
      });
    },
  ],
};
