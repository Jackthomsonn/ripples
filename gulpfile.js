var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function() {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['sass'])