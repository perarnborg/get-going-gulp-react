var connect = require('gulp-connect');

module.exports = function(done) {
  connect.server({
    root: 'build',
    livereload: true
  });
  done();
};
