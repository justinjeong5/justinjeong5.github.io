const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const prod = process.env.NODE_ENV === 'production'
const assetPrefix = prod ? 'https://justinjeong5.github.io' : '';

module.exports = withBundleAnalyzer({
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: assetPrefix,
  compress: true,
  webpack(config, { webpack }) {
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/ko/),
        new webpack.DefinePlugin({
          'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        }),
      ]
    }
  },
});