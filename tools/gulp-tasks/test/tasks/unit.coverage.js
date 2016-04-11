'use strict';

import util from 'gulp-util';
import {Server} from 'karma';
import path from '../../../paths';
import {COVERAGE} from '../../../const';

const LOG = util.log;
const COLORS = util.colors;
const argv = util.env;
const BROWSERS = !!argv.browsers ? argv.browsers : 'Chrome';

//=============================================
//         COMMAND LINE ERROR HANDLING
//=============================================

if(!BROWSERS.match(new RegExp(/IE|PhantomJS|Chrome|Firefox|Safari/))) {
    LOG(COLORS.red(`Error: The argument 'browsers' has incorrect value ${BROWSERS}! Usage: --browsers=(IE|PhantomJS|Chrome|Firefox|Safari)`));
    process.exit(1);
}

export default function(gulp, plugins) {

    return (cb) => {
        const noCoverage = !!argv.nocoverage;
        const options = {
            thresholds : COVERAGE,
            coverageDirectory: path.test.testReports.coverage,
            rootDirectory : path.test.testReports.basePath // keep root `test-reports/` so enforce plugin is not searching in other directories
        };
        return gulp.src('.')
            .pipe(plugins.if(!noCoverage, plugins.istanbulEnforcer(options)))
            .on('error', function(error) {
                LOG(error.toString());
                return process.exit(1);
            });
    };
};
