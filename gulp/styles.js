/**
 * Tasks to handle style files
 */

var gulp = require('gulp');
var conf = require('./conf').conf;
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('scss', scss);
gulp.task('appCSS', ['scss'], appCSS);
gulp.task('vendorCSS', vendorCSS);
gulp.task('styles', ['vendorCSS', 'appCSS']);

function appCSS(){
  return gulp.src(conf.paths.css.app)
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ processImport: false }))
    .pipe(sourcemaps.write())
    .pipe(concat(conf.paths.css.dist.app))
    .pipe(gulp.dest(conf.paths.css.dist.path))
    .pipe(browserSync.reload({ stream: true }));
}

function vendorCSS(){
  return gulp.src(conf.paths.css.vendor)
    .pipe(cleanCSS({ processImport: false }))
    .pipe(concat(conf.paths.css.dist.vendor))
    .pipe(gulp.dest(conf.paths.css.dist.path))
    .pipe(browserSync.reload({ stream: true }));
}

function scss(){

  var sass = require('gulp-sass');
  const autoprefixer = require('gulp-autoprefixer');

  var sassOptions = {
    style: 'expanded'
  };

  return gulp.src(conf.paths.scss.files)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.scss.dist.path));
}