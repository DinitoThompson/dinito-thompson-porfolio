/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('/public/assets/Background/Home.jpg')",
        "about-page": "url('/public/assets/Background/About.jpg')",
        "experience-page": "url('/public/assets/Background/Experience.jpg')",
        "portfolio-page": "url('/public/assets/Background/Portfolio.jpg')",
        "contact-page": "url('/public/assets/Background/Contact.jpg')",
      },
    },
  },
  plugins: [],
};
