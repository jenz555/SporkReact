'use strict';
// Gulp.js Configuration

// include gulp and plugins
const	gulp = require('gulp'),
			requireDir = require('require-dir');

requireDir('./tasks');

// gulp watch settings
const css = {
		watch: ['./src/**/**/*.scss']
	};


// build task
gulp.task('build', ['sass'], () => {});

gulp.task('dist', () => {
  gulp.src('./src/fonts/**/*.*')
		.pipe(gulp.dest('./dist/fonts/'));
  gulp.src('./src/images/**/*.*')
		.pipe(gulp.dest('./dist/images/'));
	gulp.src('./src/styles/**/*.*')
		.pipe(gulp.dest('./dist/styles/'));
	gulp.src('./src/*.css')
		.pipe(gulp.dest('./dist/'));
	gulp.src('./src/components/carousel/*.css')
		.pipe(gulp.dest('./dist/components/carousel/'));
	gulp.src('./src/components/about/*.css')
		.pipe(gulp.dest('./dist/components/about/'));
	gulp.src('./src/*.js')
		.pipe(gulp.dest('./dist/'));
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./dist/'));
});


// default task
gulp.task('default', ['sass'], () => {

	// sass changes
	gulp.watch(css.watch, ['sass']);

});