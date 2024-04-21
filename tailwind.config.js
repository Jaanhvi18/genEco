/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: "#90AECF",
        white: "#FFFFFF",
        "custom-blue": "#007bff",  // Example custom color
        "light-gray": "#f7f7f7",
      },
      spacing: {
        '72': '18rem',  // Example additional spacing
        '128': '32rem',  // Large spacing for large layout elements
      },
      borderRadius: {
        'xl': '1rem',  // Extra large border radius
      },
      fontFamily: {
        'sans': ['Graphik', 'sans-serif'],  // Custom font
        'serif': ['Merriweather', 'serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',  // Custom shadow
      },
      transitionProperty: {
        'height': 'height',  // Enables transitions for height
        'spacing': 'margin, padding',  // Enables transitions for spacing
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  
};
