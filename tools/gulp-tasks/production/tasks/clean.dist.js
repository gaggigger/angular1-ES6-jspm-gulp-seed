'use strict';

import paths from '../../../paths';
import rimraf from 'rimraf';

/**
 *
 * @param gulp
 * @param plugins
 * @returns {Function}
 */
export default function(gulp, plugins) {

    return function(done) {

        rimraf(paths.dist, function() {
            done();
        });

    };
};
