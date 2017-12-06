const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: ['babel-polyfill', path.resolve(__dirname, '/src/index.js')],
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  cache: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.ProvidePlugin({
      i18n: "i18next",
      '_': "lodash",
      'numeral': "numeral",
      React: "react",
      ReactDOM: "react-dom"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({filename: "styles.css", allChunks: true}),
    new GoogleFontsPlugin({
            fonts: [
                { family: 'Libre Baskerville' },
                { family: 'Open Sans' }
            ]
        }),
    new HtmlWebpackPlugin({
      title: 'Goods Antiques',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root-container',
      favicon: 'public/images/favicon.ico'
    }),
  ],
  resolve: {
    modules: [
      path.join(__dirname, '/node_modules'),
      path.resolve(__dirname, '/src')
    ],
    extensions: ['.js', '.jsx', ".es6", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/.*node_modules((?!my-npm-linked-module-name).)*$/',
        include: APP_DIR,
        loader: [
          'babel-loader?presets[]=react,presets[]=es2015',
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
        test: /\.ico$/,
        loader: 'file-loader'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
    ],
  },
};

// if (process.env &&
//   process.env.NODE_ENV &&
//   process.env.NODE_ENV === 'production') {
//   const prodPlugins = [
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: true,
//       },
//       output: {
//         comments: false,
//       },
//     }),
//     new webpack.optimize.CommonsChunkPlugin('/common'),
//   ];

//   config.plugins = config.plugins.concat(prodPlugins);

//   config.cache = false;
//   config.devtool = undefined;
// }

module.exports = config;
