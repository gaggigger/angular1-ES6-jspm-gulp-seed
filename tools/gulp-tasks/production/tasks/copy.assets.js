'use strict';

import paths from '../../../paths';

export default function(gulp, plugins) {

  return function(done) {
    'use strict';
    return gulp.src(paths.client.assets)
        .pipe(gulp.dest(paths.dist + '/assets'));
  };
};
