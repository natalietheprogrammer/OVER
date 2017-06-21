const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync'); 
const reload = browserSync.reload;

gulp.task('styles',() => {
	return gulp.src("./style.scss")
		.pipe(sass().on('error',sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('.'))
		.pipe(reload({stream: true}))
});

gulp.task('bs',() => {
	browserSync.init({
		server: '.'	
	});
});

gulp.task('default',['bs','styles'],() => {
	gulp.watch('./**/*.scss',['styles'])
});