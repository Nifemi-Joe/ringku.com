/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'img': 'none',
        '0': '0',
        // Add other values as needed
      },
      height: {
        'auto': 'auto',
        // Add other values as needed
      },
    },
  },
  plugins: [],
}

