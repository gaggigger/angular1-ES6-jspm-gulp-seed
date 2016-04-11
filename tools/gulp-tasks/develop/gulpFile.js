'use strict';

import serve from './tasks/serve';
import component from './tasks/component';
import factoryUIDKClass from './tasks/UIDK.factory.class';
import UIDKReference from './tasks/UIDK.reference';

function loadTasks(gulp, plugins) {
  'use strict';

  gulp.task('serve', ['style'], serve(gulp, plugins));

  gulp.task('component', component(gulp, plugins));

  gulp.task('reference', UIDKReference(gulp, plugins));
  gulp.task('uidk.factory.class', ['reference'], factoryUIDKClass(gulp, plugins));

}

export default loadTasks;
