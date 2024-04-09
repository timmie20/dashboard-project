/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-clr-indigo": "#5570F1",
        "orange-clr-light": "#FFEAD1",
        "orange-clr-full": "#FFCC91",
        "gray-clr-50": "#A6A8B1",
        "gray-clr-light": "#5E63661A",
        "gray-clr-medium": "#1C1D22",
        "gray-clr-full": "#1C1D22",
      },
      fontFamily: {
        Inter: "Inter,sans-serif",
        Poppins: "Poppins,sans-serif",
      },
    },
  },
  plugins: [],
};
