module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0066cc', // Example FMI blue color
        'custom-gray': '#f7f7f7',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Use FMI's font family
      },
    },
  },  
  plugins: [],
}

