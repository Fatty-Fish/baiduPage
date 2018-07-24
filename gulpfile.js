var gulp = require("gulp");
//css
var cssClean = require("gulp-clean-css");
//images
var imageMin = require("gulp-imagemin");
//js
var uglify = require("gulp-uglify");


gulp.task("watch", function () {
    gulp.watch("./src/images/*.*",["images"])
    gulp.watch("./src/css/*.css", ["css"])
    gulp.watch("./src/js/*.js",["js"]);
})
gulp.task("css", function ()  {
    gulp.src("./src/css/*.css")
        .pipe(cssClean())
        .pipe(gulp.dest("./out/css"))
})
gulp.task("images", function ()  {
    gulp.src("./src/images/*.*")
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest("./out/images"))
})
gulp.task("js", function () {
    gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./out/js"))
})


gulp.task("default", ["images","css","js","watch"]);