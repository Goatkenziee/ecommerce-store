/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#809bce",
          DEFAULT: "#2c5280",
          dark: "#1e3a8a",
        },
        secondary: {
          light: "#fec89a",
          DEFAULT: "#f4a261",
          dark: "#e76f00",
        },
        accent: {
          light: "#a3e635",
          DEFAULT: "#84cc16",
          dark: "#65a30d",
        },
        background: {
          light: "#f8fafc",
          DEFAULT: "#ffffff",
          dark: "#1f2937",
        },
        text: {
          light: "#374151",
          DEFAULT: "#111827",
          dark: "#e5e7eb",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
