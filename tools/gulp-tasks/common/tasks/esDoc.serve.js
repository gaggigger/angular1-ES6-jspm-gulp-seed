'use strict';

import paths from '../../../paths';
import serve from 'browser-sync';

export default function(gulp, plugins) {

  return function(done) {
    'use strict';
    require('chokidar-socket-emitter')({
      port: 8083,
      path: paths.docs.es6.basePath,
      relativeTo: paths.docs.es6.basePath,
      dir: process.cwd()
    });
    serve({
      port: 4000,
      open: true,
      files: [].concat(
          [paths.docs.es6.css],
          paths.docs.es6.html
      ),
      server: {
        baseDir: paths.docs.es6.basePath
      }
    });
  };
};
