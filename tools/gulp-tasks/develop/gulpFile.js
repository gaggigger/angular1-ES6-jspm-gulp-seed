'use strict';
import runSequence from 'run-sequence';
import serveDev from './tasks/serve.dev';
import paths from '../../paths';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('serve.dev', ['style'], serveDev(gulp, plugins));

    gulp.task('watch.style.dev', function(done) {
        gulp.watch(paths.watch.scss, function(e) {
            runSequence(['style']);
        });
        done();
    });
    
    gulp.task('dev', function(done) {
        runSequence(
            'watch.style.dev',
            'serve.dev',
            done);
    });

}

export default loadTasks;
