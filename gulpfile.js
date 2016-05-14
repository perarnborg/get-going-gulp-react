var gulp = require('./gulp')([
  'sass',
  'javascript',
  'bower',
  'clean',
  'watch',
  'html',
  {
    name: 'serve',
    dependencies: ['build']
  },
  'images'
]);

gulp.task('build', ['sass', 'bower', 'javascript', 'html', 'images']);
gulp.task('dev', ['build', 'watch']);
gulp.task('default', ['dev', 'serve']);
