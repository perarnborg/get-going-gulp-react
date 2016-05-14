var gutil = require('gulp-util');
/**
 * Error handler for gulp-plumber
 */
module.exports = function(error) {
  gutil.log(error.toString());
  this.emit('end');
}
