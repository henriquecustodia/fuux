'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./src/fuux.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./examples/dist'))
});

gulp.task('sass:compress', function () {
    return gulp.src('./src/fuux.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./examples/dist'));
});

gulp.task('generate', () => {
    gulp.start(['sass'])
});

gulp.task('build', () => {
    gulp.start(['sass', 'sass:compress']);
});

gulp.task('default', () => {
    gulp.start(['build']);
});
