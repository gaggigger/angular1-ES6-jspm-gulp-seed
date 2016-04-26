'use strict';

import paths from '../../../paths';
import styleguide from 'sc5-styleguide';

export default function(gulp, plugins) {

    return function(done) {

        return gulp.src(paths.client.styles.all)
            .pipe(styleguide.generate({
                title: 'Angular ES6 Styleguide',
                server: true,
                rootPath: 'tmp/styleguide',
                overviewPath: 'README.md'
            }))
            .pipe(gulp.dest('tmp/styleguide'));

    };
};
