var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
  $.nunjucksRender.nunjucks.configure(['source'], {
    watch: false
  });
  return gulp.src(['source/*.html'])
    .pipe($.plumber(require('./onErrorHandler')))
    .pipe($.frontMatter({
      property: 'data',
      remove: true
    }))
    .pipe($.nunjucksRender())
    .pipe($.jsbeautifier({
      indentSize: 2,
      end_with_newline: true
    }))
    .pipe($.plumber.stop())
    .pipe(gulp.dest('build'))
    .pipe($.connect.reload());
};
