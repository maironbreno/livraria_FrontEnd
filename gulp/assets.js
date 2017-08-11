/**
 * Tasks to handle static assets
 */

var gulp = require('gulp');
var conf = require('./conf').conf;

gulp.task('fonts', fonts);
gulp.task('images', images);
gulp.task('videos', videos);
gulp.task('otherAssets', otherAssets);
gulp.task('assets', ['images', 'videos', 'fonts', 'otherAssets']);

function images(){
  return gulp.src(conf.paths.img.files)
    .pipe(gulp.dest(conf.paths.img.dist.path));
}

function videos(){
  return gulp.src(conf.paths.videos.files)
    .pipe(gulp.dest(conf.paths.videos.dist.path));
}

function fonts(){
  return gulp.src(conf.paths.fonts.files)
    .pipe(gulp.dest(conf.paths.fonts.dist.path));
}

function otherAssets(){
  return gulp.src(conf.paths.other.files)
    .pipe(gulp.dest(conf.paths.other.dist.path));
}