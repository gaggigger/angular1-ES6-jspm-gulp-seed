'use strict';

import paths from '../../../paths';
import yargsModule from 'yargs';
import cap from './common/cap';
import camel from './common/camel'
var yargs = yargsModule.argv;


export default function(gulp, plugins) {

    return function(done) {

        var name = yargs.name;

        return gulp.src(paths.blankTemplates.reference)
            .pipe(plugins.template({
                name: name,
                upCaseName: cap(name),
                camelCaseName: camel(name)
            }))
            .pipe(plugins.rename(function(path) {
                path.basename = path.basename.replace('reference', name);
            }))
            .pipe(gulp.dest(paths.client.UIDK));

    };
};
