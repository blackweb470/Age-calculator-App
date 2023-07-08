/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "13px-13px-150px": "0px 0px 150px",
      },
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "purple": "hsl(259, 100%, 65%)",
        "Off-white": "hsl(0, 0%, 94%)",
        "lightred": "hsl(0, 100%, 67%)",
        "light-gray": "hsl(0, 0%, 86%)",
      },
      maxWidth: {
        "666px": "666px"
        },
        spacing:{
          "80%": "100%"
        },
        fontFamily: {
          "poppins-sans-sans-erif":"'Poppins', sans-serif"
        }
    },
  },
  plugins: [],
}

