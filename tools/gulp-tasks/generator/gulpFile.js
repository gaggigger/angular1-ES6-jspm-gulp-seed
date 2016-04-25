'use strict';
import runSequence from 'run-sequence';
import component from './tasks/component';
import factory from './tasks/factory';
import view from './tasks/view';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('component', component(gulp, plugins));

    gulp.task('factory', factory(gulp, plugins));
    
    gulp.task('view', view(gulp, plugins));

}

export default loadTasks;
