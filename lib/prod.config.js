/*
 * @Author: xjding2
 * @Date: 2019-09-25 10:54:53
 * @Last Modified by:   xjding2
 * @Last Modified time: 2019-09-25 10:54:53
 */
const cssnano = require('cssnano');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const baseConfig = require('./base.config');

const prodConfig = {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /.css$/g,
      cssProcessor: cssnano,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          // test: /(react|react-dom)/,
          minChunks: 2,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
      }),
    ],
  },
};

module.exports = merge.smartStrategy({})(baseConfig, prodConfig);
