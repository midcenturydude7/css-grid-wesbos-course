var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("browser-sync", function () {
  browserSync.init({
    proxy: "localhost:7777",
  });
});

browserSync.init({
  server: "./",
  firefox: "-browser 'firefox.exe'",
});
