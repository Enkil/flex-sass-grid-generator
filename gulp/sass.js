/* SASS */
var gulp = require('gulp'),
    config = require('./gulp-config'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber');

gulp.task('sass', function () {
    gulp.src(config.pathTo.Src.mainStyleFile)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass.sync()
            .on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixerBrowsers))
        .pipe(csscomb())
        .pipe(gulp.dest(config.pathTo.Build.Styles))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.pathTo.Build.Styles))
});