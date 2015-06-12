var gulp = require('gulp');
var jade = require('gulp-jade');
var del = require('del');
var gulpCopy = require('gulp-contrib-copy');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('jade', function() {
  gulp.src('./src/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
    del('./dist/*');
});

gulp.task('copy', ['clean'], function() {
    gulp.src('src/assets/**/*')
        .pipe(gulpCopy())
        .pipe(gulp.dest('dist/assets/'));
});

gulp.task('copyStyles', function() {
   gulp.src('src/assets/css/*.css')
        .pipe(gulpCopy())
        .pipe(gulp.dest('dist/assets/css'));
})

gulp.task('sass', function () {
  gulp.src('src/assets/css/scss/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('default', ['clean', 'jade', 'sass', 'copy'], function() {
    gulp.watch('src/assets/css/scss/**/*', ['sass', 'copyStyles']);
    gulp.watch('src/assets/js/**/*', ['clean', 'copy']);
    gulp.watch('src/templates/**/*.jade', ['jade']);
});
