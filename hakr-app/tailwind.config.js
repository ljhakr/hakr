/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    colors: {
      white: "#fff",
      body: "#0ff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      // custom classes
      muted: "#8492a6",
    },
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    container: {
      center: true,
      screens: {
        sm: "100%", // => @media (min-width: 640px) { ... }
        md: "100%", // => @media (min-width: 768px) { ... }
        lg: "100%", // => @media (min-width: 1024px) { ... }
        xl: "1280px", // => @media (min-width: 1280px) { ... }
      },
    },
    extend: {
      colors: {
        "danger-color": "var(--red-color)",
        "secondary-color": "var(--white-color)",
        "gradient-outside": "var(--gradient-outside-color)",
        "gradient-inside": "var(--gradient-inside--color)",
        "soft-background": "var(--soft-background-color)",
        "muted-color": "var(--muted-color)",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  corePlugins: {
    container: true
  },
  plugins: [
    require('flowbite/plugin'),

    function({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1280',
          },
        }
      })
    }
  ]
};
