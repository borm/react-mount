'use strict';
let fs = require('fs');
(function () {
  /**
   * Require App
   */
  let babelrc = fs.readFileSync('.babelrc');
  let config;
  try {
    config = JSON.parse(babelrc);
  } catch (err) {
    console.error('==> ERROR: Error parsing your .babelrc.');
    console.error(err);
  }

  require('babel-core/register')(config);
  //require("babel-polyfill");
  require('./devServer')
})();
