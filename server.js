require('dotenv').config({ silent: true });
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const logger = require('morgan');
const path = require('path');
const _Promise = require('babel-runtime/core-js/promise')['default'];
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const apiRoute = require('./routes/api.js');

const app = express();

const compiler = webpack(webpackConfig);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

app.use('/api/', apiRoute);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'main.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
