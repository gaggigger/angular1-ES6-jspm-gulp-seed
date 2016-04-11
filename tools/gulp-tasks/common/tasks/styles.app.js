'use strict';

import paths from '../../../paths';

/**
 * See http://stylus-lang.com/docs/executable.html
 *
 * @param gulp
 * @param plugins
 * @param paths
 * @returns {Function}
 */
export default function(gulp, plugins) {

  return function(done) {

    return gulp.src(paths.client.styles.app)
      .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
      .pipe(gulp.dest('client/app'));

  };
};
