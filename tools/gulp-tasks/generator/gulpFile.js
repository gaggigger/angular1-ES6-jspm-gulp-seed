'use strict';
// import runSequence from 'run-sequence';
import component from './tasks/component';
import factory from './tasks/factory';
import view from './tasks/view';
import layout from './tasks/layout';

function loadTasks(gulp, plugins) {
    'use strict';

    gulp.task('component', component(gulp, plugins));

    gulp.task('factory', factory(gulp, plugins));

    gulp.task('view', view(gulp, plugins));
    
    gulp.task('layout', layout(gulp, plugins));

}

export default loadTasks;
