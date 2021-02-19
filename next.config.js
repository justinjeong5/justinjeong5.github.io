const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const prod = process.env.NODE_ENV === 'production'
const basePath = prod ? '/client' : '';

module.exports = withBundleAnalyzer({
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  basePath,
  assetPrefix: `${basePath}/`,
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
          'process.env.ASSET_PREFIX': JSON.stringify(`${basePath}/`),
        }),
      ]
    }
  },
});