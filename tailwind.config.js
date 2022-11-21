module.exports = {
  content: ["./src/**/*.{vue,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        latale: {
          primary: "rgba(18, 14, 56, 0.9)",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    darkTheme: "dark",
  },
}
