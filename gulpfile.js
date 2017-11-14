var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	del = require('del');


gulp.task('jslibs', function() {
	return gulp.src([
			'src/js/vendor/*.*',
			'src/js/plugins.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('csslibs', function() {
	return gulp.src([
			'src/css/normalize.css'
		])
		.pipe(concat('csslibs.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function() {
	return del.sync('dist');
})

gulp.task('build', ['clean', 'jslibs', 'csslibs'], function() {
	
	var buildCss = gulp.src([
			'src/css/main.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildHmtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist'))

	var buildOther = gulp.src([
		'src/*.txt',
		'src/*.xml',
		'src/*.png',
		'src/favicon.ico',
		'src/site.webmanifest'
		])
	.pipe(gulp.dest('dist'))
});