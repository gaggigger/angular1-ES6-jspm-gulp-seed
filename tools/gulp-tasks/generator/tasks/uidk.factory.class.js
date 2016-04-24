'use strict';

import paths from '../../../paths';
import yargsModule from 'yargs';
var yargs = yargsModule.argv;


export default function(gulp, plugins) {

  return function(done) {

    var camel = function(val) {
      var segments =  val.split('.');

      for (var i = 0; i < segments.length; i++) {
        segments[i] = cap(segments[i]);
      }

      return segments.join('');

    };

    var cap = function(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var name = yargs.name;
    var parentPath = yargs.parent || '';
    parentPath = (parentPath.length) ? parentPath + '/' : parentPath;
    var destPath = paths.client.UIDK + parentPath + name + '.module';

    return gulp.src(paths.blankTemplates.factory)
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
