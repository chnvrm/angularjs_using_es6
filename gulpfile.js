var gulp = require('gulp'),
    server = require('gulp-express'),
    babel = require('gulp-babel'),
    rjs = require('gulp-requirejs'),
    uglify=require('gulp-uglify'),
    concat = require('gulp-concat'),
    del = require('del');
gulp.task('es6-amd', ['clean-es5'], function(){
    return gulp.src(['scripts/*.js','scripts/**/*.js'])
        .pipe(babel({
            modules:"amd"
        }))
        .pipe(gulp.dest('es5/scripts'));
});
gulp.task('amd-bundle', ['es6-amd'], function(){
    rjs({
        name:"app",
        baseUrl:'es5/scripts',
        out:'app.js'
    })
    .pipe(uglify())
    .pipe(gulp.dest("final"));
});
gulp.task('clean-es5', function() {
    return del('es5');
});
gulp.task('server', ['amd-bundle'], function () {
    return server.run(['server.js']);
});
gulp.task('default', ['server']);