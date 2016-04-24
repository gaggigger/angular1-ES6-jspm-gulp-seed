'use strict';

import paths from '../../../paths';
import path from 'path';
import yargsModule from 'yargs';
import cap from './common/cap';
import camel from './common/camel'
var yargs = yargsModule.argv;


export default function(gulp, plugins) {

  return function(done) {

    var name = yargs.name;
    var parentPath = yargs.parent || '';
    parentPath = (parentPath.length) ? parentPath + '/' : parentPath;
    var destPath = paths.client.components + parentPath + name;

    return gulp.src(paths.blankTemplates.component)
      .pipe(plugins.template({
        name: name,
        upCaseName: cap(name),
        camelCaseName: camel(name)
      }))
      .pipe(plugins.rename(function(path) {
        path.basename = path.basename.replace('temp', name);
      }))
      .pipe(gulp.dest(destPath));

  };
};
