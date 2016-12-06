var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['sass']);

gulp.task('sass', function () {
    return gulp.src('./src/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/styles'));
});

gulp.task('watch', function () {
    gulp.watch('./src/*.scss', ['sass']);
});
