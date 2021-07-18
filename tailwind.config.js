module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // map: 'url("/dist/assets/map.svg")',
        'map': "url('assets/map.svg')",
      }),
      colors: (theme) => ({
        'blue-dark': '#115B76',
        'green-dark': '#1DC0AD',
        'green-light': '#28dac5',
      }),
      height: (theme) => ({
        'footer-bg': '440px',
        hero: '400px',
        'hero-mobile': '280px',
        contactUs: '320px',
      }),
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        montserrat: '"Montserrat Alternates", sans-serif',
        'open-sans': '"Open Sans", sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
