'use strict';

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf').conf;

gulp.task('clean', clean);
gulp.task('build', ['environmentSetup', 'html', 'scripts', 'styles', 'assets']);

function clean(){
  var del = require('del');
  var delPaths = [path.join(conf.paths.dist, '**/*')];
  return del(delPaths);
}
