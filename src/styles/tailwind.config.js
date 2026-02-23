// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",      // deep blue
        accent: "#F59E0B",       // amber
        background: "#F3F4F6",   // light gray
        text: "#1F2937",         // dark gray
      }
    }
  },
  plugins: [],
}