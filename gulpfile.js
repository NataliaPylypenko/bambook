const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    //указываем путь к файлу
    return gulp.src('app/scss/**/*.scss')
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
    return gulp.src('app/*.html')
        // в какой папке хранятся данные файлы
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('json', function () {
    // таск считывает все файлы с расшырением json
    return gulp.src('app/*.json')
    // в какой папке хранятся данные файлы
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
    // таск считывает все файлы с расшырением js
    return gulp.src('app/js/*.js')
    // в какой папке хранятся данные файлы
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function () {
    // таск считывает все картинки с товаром
    return gulp.src('app/images/*.{png,jpg}')
    // в какой папке хранятся данные файлы
        .pipe(gulp.dest('build/images'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    // таск считывает все картинки сайта
    return gulp.src('app/img/*.{png,jpg}')
    // в какой папке хранятся данные файлы
        .pipe(gulp.dest('build/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts', function () {
    // таск считывает все шрифты
    return gulp.src('app/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    // в какой папке хранятся данные файлы
        .pipe(gulp.dest('build/fonts'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
    // инициализируем browserSync который будет следить за изменениями папки build
    browserSync.init({
        server: "build"
    });

    // следим за файлами .scss в папке scss и если там происходят изменения запускаем таск с именем sass
    gulp.watch("app/scss/**/*.scss", gulp.parallel("sass"));
    gulp.watch("app/*.html", gulp.parallel("html"));
    gulp.watch("app/*.json", gulp.parallel("json"));
    gulp.watch("app/js/*.js", gulp.parallel("js"));
    gulp.watch("app/images/*.{png,jpg}", gulp.parallel("images"));
    gulp.watch("app/img/*.{png,jpg}", gulp.parallel("img"));
    gulp.watch("app/fonts/**/*.{eot,svg,ttf,woff,woff2}", gulp.parallel("fonts"));
});

gulp.task('default', gulp.parallel('serve', 'sass', 'html', 'json', 'js', 'images', 'img', 'fonts'));
// gulp.task('default', gulp.series());
// parallel() выполняет команды паралельно/одновременно
// series() выполняет команды последовательно



