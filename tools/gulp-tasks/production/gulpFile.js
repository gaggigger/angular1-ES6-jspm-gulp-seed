'use strict';

import runSequence from 'run-sequence';
import cleanDist from './tasks/clean.dist';
import build from './tasks/build';
import serveDist from './tasks/serve.dist';
import copyFonts from './tasks/copy.fonts';
import paths from '../../paths';

function loadTasks(gulp, plugins) {
  'use strict';

  gulp.task('clean.dist', cleanDist(gulp, plugins));

  gulp.task('copy.fonts', copyFonts(gulp, plugins));

  gulp.task('build', ['style'], build(gulp, plugins));

  gulp.task('watch.style.dist', function(done) {
    gulp.watch(paths.watch.styles, function(e) {
      runSequence(
          'build',
          'copy.fonts');
    });
    done();
  });

  gulp.task('watch.js', function(done) {
    gulp.watch(paths.watch.js, function(e) {
      runSequence(['build']);
    });
    done();
  });

  gulp.task('watch.html', function(done) {
    gulp.watch(paths.watch.html, function(e) {
      runSequence(['build']);
    });
    done();
  });

  gulp.task('serve.dist', function(done) {
    runSequence(
        'clean.dist',
        'build',
        'copy.fonts',
        serveDist(gulp, plugins));
  });

  gulp.task('prod', function(done) {
    runSequence(
      'watch.style.dist',
      'watch.js',
      'watch.html',
      'serve.dist',
      done);
  });
}

export default loadTasks;

