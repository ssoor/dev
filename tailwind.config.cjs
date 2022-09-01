const daisyui = require('daisyui')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0246cc',
          darken: {
            25: '#023db3',
            25: '#011b4e',
          },
          lighten: {
            15: '#1e69fd',
            25: '#508afd',
            50: '#cedfff',
          },
        },
        main: {
          DEFAULT: '#171c26',
          darken: {
            25: '#767996',
          },
          lighten: {
            5: '#2a3346',
            20: '#3d4b66',
            45: '#8696b6',
            50: '#cedfff',
          },
        },
        grey: {
          DEFAULT: '#171c26',
          100: '#f7fafc',
          200: '#edf2f7',
          lighten: {
            5: '#2a3346',
            15: '#e7e9ed',
            20: '#f5f6f8',
          },
        },
        gray: {
          DEFAULT: '#bbc1cc',
          darken: {
          },
          lighten: {
            15: '#e7e9ed',
            20: '#f5f6f8',
          },
        },
      },
      minWidth: {
        '2': '0.5rem',
        '3': '0.75rem',
        '72': '18rem',
      },
    },
  },
  plugins: [daisyui],
  
  // daisyUI config (optional)
  daisyui: {
    styled: false,
  },
}
