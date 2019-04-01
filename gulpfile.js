
var gulp         = require('gulp'),
    browserSync  = require('browser-sync');

gulp.task('serve', function() {

browserSync.init({    
    server: "./app"
});

gulp.watch("app/css/*.css").on('change', browserSync.reload);

gulp.watch("app/*.html").on('change', browserSync.reload);

gulp.watch("app/js/app.js").on('change', browserSync.reload);

gulp.watch("app/js/read-csv.js").on('change', browserSync.reload);

});