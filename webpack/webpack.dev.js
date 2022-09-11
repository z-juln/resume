const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    proxy: {
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: 'all',
    open: {
      app: {
        name: 'Google Chrome',
      },
    },
  },
});
