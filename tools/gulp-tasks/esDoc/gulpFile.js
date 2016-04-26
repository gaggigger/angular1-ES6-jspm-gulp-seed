'use strict';

import esDoc from './tasks/esDoc';
import serveEsDoc from './tasks/esDoc.serve';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('esdoc.build', esDoc(gulp, plugins));

    gulp.task('esDoc', ['esdoc.build'], serveEsDoc(gulp, plugins));

}

export default loadTasks;
