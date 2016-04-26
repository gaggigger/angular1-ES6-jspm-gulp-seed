'use strict';

import esDoc from './tasks/esDoc';
import serveEsDoc from './tasks/esDoc.serve';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('esdoc', esDoc(gulp, plugins));

    gulp.task('serve.esDoc', ['esdoc'], serveEsDoc(gulp, plugins));

}

export default loadTasks;
