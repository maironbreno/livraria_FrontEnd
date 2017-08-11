'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf').conf;

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'
}));

gulp.task('serve', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:dev', ['build'], serveAndWatch);

function serveAndWatch() {
  gulp.start('watch');
  browserSyncInit(conf.paths.dist);
}

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}
