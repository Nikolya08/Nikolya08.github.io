let gulp = require('gulp');
let scss = require('gulp-sass');
let browser = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('src/css'))
        .pipe(browser.stream());
});

gulp.task('prefix', () =>
    gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browser.stream())
);

gulp.task('watch',['browser'], function () {
   gulp.watch('src/scss/**/*.scss', ['scss']);
   gulp.watch('src/css/**/*.css', ['prefix']);
   gulp.watch('src/**/*.html', browser.reload);
});

gulp.task('browser', function () {
    browser({
        server:{
            baseDir: 'src'
        },
        port: 4040,
        notify: false,
    })
});
