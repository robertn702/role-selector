const path = require('path');

const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const webpackDevProxyConfig = merge(webpackConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    host: '0.0.0.0',
    // proxy: [
    //   {
    //     context: ['/api', '/auth'],
    //     target: 'http://localhost:9000',
    //     changeOrigin: false,
    //   },
    //   {
    //     context: ['/socketjs-node'],
    //     target: 'http://localhost:3000',
    //   }
    // ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    pathinfo: true,
    filename: '[name].js'
  },
});

console.log('[webpack.config.dev.proxy] webpackDevProxyConfig: ', webpackDevProxyConfig);

module.exports = webpackDevProxyConfig;
