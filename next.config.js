/* eslint-disable @typescript-eslint/no-var-requires */
const SriPlugin = require('webpack-subresource-integrity');

module.exports = {
  webpack(config) {
    config.output.crossOriginLoading = 'anonymous';
    config.plugins.push(
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: process.env.NODE_ENV === 'development' ? false : true,
      })
    );

    return config;
  },
};
