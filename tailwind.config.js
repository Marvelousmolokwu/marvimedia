/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      roboto: ["Roboto", " sans-serif"],
    },
    backgroundImage: {
      profile:
        "url('https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646475/woman3_knlaah.avif')",
      profile2: "url('/src/images/man1.avif')",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1500px",
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
