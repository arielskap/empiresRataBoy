module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  // purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  purge: false,
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#274567',
      'secondary': '#32618b',
      'tertiary': '#06213c'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'tertiary': '#06213c',
      'asd': '#163047'
    })
  },
  variants: {},
  plugins: [],
};
