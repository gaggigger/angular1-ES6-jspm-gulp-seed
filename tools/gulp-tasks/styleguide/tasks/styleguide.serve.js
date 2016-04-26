'use strict';

import paths from '../../../paths';
import serve from 'browser-sync';
import open from 'open';

export default function(gulp, plugins) {

  return function(done) {
    'use strict';
    open('http://localhost:3000/');
    done();
  };
};
