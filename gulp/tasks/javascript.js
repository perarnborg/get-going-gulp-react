var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src(['source/javascripts/[^_]*.js'])
    .pipe($.plumber(require('./onErrorHandler')))
    .pipe($.jsbeautifier({
      indentSize: 2,
      end_with_newline: true
    }))
    .pipe(gulp.dest('source/javascripts'))
    .pipe($.include())
    .pipe(gulp.dest('build/javascripts'))
    .pipe($.connect.reload());
};
