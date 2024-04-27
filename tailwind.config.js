/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url('/public/Wallpaper.jpg')",
      },
      backgroundColor: {
        "powder-pink" : '#6930C5',
      }
    },
  },
  plugins: [],
};
