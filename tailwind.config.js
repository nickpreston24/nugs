
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // https://www.tailwindshades.com/#color=42B983&step-up=10&step-down=10&name=ocean-green&overrides=e30%3D
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      red: "#a45",
      'ocean-green': {
        DEFAULT: '#42B983',
        '50': '#E9F7F1',
        '100': '#D6F1E5',
        '200': '#B1E3CC',
        '300': '#8BD6B4',
        '400': '#66C89C',
        '500': '#42B983',
        '600': '#359368',
        '700': '#276E4E',
        '800': '#1A4833',
        '900': '#0C2319'
      },
      gray: {
        300: "#455",
      },
      arctic: {
        100: "#eef5fc",
        200: "#ddebf8",
        300: "#cce0f5",
        400: "#bbd6f1",
        500: "#aaccee",
        600: "#88a3be",
        700: "#667a8f",
        800: "#44525f",
        900: "#222930",
      },
      regal: {
        100: "#d3d8de",
        200: "#a7b1bd",
        300: "#7c8a9c",
        400: "#50637b",
        500: "#243c5a",
        600: "#1d3048",
        700: "#162436",
        800: "#0e1824",
        900: "#070c12",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["active", "group-hover"],
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
