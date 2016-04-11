'use strict';

import paths from '../../../paths';
import serve from 'browser-sync';

export default function(gulp, plugins) {

  return function(done) {
    'use strict';
    require('chokidar-socket-emitter')({
      port: 8082,
      path: 'dist',
      relativeTo: 'dist',
      dir: process.cwd()
    });
    serve({
      port: process.env.PORT || 3001,
      open: true,
      files: [].concat(
        'dist/app.min.js',
        'dist/index.html'
      ),
      server: {
        baseDir: 'dist',
        index: "index.html"
      }
    });
  };
};
