module.exports = {
  content: ["./src/**/*.{vue,js}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    darkTheme: "dark",
  },
}
