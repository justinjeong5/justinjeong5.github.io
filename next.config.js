const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '' : '';

module.exports = ({
  assetPrefix: assetPrefix,
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  webpack(config, { webpack }) {
    return {
      ...config,
      mode: isProd ? 'production' : 'development',
    }
  },
});