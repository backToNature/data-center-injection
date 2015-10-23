'use strict';

var path = require('path'),
    fs = require('fs'),
    util = require('util'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    insert = require('gulp-insert'),
//    minifyCss = require('gulp-minify-css'),
    seajsCombo = require( 'gulp-seajs-combo' );

//引入包配置
var pkg = require('./package.json');

gulp.task('sea', function () {
    gulp.src('src/modules/init.js')
        .pipe(seajsCombo())
        .pipe(insert.transform(function(contents, file) {
            var fileName = path.basename(file.path);
            return contents + 'seajs.use(\''+ fileName +'\');';
        }))
//        .pipe(uglify())
        .pipe( gulp.dest('build')
    );
});

gulp.task('css', function () {
    gulp.src('src/**/*.css')
        .pipe(concat('init.css'))
//        .pipe(minifyCss())
        .pipe(gulp.dest('build/')
    );
});

gulp.task('watch', function () {
    var watcher = gulp.watch(['src/modules/**/*.js'], ['sea']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('lib', function () {
    gulp.src('src/*lib/*.js')
//        .pipe(minifyCss())
        .pipe(uglify())
        .pipe(gulp.dest('build/')
    );
});


