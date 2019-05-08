require('dotenv').config({ silent: true });
require('core-js/modules/es6.symbol');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const apiRoute = require('./routes/api.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const _Promise = require('babel-runtime/core-js/promise')['default'];
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/', apiRoute);
app.use(history({ logger: logger }));





app.use('/dist', express.static(path.join(__dirname, 'dist')));

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: './dist/main.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Goods Antiques App listening at http://%s:%s', host, port);
});
