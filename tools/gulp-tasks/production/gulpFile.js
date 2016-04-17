'use strict';

import runSequence from 'run-sequence';
import cleanDist from './tasks/clean.dist';
import build from './tasks/build';
import serveDist from './tasks/serve.dist';
import copyFonts from './tasks/copy.fonts';
import copyAssets from './tasks/copy.assets';
import paths from '../../paths';

function loadTasks(gulp, plugins) {
  'use strict';

  gulp.task('clean.dist', cleanDist(gulp, plugins));

  /**
   * Copy
   */
  gulp.task('copy.fonts', copyFonts(gulp, plugins));
  gulp.task('copy.assets', copyAssets(gulp, plugins));

  gulp.task('build', ['style'], build(gulp, plugins));

  /**
   * Since CSS is embedded in the js files, a build
   * process is requred to update the distribution
   * files.
   */
  gulp.task('watch.style.dist', function(done) {
    gulp.watch(paths.watch.scss, function(e) {
      runSequence(
          'build',
          'copy.fonts',
          'copy.assets');
    });
    done();
  });

  gulp.task('watch.js', function(done) {
    gulp.watch(paths.watch.js, function(e) {
      runSequence(
          'build',
          'copy.fonts',
          'copy.assets');
    });
    done();
  });

  gulp.task('watch.html', function(done) {
    gulp.watch(paths.watch.html, function(e) {
      runSequence(
          'build',
          'copy.fonts',
          'copy.assets');
    });
    done();
  });

  gulp.task('serve.dist', function(done) {
    runSequence(
        'clean.dist',
        'build',
        'copy.fonts',
        'copy.assets',
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

