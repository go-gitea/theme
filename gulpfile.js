var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var tar = require('gulp-tar-path');
var gzip = require('gulp-gzip');
var clean = require('gulp-clean');

var sources = [
    'archetypes',
    'i18n',
    'layouts',
    'static',
    'DCO',
    'LICENSE',
    'README.md',
    'theme.toml'
];

var build = function () {
    return gulp.src('./src/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/styles'));
}

gulp.task('clean', function () {
    return gulp.src(['dist', 'static/styles'], { allowEmpty: true })
        .pipe(clean());
});

gulp.task('watch', function () {
    return gulp.watch('./src/*.scss', build);
});

gulp.task('release', function () {
    return gulp.src(sources)
        .pipe(tar('master.tar'))
        .pipe(gzip())
        .pipe(gulp.dest('dist'))
});

gulp.task('build', build);
gulp.task('default', build);
