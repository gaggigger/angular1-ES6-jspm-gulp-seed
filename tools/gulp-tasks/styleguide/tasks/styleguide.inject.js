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

        return gulp.src(paths.client.styles.styleguide)

            .pipe(plugins.inject(gulp.src(paths.client.styles.app, {read: false}), {
                starttag: '/* begin-scss-inject:js */',
                endtag: '/* end-scss-inject:js */',
                transform: function(filepath, file, i, length) {

                    var clientPath = filepath.split('/').slice(3).join('/');

                    var pathToStyle = "@import \'app/" + clientPath + "\';";

                    return pathToStyle;
                }
            }))

            .pipe(gulp.dest(paths.client.basePath));

    };
};
