const merge = require('webpack-merge');
const baseConfig = require('./base.config');
// const mockApi = require('../mockApi')

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
  ],
  devServer: {
    allowedHosts: [], // the white name of allowing to use the local express server
    contentBase: false, // collocaction static files
    compress: false, // use gip compress all of the content in the server
    bonjour: false, // false confused?
    disableHostCheck: false, // bypass host check
    lazy: false, // lazy mode
    filename: 'index.js',
    clientLogLevel: 'info', // info, silent, trace, debug, warn, error, none, warining
    headers: {
      'custom-Foo': 'ding', // add coustom header items for response
    },
    /* https: {
            key: '',
            cert: '',
            ca: ''
        }, */
    open: true,
    // openPage: '', // if open and openPage is setted in the same time, openPage is aviliable
    hot: true, // module hot replace ？
    overlay: true, // show error information overlay the browser
    proxy: {
    },
    watchOptions: {
      ignored: '/node-modules/',
      aggregateTimeout: 1000,
      poll: 1000, // default: 1000 Loop check files is changed
    },
    stats: 'errors-only',
  },
};

module.exports = merge.smartStrategy({})(baseConfig, devConfig);
