const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const projectRoot = process.cwd();

const MPA = () => {
  const entrys = {};
  const htmlWebpackPlugins = [];

  const entryFiles = glob.sync(path.join(projectRoot, './src/entry/*/index.js'));

  entryFiles.forEach((entryFile) => {
    const match = entryFile.match(/src\/entry\/(.*)\/index\.js/);
    const pageName = match && match[1];

    entrys[pageName] = entryFile;
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        title: 'webpack demo',
        template: path.join(projectRoot, `./src/pages/${pageName}.html`),
        filename: `${pageName}.html`,
        chunks: ['vendor', `${pageName}`],
        minify: {
          html5: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
        },
      }),
    );
  });

  return {
    entrys,
    htmlWebpackPlugins,
  };
};

const { entrys, htmlWebpackPlugins } = MPA();

module.exports = {
  entry: entrys,
  output: {
    path: path.join(projectRoot, './dist'),
    filename: '[name]_[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
        ],
      },
      {
        test: /.(woff|woff2|eot|svg|ttf|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new FriendlyErrorsWebpackPlugin(),
    function errorPlugin() {
      this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
          process.exit(1);
        }
      });
    },
  ].concat(htmlWebpackPlugins),
};
