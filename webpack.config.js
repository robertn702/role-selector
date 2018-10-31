const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// const isDev = process.env.NODE_ENV === 'dev';
const isProd = process.env.NODE_ENV === 'production';

const extractSass = new ExtractTextPlugin({
  allChunks: true,
  // disable: isDev,
  filename: '[name].[contenthash].css',
});

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
    vendor: [
      '@material-ui/core',
      'immutable',
      'keymirror',
      'lodash',
      'react',
      'react-dom',
      'react-redux',
      'redux',
    ],
  },
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   sourceMapFilename: '[file].map',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    pathinfo: true,
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
      'process.env.TARGET_BROWSER': JSON.stringify(process.env.TARGET_BROWSER || 'chrome'),
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.ejs'),
      // title: appHtmlTitle
    }),
    extractSass,
    new StyleExtHtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: { fix: true }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.s?css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: isProd,
                sourceMap: true,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ],
          fallback: 'style-loader'
        }),
      },
      // {
      //   exclude: [
      //     /\.html$/,
      //     /\.(js|jsx)$/,
      //     /\.css$/,
      //     /\.scss$/,
      //     /\.json$/,
      //     /\.bmp$/,
      //     /\.gif$/,
      //     /\.jpe?g$/,
      //     /\.png$/,
      //   ],
      //   loader: 'file-loader',
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // }
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('__dirname'),
    ],
    extensions: ['.js', '.json', '.jsx'],
  },
};
