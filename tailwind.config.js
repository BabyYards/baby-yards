/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#9065B0',
        lightPurple: '#F4F0F7',
        black: '#141414',
        blue: '#074EE8',
        grey: '#C4C4C4',
        green: '#008137',
        red: '#D4080E',
        brdgrey: '#b9b9b9', // border-grey
        headerColor: '#0A093D'
      },
      height: {
        h2: 'h-8',  // 32px
        h3: 'h-12', // 48px
        h4: 'h-16',
        h5: 'h-20',
        h6: 'h-24',
        h7: 'h-28',
        h8: 'h-32',
        h9: 'h-36',
        h10: 'h-40',
        h11: 'h-44',
        h12: 'h-48',
        h13: 'h-52',
        h14: 'h-56',
        h15: 'h-60',
        h16: 'h-64',
        h18: 'h-72',
        h20: 'h-80',
        h24: 'h-96',
      },
      width: {
        w2: 'w-8',  // 32px
        w3: 'w-12', // 48px
        w4: 'w-16',
        w5: 'w-20',
        w6: 'w-24',
        w7: 'w-28',
        w8: 'w-32',
        w9: 'w-36',
        w10: 'w-40',
        w11: 'w-44',
        w12: 'w-48',
        w13: 'w-52',
        w14: 'w-56',
        w15: 'w-60',
        w16: 'w-64',
        w18: 'w-72',
        w20: 'w-80',
        w24: 'w-96',
      }
    },
  },
  plugins: [],
}
