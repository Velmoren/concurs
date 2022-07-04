//  *** Команды галпа ***
// Сборка html               = "gulp html"
// Сборка стилей             = "gulp style"
// Сборка js                 = "gulp js"
// Сжатие изображений        = "gulp image"
// Переброска шрифтов в dist = "gulp fonts"
// Сжатие css                = "gulp minify:css"
// Сжатие js                 = "gulp minify:js"
// Сжатие css и js           = "gulp minify"
// Слежение за изменениями   = "gulp watch"
// Создание спрайтов         = "gulp sprite"
// Собрать всё в dist        = "gulp build"
// Удалить dist              = "gulp clean"
// Запустить всю сборку      = "gulp"

// Переменные
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const less = require("gulp-less");
const stylus = require("gulp-stylus");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const rigger = require("gulp-rigger"); // Импорт файлов в html или js или ещё куда (//= footer.html)
const cleancss = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const watch = require("gulp-watch");
const del = require("delete");
const rename = require("gulp-rename");
const gcmq = require("gulp-group-css-media-queries");
const spritesmith = require("gulp.spritesmith");
const plumber = require("gulp-plumber");

// *** Используемый препроцессор ***
const preprocessor = {
  base: less, // less, sass, stylus
  extension: ".less", // Расширение файлов '.less', '.sass', '.scss', '.styl'
};
const paths = {};
paths.nodeModules = "./node_modules/";
paths.common = paths.nodeModules + "/ros.grant.common/";

const svgSpriteConfig = {
  mode: {
    symbol: true,
  },
};

// *** Пути ***
const path = {
  src: {
    // Исходники
    html: "./src/**/*.html",
    js: "./src/js/**/*.js",
    styles: "./src/styles/",
    img: "./src/img/**/",
    sprite: "./src/img/sprite/*.*",
    fonts: "./src/fonts/**/*.*",
  },
  dist: {
    // Продакшен
    html: "./dist/",
    js: "./dist/js/",
    css: "./dist/css/",
    img: "./dist/img/",
    fonts: "./dist/fonts/",
    sprite: "../img/sprite.svg",
  },
  rename: {
    // Переименование
    css: "dist/css/style.css",
    js: "dist/js/scripts.js",
  },
  watch: {
    // Отслеживание изменений
    html: "./src/**/*.html",
    js: "./src/js/**/*.js",
    style: "./src/styles/**/*.*",
    img: "./src/img/**/*.*",
    fonts: "./src/fonts/**/*.*",
    libs: "./src/libs/**/*.*",
  },
  clean: "./dist", // Удаление продакшена
};

// Настройки сервера
const config = {
  server: {
    baseDir: "./dist/",
  },
  open: false,
  tunnel: false,
  notify: false,
  host: "localhost",
  port: 9000,
  logPrefix: "Frontend",
};

// Сборка html
gulp.task("html", function () {
  gulp
    .src(path.src.html) //Выберем файлы по нужному пути
    .pipe(rigger()) //Прогоним через rigger
    .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку dist
    .pipe(reload({ stream: true })); //И перезагрузим наш сервер для обновлений
});

// Сборка стилей
gulp.task("style", function () {
  gulp
    .src(path.src.styles + "style.*") //Выберем наш style.*
    // .pipe(plumber()) //Запустим обработчик ошибок
    .pipe(sourcemaps.init()) //Инициализируем sourcemap
    .pipe(preprocessor.base()) //Скомпилируем
    .pipe(
      autoprefixer({
        //Добавим вендорные префиксы
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gcmq()) //Сгруппируем медиа запросы
    .pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.dist.css)) //В dist
    .pipe(reload({ stream: true })); //И перезагрузим сервер
});

// Сборка js
gulp.task("js", function () {
  gulp
    .src(path.src.js) //Найдем наш файл
    .pipe(plumber()) //Запустим обработчик ошибок
    .pipe(rigger()) //Прогоним через rigger
    .pipe(sourcemaps.init()) //Инициализируем sourcemap
    .pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в dist
    .pipe(reload({ stream: true })); //И перезагрузим сервер
});

// Сжатие изображений
gulp.task("image", function () {
  gulp
    .src(path.src.img + "*.*") //Выберем наши картинки
    .pipe(
      imagemin({
        //Сожмем их
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
        interlaced: true,
      })
    )
    .pipe(gulp.dest(path.dist.img)) //И бросим в dist
    .pipe(reload({ stream: true })); //И перезагрузим сервер
});

// Переброска шрифтов в dist
gulp.task("fonts", function () {
  gulp.src(path.src.fonts).pipe(gulp.dest(path.dist.fonts));
});

// Сжатие css
gulp.task("minify:css", function () {
  gulp
    .src(path.rename.css)
    .pipe(
      cleancss({
        //Сожмем
        level: 2,
      })
    )
    .pipe(
      rename({
        //Переименуем
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(path.dist.css)); //И бросим в dist
});

// Сжатие js
gulp.task("minify:js", function () {
  gulp
    .src(path.rename.js)
    .pipe(uglify()) //Сожмем наш js
    .pipe(
      rename({
        // Переименуем
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(path.dist.js)); //И бросим в dist
});

// Слежение за изменениями
gulp.task("watch", function () {
  //Отслеживать изменения
  watch([path.watch.html], function (event, cb) {
    gulp.start("html");
  });
  watch([path.watch.style], function (event, cb) {
    gulp.start("style");
  });
  watch([path.watch.js], function (event, cb) {
    gulp.start("js");
  });
  watch([path.watch.img], function (event, cb) {
    gulp.start("image");
  });
  watch([path.watch.fonts], function (event, cb) {
    gulp.start("fonts");
  });
  watch([path.watch.libs], function (event, cb) {
    gulp.start("style");
  });
});


gulp.task("server", function () {
  //Запустить локальный сервер
  browserSync(config);
});

gulp.task("build", ["html", "js", "style", "fonts", "image"]); //Собрать все файлы в dist

gulp.task("clean", function (cb) {
  //Удалить dist
  del.sync([path.clean], cb);
});

gulp.task("default", ["build", "server", "watch"]); //Запустить всю сборку

gulp.task("minify", ["minify:css", "minify:js"]); //Сжать css и js
