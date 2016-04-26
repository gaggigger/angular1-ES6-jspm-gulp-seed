'use strict';

import util from 'gulp-util';
import paths from '../../../paths';
import yargsModule from 'yargs';
import cap from './common/cap';
import camel from './common/camel';
import dash from './common/dash';
var yargs = yargsModule.argv;

const LOG = util.log;
const COLORS = util.colors;

export default function(gulp, plugins) {

    return function(done) {

        var name = yargs.name;
        var route = yargs.route ? dash(yargs.route) : dash(name);
        var redirectTo = yargs.redirectTo ? yargs.redirectTo : camel(name);

        if (!yargs.route) {
            LOG(COLORS.yellow(`Warning: --route=[route name] not provided. The route will be derived by the --name param.`));
        }

        var parentPath = yargs.parent || '';
        parentPath = (parentPath.length) ? parentPath + '/' : parentPath;
        var destPath = paths.client.layouts + parentPath + 'layout.' + name;

        return gulp.src(paths.blankTemplates.layout)
            .pipe(plugins.template({
                name: name,
                InitialCaseName: cap(camel(name)),
                camelCaseName: camel(name),
                route: route,
                redirectTo: redirectTo
            }))
            .pipe(plugins.rename(function(path) {
                path.basename = path.basename.replace('temp', name);
            }))
            .pipe(gulp.dest(destPath));

    };
};
