module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      sm: { max: "600px" },
      // => @media (max-width: 600px) { ... }
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        light: "var(--color-light)",
        "color-bg": "var(--color-bg)",
        "black-rgba": "rgba(0, 0, 0, 0.3)",
        variant: "var(--color-bg-variant)",
        "primary-variant": "var(--color-primary-variant)",
      },
    },
  },
  plugins: [],
};
