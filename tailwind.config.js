/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FE486D",
        greybg: "#1C1D21",
        projectcardbg: "rgb(var(--projectcard-bg))",
        ll_btn_col: "#F4D0C4",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
      },
    },
  },
  plugins: [],
};
