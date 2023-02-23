const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('html', function() {
  return gulp.src(['src/index.html', 'src/about.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src/components/'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
    //.pipe(concat('script.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('src/img/**/*.*', gulp.series('images'));
});

gulp.task('default', gulp.series('html', 'sass', 'js', 'images', 'watch'));
