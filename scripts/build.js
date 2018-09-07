/**
 * @author senntyou <jiangjinbelief@163.com>
 */

const gulp = require('gulp');
const less = require('gulp-less');
const gap = require('gulp-append-prepend');

const packageJson = require('../package.json');

gulp.task('build', () => {
    // this is based on project root, so `../src` is not correct
    return gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gap.prependText(`
/**
 *
 * shortcut.css v${packageJson.version}
 *
 * https://github.com/senntyou/shortcut.css
 *
 * @senntyou <jiangjinbelief@163.com>
 *
 */
        `))
        // this is based on project root, so `../dist` is not correct
        .pipe(gulp.dest('./dist'));
});

gulp.start('build');
