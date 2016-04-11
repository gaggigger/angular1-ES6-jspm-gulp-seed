'use strict';

import rimraf from 'rimraf';
import jspm from 'jspm';
import paths from '../../../paths';

export default function(gulp, plugins) {

  return function(done) {

    var dist = paths.dist + 'app.js';
    rimraf.sync(paths.dist + '*');
    // Use JSPM to bundle our app
    return jspm.bundleSFX(paths.client.app.app, dist, {})
      .then(function() {
        // Also create a fully annotated minified copy
        return gulp.src(dist)
          .pipe(plugins.ngAnnotate())
          .pipe(plugins.uglify())
          .pipe(plugins.rename('app.min.js'))
          .pipe(gulp.dest(paths.dist))
      })
      .then(function() {
        // Inject minified script into index
        return gulp.src('client/index.html')
          .pipe(plugins.htmlReplace({
            'js': 'app.min.js'
          }))
          .pipe(gulp.dest(paths.dist));
      });


  };
};
