const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    //указываем путь к файлу
    return gulp.src('scss/**/*.scss')
        // если в файле scss напишем некоректный код
        // модуль позаботится чтобы скрипт не отключался, а работал далее
        .pipe(plumber())
        // инициализируем sourceMaps
        .pipe(sourceMaps.init())
        // компилируем scss код
        .pipe(sass())
        // добавляем автопрефиксы
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        // закрываем sourceMaps
        .pipe(sourceMaps.write())
        // путь куда будет добавляться компилированый код
        .pipe(gulp.dest('build/css'))
        // перезапускаем браузер
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
    // таск считывает все файлы с расшырением html
    return gulp.src('*.html')
        // в какой папке хранятся данные файлы
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
    // инициализируем browserSync который будет следить за изменениями папки build
    browserSync.init({
        server: "build"
    });

    // следим за файлами .scss в папке scss и если там происходят изменения запускаем таск с именем sass
    gulp.watch("scss/**/*.scss", gulp.parallel("sass"));
    gulp.watch("*.html", gulp.parallel("html"));
});

gulp.task('default', gulp.parallel('serve', 'html', 'sass'));
// gulp.task('default', gulp.series());
// parallel() выполняет команды паралельно/одновременно
// series() выполняет команды последовательно




// gulp.task('serve', ['html', 'sass'], function () {
//     // инициализируем browserSync который будет следить за изменениями папки build
//     browserSync.init({
//         server: "build"
//     });
//
//     // следим за файлами .scss в папке scss и если там происходят изменения запускаем таск с именем sass
//     gulp.watch("scss/**/*.scss", ["sass"]);
//     gulp.watch("*.html", ["html"]);
// });
//
// gulp.task('default', ['serve']);


