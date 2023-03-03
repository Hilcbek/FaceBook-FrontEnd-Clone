/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        'Quicksand' : 'Quicksand'
      }
    },
  screens: {
    'xs' : '365px',
    // => @media (min-width: 375px) { ... }

    'sm': '690px',
    // => @media (min-width: 640px) { ... }

    'md': '868px',
    // => @media (min-width: 768px) { ... }

    'lg': '1100px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1260px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  }
    },
  plugins: [],
}


