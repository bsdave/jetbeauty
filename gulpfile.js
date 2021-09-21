const { watch, src, dest } = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  uglifyjs = require('gulp-uglify-es').default,
  concat = require('gulp-concat');

function css() {
  return src('uncompiled_scss/style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('assets/styles/'))
};

function js() {
  return src(['uncompiled_js/jquery.js', 'uncompiled_js/swiper.js', 'uncompiled_js/main.js'])
    .pipe(concat('main.js'))
    .pipe(uglifyjs())
    .pipe(dest('assets/javascript/'))
};

function loopCompiling() {
  watch('uncompiled_scss/**/*', css);
  watch('uncompiled_js/**/*', js);
}

exports.default = loopCompiling;
