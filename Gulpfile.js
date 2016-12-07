'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./src/flex-boy.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:compress', function () {
    return gulp.src('./src/flex-boy.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('./dist'));
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
