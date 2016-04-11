'use strict';

import del from 'del';
import util from 'gulp-util';
import {Server} from 'karma';
import path from '../../../paths';

const LOG = util.log;
const COLORS = util.colors;
const argv = util.env;
const BROWSERS = !!argv.browsers ? argv.browsers : 'Chrome';
const nocoverage = !!argv.nocoverage ? argv.nocoverage : false;

//=============================================
//         COMMAND LINE ERROR HANDLING
//=============================================

if(!BROWSERS.match(new RegExp(/IE|PhantomJS|Chrome|Firefox|Safari/))) {
    LOG(COLORS.red(`Error: The argument 'browsers' has incorrect value ${BROWSERS}! Usage: --browsers=(IE|PhantomJS|Chrome|Firefox|Safari)`));
    process.exit(1);
}

export default function(gulp, plugins) {

    return (cb) => {
        // remove 'coverage' directory before each test
        del.sync(path.test.testReports.coverage);
        // run the karma test
        const server = new Server({
            configFile: path.test.config.karma,
            browsers: BROWSERS.split(','),
            singleRun: !argv.watch,
            autoWatch: !!argv.watch,
            nocoverage: nocoverage
        }, function(code) {
            // make sure failed karma tests cause gulp to exit non-zero
            if(code === 1) {
                LOG(COLORS.red('Error: unit test failed '));
                return process.exit(1);
            }
            cb();
        });
        server.start();
    };
};
