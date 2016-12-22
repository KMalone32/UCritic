var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    print = require('gulp-print'),
    babel = require('gulp-babel');

var Cachebuster = require('gulp-cachebust');
var cachebust = new Cachebuster();

gulp.task('build-css', function() {
  return gulp.src('./Production/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./Distribution/css'));
});

gulp.task('build-js', [], function() {
  return gulp.src('./Production/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(print())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('script.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./Distribution/js'));
});

gulp.task('build', ['build-css', 'build-js'], function() {
  return gulp.src('index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./Production/**/*'], ['build']);
});
