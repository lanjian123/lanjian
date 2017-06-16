var gulp = require('gulp');

var browserSync = require('browser-sync');

var sass = require('gulp-sass');

// var less = require('gulp-less');

gulp.task('sass', function () {
    gulp.src('./src/****/*.{scss,css}')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// gulp.task('less', function () {
//     gulp.src('./src/css/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./src/css/'))
//     .pipe(browserSync.reload({
//         stream: true
//     }))
// });

gulp.task('html',function(){
     gulp.src('./src/****.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
        stream: true
    }))
})

gulp.task('imgs',function(){
     gulp.src(['./src/imgs/*.{png,jpg}'])
    .pipe(gulp.dest('dist/imgs'))
    .pipe(browserSync.reload({
        stream: true
    }))
})

gulp.task('js',function(){
     gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({
        stream: true
    }))
})
gulp.task('json',function(){
     gulp.src('./src/js/*.json')
    .pipe(gulp.dest('dist/json/'))
    .pipe(browserSync.reload({
        stream: true
    }))
})


gulp.task('servers', function() {
    browserSync({
        server: {baseDir: ['./dist']}
    });
    gulp.watch('./src/****/*.{scss,css}', ['sass']);
    gulp.watch('./src/****/*.html',['html']);
});

gulp.task('default',['sass','servers','html','imgs','js','json']);