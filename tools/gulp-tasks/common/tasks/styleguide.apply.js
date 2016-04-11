'use strict';

import paths from '../../../paths';
import styleguide from 'sc5-styleguide';

export default function(gulp, plugins) {

    return function(done) {

        return gulp.src(paths.client.styles.styleguide)
            .pipe(plugins.sass({
                errLogToConsole: true
            }))
            .pipe(styleguide.applyStyles())
            .pipe(gulp.dest('tmp/styleguide'));

    };
};
