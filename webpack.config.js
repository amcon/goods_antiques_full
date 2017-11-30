const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    `${APP_DIR}/index.js`,
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { test: /\.jpg$/,
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      { test: /\.png$/,
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
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
