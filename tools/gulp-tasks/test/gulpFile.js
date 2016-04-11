'use strict';


import path from 'path';
import child_process from 'child_process';
import testUnit from './tasks/test.unit';
import generateUnitTestCoverageReport from './tasks/unit.coverage';

function loadTasks(gulp, plugins, paths) {
  'use strict';

  /**
   * The 'test.nocoverage' task run unit tests without coverage check.
   */
  gulp.task('test.unit', testUnit(gulp, plugins));
  gulp.task('unit', ['test.unit'], generateUnitTestCoverageReport(gulp, plugins));

  function getProtractorBinary(binaryName){
    var winExt = /^win/.test(process.platform)? '.cmd' : '';
    var pkgPath = process.cwd() + '/node_modules/protractor/bin';
    var protractorDir = path.resolve(path.join(path.dirname(pkgPath), 'bin'));
    return path.join(protractorDir, '/'+binaryName+winExt);
  }

  gulp.task('webdriver.update', function(done){
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], {
      stdio: 'inherit'
    }).once('close', done);
  });

  gulp.task('e2e', ['webdriver.update'], function (done) {
    var argv = process.argv.slice(3); // forward args to protractor
    child_process.spawn(getProtractorBinary('protractor'), argv, {
      stdio: 'inherit'
    }).once('close', done);
  });

}

export default loadTasks;
