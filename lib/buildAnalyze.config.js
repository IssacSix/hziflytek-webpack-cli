/*
 * @Author: xjding2
 * @Date: 2019-09-25 10:54:19
 * @Last Modified by:   xjding2
 * @Last Modified time: 2019-09-25 10:54:19
 */
const merge = require('webpack-merge');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./prod.config');

const smp = new SpeedMeasureWebpackPlugin({
  outputFormat: 'humanVerbose',
});

const analyzeConfig = smp.wrap({
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});

module.exports = merge.smartStrategy({})(prodConfig, analyzeConfig);
