'use strict';
// sass.js Gulp 'sass' Task Configuration

// including gulp and plugins
const gulp = require('gulp'),
  autoprefixer = require('autoprefixer'),
  csswring = require('csswring'),
  gutil = require('gulp-util'),
  mqpacker = require('css-mqpacker'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  pxtorem = require('postcss-pxtorem'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  size = require('gulp-size'),
  sourcemaps = require('gulp-sourcemaps');


// settings
const css = {
  sassOpts: {
    outputStyle: 'nested',
    imagePath: '../images',
    precision: 3,
    errLogToConsole: true,
  },
};

const processors = [
  autoprefixer({ browsers: ['last 2 versions'], cascade: false }),
  mqpacker,
  csswring,
  pxtorem({
    rootValue: 16,
    unitPrecision: 5,
    replace: false,
  }),
];

// compile sass
gulp.task('sass', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(size({ title: 'CSS in ' }))
    .pipe(sass(css.sassOpts))
    .pipe(postcss(processors))
    .pipe(size({ title: 'CSS out ' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/'));
});