var mainBowerFiles = require('main-bower-files');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./source/javascripts/vendor/bower'));
};
