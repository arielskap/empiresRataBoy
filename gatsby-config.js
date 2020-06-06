module.exports = {
  siteMetadata: {
    title: 'Empires Puzzle: Rata B Boy',
    description: 'Empires Puzzle Tutoriales en español',
    author: '@arielskap',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-portal',
      options: {
        key: 'modal',
        id: 'modal',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Empires Puzzle: Rata B Boy',
        short_name: 'EPRBB',
        start_url: '/',
        background_color: '#011f67',
        theme_color: '#011f67',
        display: 'minimal-ui',
        icon: 'src/assets/static/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
