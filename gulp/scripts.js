/**
 * Tasks to handle javascript files
 */

var gulp = require('gulp');
var conf = require('./conf').conf;
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var gulpIgnore = require('gulp-ignore');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var gulpif = require('gulp-if'); 

// Check if skip-lint flag is setted before running codeStaticAnalysis task
var appJsTaskDependencies = argv.skipLint ? [] : ['codeStaticAnalysis'];

gulp.task('vendorJs', vendorJs);
gulp.task('codeStaticAnalysis', codeStaticAnalysis);
gulp.task('appJs', appJsTaskDependencies, appJs);
gulp.task('scripts', ['vendorJs', 'appJs']);

function appJs(){
  var ngAnnotate = require('gulp-ng-annotate');

  var filename = argv.dev ? 'app.min.js' : 'app.js';

  return gulp.src(conf.paths.js.app)
    .pipe(concat(filename))
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(gulpif(!argv.dev,
      minify({
        ext:{
            src:'-minify-source.js',
            min:'.min.js'
        }
      })
    ))
    .pipe(gulpif(!argv.dev, gulpIgnore.exclude('*-minify-source.js')))
    .pipe(sourcemaps.write(conf.paths.map.dist.path))
    .pipe(gulp.dest(conf.paths.js.dist.path))
    .pipe(browserSync.reload({ stream: true }));
}

function vendorJs(){
  var filename = argv.dev ? 'vendor.min.js' : 'vendor.js';
  return gulp.src(conf.paths.js.vendor)
    .pipe(concat(filename))
    .pipe(sourcemaps.init())
    .pipe(gulpif(!argv.dev, 
      minify({
        ext:{
            src:'-minify-source.js',
            min:'.min.js'
        }
      })
    ))
    .pipe(gulpif(!argv.dev, gulpIgnore.exclude('*-minify-source.js')))
    .pipe(sourcemaps.write(conf.paths.map.dist.path))
    .pipe(gulp.dest(conf.paths.js.dist.path))
    .pipe(browserSync.reload({ stream: true }));
}

function codeStaticAnalysis() {
  const eslint = require('gulp-eslint');
  return gulp.src(conf.paths.js.all)
    .pipe(eslint())
    .pipe(eslint.format());
}