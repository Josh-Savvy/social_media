module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": -1,
      },
      translate: {
        4.25: "200rem",
      },
    },
  },
  plugins: [],
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"],
  },
};
