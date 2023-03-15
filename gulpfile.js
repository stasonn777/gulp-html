import gulp from 'gulp';
import connect from 'gulp-connect';
import fileInclude from 'gulp-file-include';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
// const babel = require('gulp-babel');
const sass = gulpSass(dartSass);
import { deleteAsync } from 'del';
import gcmq from 'gulp-group-css-media-queries';

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    livereload: true,
  });
});


gulp.task('html', function () {
  return gulp
    .src(['src/index.html', 'src/about.html'])
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: 'src/components/',
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
});

gulp.task('sass', function () {
  return gulp
    .src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gcmq())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
});

gulp.task('js', function () {
  return (
    gulp
      .src('src/js/**/*.js')
      // .pipe(babel({
      //   presets: ['@babel/env']
      // }))
      //.pipe(concat('script.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(connect.reload())
  );
});

gulp.task('images', function () {
  return gulp.src('src/img/**/*.*').pipe(gulp.dest('dist/img').pipe(connect.reload()));
});

gulp.task('clean', async function () {
  return await deleteAsync(['dist']);
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('src/img/**/*.*', gulp.series('images'));
});

gulp.task(
  'default',
  gulp.series('clean', gulp.parallel('connect', 'html', 'sass', 'js', 'images', 'watch'))
);
