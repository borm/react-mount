'use strict';
import fs from 'fs'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import config from 'config';

const babelRc = JSON.parse(fs.readFileSync('./.babelrc'));

const { source, output } = config;

const webpackConfig = {
  devtool: 'source-map',
  target: "web",
  context: source,
  resolve: {
    modules: [source, 'node_modules'],
    extensions: ['.js', '.jsx', '.scss'],
  },
  entry: {
    app: ['webpack-hot-middleware/client', './app.js'],
  },
  output: {
    path: output,
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: babelRc.presets,
          plugins: (plugins => {
            plugins.push(
              ['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }]
              }]
            );

            return plugins;
          })(babelRc.plugins)
        }
      }],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'app.html',
      inject: 'body',
      filename: 'index.html'
    }),
  ]
};

export default webpackConfig
