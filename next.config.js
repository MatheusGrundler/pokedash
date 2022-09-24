/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
const nextTranslate = require('next-translate')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  swcMinify: true
})

module.exports = nextTranslate({
  images: {
    domains: ['images.pokemontcg.io']
  },

  /**
   * Custom Webpack Config
   * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */

  webpack(config, options) {
    const { dev, isServer } = options

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  }
})
