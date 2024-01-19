module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    extend: {
      minHeight: {
        'screenh' : '100vh',
      },
    },
    colors: {
      blue: {
        "dark": "#212026",
        "light": "#7A98D1"
      },
      silver: "#C8CDD8"
    }
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    serif: ['Crimson', 'serif'],
  },
};
