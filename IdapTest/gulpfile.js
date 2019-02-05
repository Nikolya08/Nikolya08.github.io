let gulp = require('gulp');
let scss = require('gulp-sass');
let browser = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('dir/css'))
        .pipe(browser.stream());
});

gulp.task('prefix', () =>
    gulp.src('dir/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dir/css'))
        .pipe(browser.stream())
);

gulp.task('watch',['browser'], function () {
   gulp.watch('src/scss/**/*.scss', ['scss']);
   gulp.watch('dir/css/**/*.css', ['prefix']);
   gulp.watch('dir/**/*.html', browser.reload);
});

gulp.task('browser', function () {
    browser({
        server:{
            baseDir: 'dir'
        },
        port: 4545,
        notify: false,
    })
});
