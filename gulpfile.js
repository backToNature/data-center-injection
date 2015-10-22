'use strict';

var path = require('path'),
    fs = require('fs'),
    util = require('util'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    insert = require('gulp-insert'),
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
        .pipe( gulp.dest('build')
    );
});

gulp.task('css', function () {

});

gulp.task('watch', function () {
    var watcher = gulp.watch(['src/**/*', '!src/*.html', '!src/*.js', '!src/*.css'], ['build']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


