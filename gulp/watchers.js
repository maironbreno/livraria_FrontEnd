'use strict';

var gulp = require('gulp');
var conf = require('./conf').conf;
var browserSync = require('browser-sync');
var argv = require('yargs').argv;

gulp.task('watch', watch);

gulp.task('jsTestWatcher', ['appJs'], function(){
  if(!argv.withoutTest){
    gulp.start('test');
  }
});

function watch() {
  gulp.watch(conf.paths.js.all, ['jsTestWatcher']);
  gulp.watch([conf.paths.html.files, conf.paths.html.index, conf.paths.html.favicon], ['html']);
  gulp.watch(conf.paths.scss.files, ['appCSS']);
  gulp.watch([conf.paths.css.app].concat(conf.paths.css.ignore), ['appCSS']);
  gulp.watch(conf.paths.css.other.highContrast, ['highContrastCss']);
  gulp.watch(['bower.json', 'package.json'], ['vendorJs', 'vendorCSS']);
}
