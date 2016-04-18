'use strict';

import paths from '../../../paths';
import serve from 'browser-sync';

export default function(gulp, plugins) {

  return function(done) {
    'use strict';
    require('chokidar-socket-emitter')({
      port: 8081,
      path: paths.client.basePath + '/',
      relativeTo: paths.client.basePath + '/',
      dir: process.cwd()
    });
    serve({
      port: process.env.PORT || 3000,
      open: true,
      files: [].concat(
        [paths.client.css],
        paths.client.html
      ),
      server: {
        baseDir: paths.client.basePath + '/',
        // serve our jspm dependencies with the client folder
        routes: {
          '/jspm.config.js': './jspm.config.js',
          '/jspm_packages': './jspm_packages'
        }
      }
    });
  };
};
