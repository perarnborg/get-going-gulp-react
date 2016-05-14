var rimraf = require('rimraf');

module.exports = function(done) {
  rimraf('build', done);
};
