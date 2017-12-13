import express from 'express';
import webpack from 'webpack';
import path from 'path';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.babel';

/* eslint-disable no-console */
import config from './config';
const { host, port } = config;
const app = express();
const isDev = config.env === 'development';

const compiler = webpack(webpackConfig);
let bundleStart = null;
// We give notice in the terminal when it starts bundling and
// set the time it started
compiler.plugin('compile', function () {
  console.log('Bundling...');
  bundleStart = Date.now();
});

// We also give notice when it is done compiling, including the
// time it took. Nice to have
compiler.plugin('done', function () {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});
const middleware = webpackDevMiddleware(compiler, {
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  headers: {'Access-Control-Allow-Origin': '*'},
  publicPath: webpackConfig.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
  res.write(middleware.fileSystem.readFileSync(
    path.join(__dirname, 'index.html')
  ));
  res.end();
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://${host}:${port}`);
  }
});
