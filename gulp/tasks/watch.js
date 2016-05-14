var gulp = require('gulp');

module.exports = function(done) {
  gulp.watch('source/javascripts/**/*.js', ['javascript']);
  gulp.watch('source/stylesheets/**/*.scss', ['sass']);
  gulp.watch('source/**/*.html', ['html']);
  // gulp.watch('source/images/icons/*.svg', ['icons']);
  gulp.watch('source/data/[^_]*.json', ['data']);
  done();
};
