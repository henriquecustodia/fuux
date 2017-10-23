'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');

function getSuffix({ compressed, prefixed }) {
    if (compressed) {
        if (prefixed) {
            return '.prefixed.min';
        }

        return '.min';
    }

    if (prefixed) {
        return '.prefixed';
    }

    return '';
}

function bundleFn({ compressed, prefixed }) {
    return gulp.src('./src/fuux.scss')
        .pipe(gulpIf(compressed, sass({ outputStyle: 'compressed' }), sass()))
        .pipe(gulpIf(prefixed, autoprefixer()))
        .pipe(rename({
            suffix: getSuffix({ compressed, prefixed }),
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./examples/dist'));
}

gulp.task('sass', () => {
    return bundleFn({ compressed: false, prefixed: false })
});

gulp.task('sass:prefixed', () => {
    return bundleFn({ compressed: false, prefixed: true })
});

gulp.task('sass:compress', () => {
    return bundleFn({ compressed: true, prefixed: false })
});

gulp.task('sass:prefixed:compress', () => {
    return bundleFn({ compressed: true, prefixed: true })
});

gulp.task('generate', () => {
    gulp.start(['sass'])
});

gulp.task('build', () => {
    gulp.start(['sass', 'sass:prefixed', 'sass:compress', 'sass:prefixed:compress']);
});

gulp.task('default', () => {
    gulp.start(['build']);
});
