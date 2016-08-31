var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel        = require('gulp-babel');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var eslint       = require('gulp-eslint');
var filter       = require('gulp-filter');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var jsFiles      = require('./assets/js/src/jsFiles')


var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};



// Lint JS/JSX files
gulp.task('eslint', function() {
  return gulp.src(jsFiles.react)
    .pipe(eslint({
      baseConfig: {
        "ecmaFeatures": {
           "jsx": true
         },
         "plugins": ["react"]
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Concatenate jsFiles.vendor and jsFiles.react into one JS file.
// Run copy-react and eslint before concatenating
gulp.task('concat',  function() {
  return gulp.src(jsFiles.react)
    .pipe(sourcemaps.init())
    .pipe(babel({
      only: [
        'assets/js/src/components',
      ],
      presets: ['es2015', 'react'],
      compact: true
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('scripts'));
});

// Compile Sass to CSS
gulp.task('sass', function() {
  var autoprefixerOptions = {
    browsers: ['last 2 versions'],
  };

  var filterOptions = '**/*.css';

  var reloadOptions = {
    stream: true,
  };

  var sassOptions = {
    includePaths: [

    ]
  };

  return gulp.src('assets/sass/main.scss')
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('styles'))
    .pipe(filter(filterOptions))
    .pipe(reload(reloadOptions));
});

// Watch JS/JSX and Sass files
gulp.task('watch', function() {
  gulp.watch('assets/js/src/**/*.{js,jsx}', ['concat']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});

// BrowserSync
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('build', ['sass', 'concat']);
gulp.task('default', ['build', 'browsersync', 'watch']);