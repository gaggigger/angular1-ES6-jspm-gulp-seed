'use strict';

import paths from '../../../paths';
import serve from 'browser-sync';

export default function(gulp, plugins) {

  return function(done) {
    'use strict';
    require('chokidar-socket-emitter')({
      port: 8083,
      path: paths.docs.unitcoverage.chrome.basePath,
      relativeTo: paths.docs.unitcoverage.chrome.basePath,
      dir: process.cwd()
    });
    serve({
      port: 4000,
      open: true,
      files: [].concat(
          [paths.docs.unitcoverage.chrome.css],
          paths.docs.unitcoverage.chrome.html
      ),
      server: {
        baseDir: paths.docs.unitcoverage.chrome.basePath
      }
    });
  };
};
