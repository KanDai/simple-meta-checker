
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify       = require('gulp-minify-css');
var rename       = require('gulp-rename');
var browserSync  = require('browser-sync');

// 対象ブラウザ
var AUTOPREFIXER_BROWSERS = [
  'last 2 versions',
];

// Sass
gulp.task('sass' , function(){
  gulp.src( './dev/scss/*.scss' )
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS
    }))
    .pipe(minify())
    .pipe(gulp.dest( './docs/css/' ));
});

// Server
gulp.task('server', function() {
  browserSync({
     server: {
       baseDir: './docs/'
     }
  });
});

// 実行・ファイル監視
gulp.task('default', ['server'], function() {
  gulp.watch([
    './docs/*.html',
    './docs/css/*.css',
    './docs/js/*.js',
  ], browserSync.reload);
  gulp.watch([ './dev/scss/*.scss' ],['sass']);
});
