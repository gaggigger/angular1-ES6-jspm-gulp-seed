'use strict';

import paths from '../../../paths';
import path from 'path';
import yargsModule from 'yargs';
var yargs = yargsModule.argv;


export default function(gulp, plugins) {

  return function(done) {

    var cap = function(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var name = yargs.name;
    var parentPath = yargs.parent || '';
    parentPath = (parentPath.length) ? parentPath + '/' : parentPath;
    var destPath = paths.client.components + parentPath + name;

    return gulp.src(paths.blankTemplates.component)
      .pipe(plugins.template({
        name: name,
        upCaseName: cap(name)
      }))
      .pipe(plugins.rename(function(path) {
        path.basename = path.basename.replace('temp', name);
      }))
      .pipe(gulp.dest(destPath));

  };
};
