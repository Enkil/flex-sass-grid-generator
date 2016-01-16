/* Main watcher */
var gulp = require('gulp'),
    config = require('./gulp-config');

gulp.task('watch',function() {
    gulp.watch(config.pathTo.Src.Styles, ['sass']);
    gulp.watch(config.pathTo.Src.Jade, ['jade']);
});