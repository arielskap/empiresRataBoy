module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production' ? true : false,
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      whitelistPatterns: [/^bg-/, /^border-/],
    }
  },
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
