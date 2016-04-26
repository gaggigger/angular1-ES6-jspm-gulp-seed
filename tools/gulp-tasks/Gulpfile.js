'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import test from './test/gulpFile';
import esDoc from './esDoc/gulpFile';
import develop from './develop/gulpFile';
import production from './production/gulpFile';
import generator from './generator/gulpFile';
import styles from './styles/gulpFile';
import styleguide from './styleguide/gulpFile';

let plugins = gulpLoadPlugins();

/**
 * test
 */
test(gulp, plugins);

/**
 * styles
 */
styles(gulp, plugins);

/**
 * esDoc
 */
esDoc(gulp, plugins);

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

/**
 * styleguide
 */
styleguide(gulp, plugins);

gulp.task('default', ['serve']);
