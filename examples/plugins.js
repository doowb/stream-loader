'use strict';

require('jshint-stylish');
var jshint = require('gulp-jshint');
var toVinyl = require('./to-vinyl');
var debug = require('./debug');
var contents = require('../contents');
var loader = require('..');

/**
 * Convert files to vinyl files
 */
var src = loader(toVinyl);

/**
 * Example usage
 */
src('examples/*.js')
  .pipe(src('*.js'))
  .pipe(contents())
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(debug());

