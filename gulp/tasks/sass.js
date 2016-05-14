var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src('source/stylesheets/*.scss')
    .pipe($.plumber(require('./onErrorHandler')))
    .pipe($.sass({ precision: 6 }))
    .pipe($.autoprefixer({ browsers: ['last 3 versions'] }))
    .pipe(gulp.dest('build/stylesheets'))
    .pipe($.connect.reload());
};
