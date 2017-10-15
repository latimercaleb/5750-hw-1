// Gulp file
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('less', function(){
    return gulp.src('app/css/styles.less')
                      .pipe(less())
                      .pipe(gulp.dest('dist'));
});

gulp.task('lint',function(){
   return gulp.src('app/javascript/app.js')
                    .pipe(jshint())
                    .pipe(jshint.reporter('default'));
});

gulp.task('compress', function(){
    return gulp.src('app/javascript/*.js')
                     .pipe(concat('final.min.js'))
                     .pipe(uglify())
                     .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('app/css/styles.less', ['less']);
    gulp.watch('app/javascript/app.js',['lint','compress']);
});

gulp.task('default', ['less', 'lint', 'compress', 'watch']);
