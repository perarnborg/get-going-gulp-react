var gulp = require('./gulp')([
  'bower',
  'bower-files',
  'sass',
  {
    name: 'javascript',
    dependencies: ['bower-files']
  },
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
