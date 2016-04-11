'use strict';

import stylApp from './tasks/styles.app';
import stylGlobal from './tasks/styles.global';
import generate from './tasks/styleguide.generate';
import apply from './tasks/styleguide.apply';
import inject from './tasks/styleguide.inject';
import cleanStyles from './tasks/clean.styles.css.app';
import esDoc from './tasks/esDoc';
import serveEsDoc from './tasks/esDoc.serve';
import paths from '../../paths';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('clean:global', cleanStyles(gulp, plugins));

    gulp.task('clean', ['clean:global']);

    gulp.task('style.app', stylApp(gulp, plugins));

    gulp.task('style.global', stylGlobal(gulp, plugins));

    gulp.task('style', ['style.app', 'style.global']);

    gulp.task('styleguide:generate', ['style'], generate(gulp, plugins));

    gulp.task('styleguide:applystyles', apply(gulp, plugins));

    gulp.task('watchStyle', ['styleguide'], function() {
        // Start watching changes and update styleguide whenever changes are detected
        // Styleguide automatically detects existing server instance
        gulp.watch(paths.client.styles.all, ['styleguide']);
    });

    gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

    gulp.task('inject', inject(gulp, plugins));

    gulp.task('esdoc', esDoc(gulp, plugins));

    gulp.task('serve.esdoc', ['esdoc'], serveEsDoc(gulp, plugins));

}

export default loadTasks;
