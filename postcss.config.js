const stylelint = require('stylelint');

module.exports = {
  plugins: [
    [
      'postcss-import',
      {
        plugins: [
          stylelint()
        ]
      }
    ],
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        stage: 0,
      },
    ],
    'postcss-sort-media-queries'
  ]
};
