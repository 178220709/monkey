var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');

gulp.task("default", function () {

    return gulp.src("**/*.js")
        // Traces all modules and outputs them in the correct order.
        .pipe(amdOptimize("scripts/main",
            {
                name: "main",
                baseUrl: "",
                urlArgs: {
                    "Scripts/*": "v=" + (new Date - 0)
                },
                paths: {
                    "lib": "libs",
                    "sc": "Scripts"
                }
            }

        ))   //主入口文件
        .pipe(concat("main.js"))      //合并后的文件，如何合并后的文件和主入口名一样，构建后便只有一个文件
        .pipe(gulp.dest("dist"));  //输出目录

});

