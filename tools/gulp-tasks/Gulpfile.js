'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import test from './test/gulpFile';
import common from './common/gulpFile';
import develop from './develop/gulpFile';
import production from './production/gulpFile';
import generator from './generator/gulpFile';

let plugins = gulpLoadPlugins();

/**
 * common
 */
test(gulp, plugins);

/**
 * common
 */
common(gulp, plugins);

/**
 * develop
 */
develop(gulp, plugins);

/**
 * production
 */
production(gulp, plugins);

/**
 * generator
 */
generator(gulp, plugins);

gulp.task('default', ['serve']);
