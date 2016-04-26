'use strict';

import runSequence from 'run-sequence';
import generate from './tasks/styleguide.generate';
import apply from './tasks/styleguide.apply';
import inject from './tasks/styleguide.inject';
import serve from './tasks/styleguide.serve';
import paths from '../../paths';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('styleguide:generate', ['style'], generate(gulp, plugins));

    gulp.task('styleguide:applystyles', apply(gulp, plugins));

    gulp.task('watchStyle', ['styleguide'], function() {
        // Start watching changes and update styleguide whenever changes are detected
        // Styleguide automatically detects existing server instance
        gulp.watch(paths.client.styles.all, ['styleguide']);
    });

    gulp.task('inject', inject(gulp, plugins));

    gulp.task('serve.styleguide', serve(gulp, plugins));

    gulp.task('styleguide', function(done) {
        runSequence(
            'inject',
            ['styleguide:generate', 'styleguide:applystyles'],
            'serve.styleguide',
            done);
    });


}

export default loadTasks;
