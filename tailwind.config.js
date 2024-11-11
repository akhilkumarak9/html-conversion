/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f8",
        white: "#fff",
        lightsteelblue: "#c7d5e9",
        gray: "#212121",
        ghostwhite: "#eff0fa",
        darkslategray: "#395071",
        steelblue: "#4b6790",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1550: {
        raw: "screen and (max-width: 1550px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
