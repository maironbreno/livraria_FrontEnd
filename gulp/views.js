/**
 * Tasks to handle HTML and views files
 */

var gulp = require('gulp');
var conf = require('./conf').conf;
var browserSync = require('browser-sync');

gulp.task('html-index', htmlIndex);
gulp.task('html', ['html-index'], html);

function htmlIndex(){
  return gulp.src([
      conf.paths.html.index
    ])
    .pipe(gulp.dest(conf.paths.dist));
}

function html(){
  var htmlminifier = require('gulp-minify-html');
  var templateCache = require('gulp-angular-templatecache');

  // Get all html files from app
  return gulp.src(conf.paths.html.files)
    // Minify the html files before putting on cache
    .pipe(htmlminifier({
      empty: true,
      spare: true,
      quotes: true
    }))
    // Put all html files in template cache
    .pipe(templateCache(conf.templateCache.filename, conf.templateCache.options))
    .pipe(gulp.dest(conf.paths.dist))
    .pipe(browserSync.reload({ stream: true }));
}