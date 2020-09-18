const withOffline = require('next-offline')

module.exports = withOffline({
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ]
  },
})

// module.exports = {
//   assetPrefix: './',
//   exportTrailingSlash: true,
// }

if (process.env.MOBILE !== 'false') {
  module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  }
}
