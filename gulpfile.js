let gulp = require('gulp');
let sass = require('gulp-sass');
let webpack = require('webpack-stream');

gulp.task('sass', function(){
    gulp.src('./css/custom.scss')
    .pipe(webpack({
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                          plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                              require('precss'),
                              require('autoprefixer')
                            ];
                          }
                        }
                      }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }]    
                }
            ]
        },
        output: {
            filename: 'styles.js',
        }
    }))
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



gulp.task('default', function(){
  gulp.watch([
        './css/*.scss',
        './js/*.js'
  ], [
      'sass', 'js'
  ]);
});

