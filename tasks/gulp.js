//var cjsx = require('gulp-cjsx');
var gulp = require('gulp');
//var gutil = require('gutil');

var connect = require('gulp-connect');

gulp.task('cjsx', function() {
  gulp.src('./src/**/*.cjsx')
  .pipe(cjsx({bare: true}).on('error', gutil.log))
  .pipe(gulp.dest('./assets/'));
});

gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8001,
        livereload: true
    });
});

gulp.task('default', ['connect']);
