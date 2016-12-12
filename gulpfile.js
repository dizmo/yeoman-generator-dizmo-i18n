var gulp = require('gulp'),
    gulp_nsp = require('gulp-nsp'),
    path = require('path');

require('./gulp/tasks/install');

gulp.task('nsp', function (callback) {
    gulp_nsp({package: path.resolve('package.json')}, callback);
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['install']);
