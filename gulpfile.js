let gulp = require('gulp');
let sass = require('gulp-sass');
let webpack = require('webpack-stream');

gulp.task('scss', function(){
    gulp.src('./css/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'))
});


gulp.task('js', function(){
    gulp.src('./js/bootstrap.js')
    .pipe(webpack({
        output: {
            filename: 'app.js',
        }
    }))
    .pipe(gulp.dest('./public/js/'))
});


gulp.task('watch', function(){
  gulp.watch([

        './css/include/*.scss',
        './css/*.scss',

        './js/*.js',
        './js/include/*.js',
        
  ], [
      'scss', 'js'
  ]);
});

