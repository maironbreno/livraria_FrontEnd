'use strict';

var gulp = require('gulp');
var conf = require('./conf').conf;
var karmaServer = require('karma').Server;
var argv = require('yargs').argv;

var testTaskDependencies = !argv.skipLint ? ['codeStaticAnalysis'] : [];

gulp.task('test', testTaskDependencies, test);
gulp.task('lint', ['codeStaticAnalysis']);

function test(done){
  new karmaServer({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
}
