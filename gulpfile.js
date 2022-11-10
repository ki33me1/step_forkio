'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const purgecss = require('gulp-purgecss');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const ScriptFiles = ['./src/js/burgermenu.js']

/*import imagemin from 'gulp-imagemin';*/


gulp.task('clear', function () {
    return gulp.src('dist/*', { read: false })
        .pipe(clean());
})

gulp.task('css', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({
            content: ['*.html']
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
})

gulp.task('js', function () {
    return gulp.src(ScriptFiles)
        .pipe(concat('main.min.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
})

gulp.task('img', function () {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
})

gulp.task('dev', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch('./src/scss/**/*.scss', gulp.series('css'))
    gulp.watch('./src/js/**/*.js', gulp.series('js'))
    gulp.watch("*").on('change', browserSync.reload)
})
//build
exports.build = gulp.series('clear', 'css', 'js', 'img');






