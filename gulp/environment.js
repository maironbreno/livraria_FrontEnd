
var gulp = require('gulp');
var conf = require('./conf').conf;
var argv = require('yargs').argv;
var gulpNgConfig = require('gulp-ng-config');

gulp.task('environmentSetup', environmentSetup);

// Create constant in portal.config module to set the API URL accordingly to the given profile
function environmentSetup() {
  gulp.src(conf.environment.config.file)
    .pipe(gulpNgConfig(conf.environment.config.module , {
      environment: argv.profile ? argv.profile : 'local'
    }))
    .pipe(gulp.dest(conf.environment.config.dest))
}