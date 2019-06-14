'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpCssGlobbing = require("gulp-css-globbing"),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('compile', function () {
    // Compile JS.
    gulp.src('./src/ripple-effect.js')
        .pipe(concat('ripple-effect.min.js'))
        .pipe(uglify({
            output: {
                quote_style: 3
            }
        }).on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('./dist/js/'));

    // Compile SaSS.
    gulp.src('./src/ripple-effect.scss')
        .pipe(gulpCssGlobbing({
            extensions: ['.scss']
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(cssmin())
        .pipe(concat('ripple-effect.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});
