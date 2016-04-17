'use strict';
import runSequence from 'run-sequence';
import serveDev from './tasks/serve.dev';
import component from './tasks/component';
import factoryUIDKClass from './tasks/UIDK.factory.class';
import UIDKReference from './tasks/UIDK.reference';
import paths from '../../paths';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('serve.dev', ['style'], serveDev(gulp, plugins));
    gulp.task('component', component(gulp, plugins));

    gulp.task('watch.style.dev', function(done) {
        gulp.watch(paths.watch.scss, function(e) {
            runSequence(['style']);
        });
        done();
    });

    gulp.task('reference', UIDKReference(gulp, plugins));
    gulp.task('uidk.factory.class', ['reference'], factoryUIDKClass(gulp, plugins));
    gulp.task('dev', function(done) {
        runSequence(
            'watch.style.dev',
            'serve.dev',
            done);
    });

}

export default loadTasks;
