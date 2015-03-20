var jsx = require('gulp-jsx');
var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify')

//var to5Browserify = require('6to5ify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var es6ModuleTranspiler = require("gulp-es6-module-transpiler");
var to5 = require('gulp-6to5');


var path = {
  HTML: 'src/index.html',
  ALL: ['src/**/*.jsx', 'src/**/*.js', 'index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist',
    BUILD: ['./assets/src/app.js']
};

gulp.task('transform', function() {
  return gulp.src('src/**/*.jsx')
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['default']);
});

gulp.task('build-web', function () {
  return gulp.src('src/**/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(react({harmony: true}))
    .on('error', function(error) {
      console.log(error.fileName, error.message)
      notify.notify({
        title: error.fileName.replace(__dirname, ''),
        message: error.message
      })

      this.emit('end')
    })
    .pipe(es6ModuleTranspiler({type: "amd"}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets'));
});

gulp.task('build-app', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(es6ModuleTranspiler({type: "amd"}))
    .pipe(to5())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets'));
});

gulp.task('js', function() {
    gulp.src(path.BUILD)
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('assets'));
});

gulp.task('build', ['build-app', 'build-web', 'js']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.jsx', ['build-web']);
  gulp.watch('src/**/*.js', ['build-app'])
});

gulp.task('default', ['watch', 'build']);