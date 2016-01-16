/* SCSS Documentation generating */
var gulp = require('gulp'),
    config = require('./gulp-config'),
    shell = require('gulp-shell');

gulp.task('scss-docs', shell.task( [
    config.StyledoccoOptions
] ) );

