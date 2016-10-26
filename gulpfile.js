var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

var docco = require("gulp-docco");

gulp.task("docco", function(){
  return gulp.src("./src/*.js")
    .pipe(docco())
    .pipe(gulp.dest('./documentation-output'))

});

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/components/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/views/home.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/static/style.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed...");
});
