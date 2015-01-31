var cjsx = require('gulp-cjsx');
var gulp = require('gulp');
var gutil = require('gutil');

gulp.task('cjsx', function() {
  gulp.src('./src/**/*.cjsx')
  .pipe(cjsx({bare: true}).on('error', gutil.log))
  .pipe(gulp.dest('./assets/'));
});
