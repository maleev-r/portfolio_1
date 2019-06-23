const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require("gulp-autoprefixer");
const less = require("gulp-less");
const connect = require('gulp-connect-php');
const webPForm = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

function taskBrowserSync(done) {
    browserSync.init({
        proxy: 'g1.localhost',

    });
    done();
}

function less_fun(){
    return gulp
        .src("src/less/*.less")
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
}
function css(){
    return gulp
        .src("/src/css/*.css")
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
}

function php(done) {
    gulp.src("src/include/*.php")
        .pipe(gulp.dest("include"));

    return gulp
        .src("src/*.php")
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
   // done();
}
function html(done) {
    return gulp
        .src("src/*.html")
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
}

function img(done) {
    return gulp
        .src("src/img/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest("img/"))
        .pipe(browserSync.stream());
}

function jscript(done) {
    return gulp
        .src("src/js/*.js")
        .pipe(gulp.dest("js/"))
        .pipe(browserSync.stream());
}

function watchFiles() {
    gulp.watch("src/js/*", jscript);
    gulp.watch("src/*.html", html);
    gulp.watch("src/*.php", php);
    gulp.watch("src/include/*.php", php);
    gulp.watch("src/less/*", less_fun);
    gulp.watch("src/css/*", css);
    gulp.watch("src/img/*", img);
    //gulp.watch("index.php", gulp.series(browserSyncReload));
}

function build(done) {
    jscript();
    html();
    less_fun();
    php();
    css();
    img();
    done();
}

const watch = gulp.series(build,gulp.parallel(watchFiles, taskBrowserSync));

exports.default = watch;

