var gulp = require('gulp'),
    gulp_nsp = require('gulp-nsp');
var path = require('path'),
    require_all = require('require-all');

require_all({
    dirname: __dirname + '/gulp/tasks',
    filter:  /.js$/, recursive: true
});

gulp.task('nsp', function (callback) {
    gulp_nsp({package: path.resolve('package.json')}, callback);
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['install']);
