var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src(['source/images/**/[^_]*'])
    .pipe(gulp.dest('build/images'))
    .pipe($.connect.reload());
};
