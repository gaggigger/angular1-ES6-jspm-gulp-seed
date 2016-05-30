'use strict';

import serve from 'browser-sync';
import emitter from 'chokidar-socket-emitter';

export default function(gulp, plugins) {

  return function(done) {
    'use strict';
    emitter({
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
