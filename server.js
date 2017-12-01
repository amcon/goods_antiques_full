require('dotenv').config({ silent: true });
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var logger = require('morgan');
var path = require('path');
var _Promise = require('babel-runtime/core-js/promise')['default'];
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');
var apiRoute = require('./routes/api.js');
var development = process.env.NODE_ENV !== "production";
var DIST = path.join(__dirname, "/dist"),
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/', apiRoute);
app.use(history({ logger: logger }));





// app.use('/dist', express.static(DIST));

var compiler = webpack(webpackConfig);

if (development) {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: './dist/main.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));
} else {
  app.use(express.static(DIST));

  app.get("*", (req, res) => res.sendFile(path.join(DIST, "index.html")));
}


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Goods Antiques App listening at http://%s:%s', host, port);
});
