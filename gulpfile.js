var gulp = require("gulp");
var bs = require("browser-sync").create();

gulp.task("browser-sync", function () {
  bs.init({
    proxy: "localhost:7777",
    browser: "firefox.exe",
    open: false,
  });
});

bs.init({
  server: "./",
  firefox: "-browser 'firefox.exe'",
  proxy: "localhost:7777",
  browser: "firefox.exe",
  open: false,
});
