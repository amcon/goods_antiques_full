const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'main.js',
  },
  cache: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: [
             { loader: require.resolve('css-loader'), options: { minimize: true } }
          ]
       })
      },
      { test: /\.jpg$/,
        loader: 'file-loader'
      },
      { test: /\.png$/,
        loader: 'file-loader'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Goods Antiques',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root-container'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({filename: "styles.css", allChunks: true}),
    new GoogleFontsPlugin({
            fonts: [
                { family: 'Libre Baskerville' },
                { family: 'Open Sans' }
            ]
        })
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
