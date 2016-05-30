/* Polyfills */
require('es6-promise').polyfill();

/* Dependencies */
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minifyCSS   = require('gulp-cssnano');
var scsslint    = require('gulp-scss-lint');

/* Tasks */
gulp.task('sass', function() {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('lint-sass', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(scsslint({'config': '.scss-lint.yml'}));
});

gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', [/*'lint-sass',*/ 'sass']);
});

gulp.task('default', ['watch']);
