/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDownFade: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRightFade: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-down-fade": "slideDownFade 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
        "slide-right-fade": "slideRightFade 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
      },
    },
  },
  plugins: [],
};
