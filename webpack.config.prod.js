const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const webpackBuildConfig = merge(webpackConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});

module.exports = webpackBuildConfig;
