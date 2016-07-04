var gulp = require('gulp'),
    gulp_uglify = require('gulp-uglify'),
    gulp_sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');
var browserify = require('browserify'),
    pkg = require('../package.js');

gulp.task('install', function () {
    var browserified = browserify({
        basedir: '.', entries: ['index.js'], standalone: 'i18n'
    });
    return browserified.bundle()
        .pipe(source('i18n' + '-' + pkg.version + '.min.js'))
        .pipe(buffer())
        .pipe(gulp_sourcemaps.init({loadMaps: true}))
        .pipe(gulp_uglify())
        .pipe(gulp_sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});
