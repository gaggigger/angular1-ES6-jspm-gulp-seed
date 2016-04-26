'use strict';

import stylApp from './tasks/styles.app';
import stylGlobal from './tasks/styles.global';
import cleanStylesGlobal from './tasks/clean.styles.global';
import cleanStylesApp from './tasks/clean.styles.app';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('clean:styles.global', cleanStylesGlobal(gulp, plugins));

    gulp.task('clean:styles.app', cleanStylesApp(gulp, plugins));

    gulp.task('clean', ['clean:styles.global', 'clean:styles.app']);

    gulp.task('style.app', stylApp(gulp, plugins));

    gulp.task('style.global', stylGlobal(gulp, plugins));

    gulp.task('style', ['style.app', 'style.global']);

}

export default loadTasks;
