'use strict';

import paths from '../../../paths';

/**
 *
 * @param gulp
 * @param plugins
 * @returns {Function}
 */
export default function(gulp, plugins) {

    return function(done) {

        return gulp.src(paths.client.app.basePath)
            .pipe(plugins.esdoc({ destination: paths.docs.es6.basePath }));

    };
};
