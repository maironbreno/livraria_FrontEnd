'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var argv = require('yargs').argv;

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
var gulpFolder = './gulp';
wrench.readdirSyncRecursive(gulpFolder).filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require(gulpFolder + '/' + file);
});

gulp.task('default', ['clean'], defaultTask);

function defaultTask() {
  if(argv.dev){
    gulp.start('serve:dev');
  }else{
    gulp.start('build');
  }
}