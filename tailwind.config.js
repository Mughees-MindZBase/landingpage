/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        normal: "16px",
        large: "48px",
        extralarge: "64px",
      },
      colors: {
        primaryColor: "rgba(255, 255, 255, 1)",
        secondaryColor: "rgba(235, 235, 235, 1)",
        lightGrey: "rgba(255, 255, 255, 0.75)",
        popularCardText: "rgba(81, 93, 239, 1)",
        grey: "rgba(128, 141, 158, 1)",
      },
      backgroundColor: {
        overallBackground: "rgba(5, 17, 57, 1)",
        primaryBackground: "rgba(106, 101, 255, 0.08)",
        primaryButtonBackground: "rgba(106, 101, 255, 1)",
        analysisButtonBackground: "rgba(35, 107, 254, 1)",
        reviewBackground: "rgba(21, 25, 37, 1)",
        popularCardBckground: "rgba(81, 93, 239, 1)",
        simpleCardBackground: "rgba(13, 24, 73, 1)",
        mudColor: "rgba(255, 216, 141, 1)",
      },
      border: {
        popularCardBorder: "rgba(81, 93, 239, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
