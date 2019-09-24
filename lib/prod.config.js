const cssnano = require('cssnano');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./base.config');

const smp = new SpeedMeasureWebpackPlugin({
  outputFormat: 'humanVerbose',
});

const prodConfig = smp.wrap({
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /.css$/g,
      cssProcessor: cssnano,
    }),
    new BundleAnalyzerPlugin(),
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
  },
});

module.exports = merge.smartStrategy({})(baseConfig, prodConfig);
