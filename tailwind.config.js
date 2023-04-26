/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      roboto: ["Roboto", " sans-serif"],
    },
    backgroundImage: {
      profile: "url('/src/images/woman1.avif')",
      profile2: "url('/src/images/man1.avif')",
    },

    extend: {
      colors: {
        blue: "#0a4d68",
        lightBlue: "#088395",
        skyBlue: "#009fbd",
        ash: "#b5c9d1",
        blulish: "#e6edef",
      },
    },
  },
  plugins: [],
};