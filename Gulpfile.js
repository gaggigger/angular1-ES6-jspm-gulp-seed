'use strict';

// this will automatically compile gulp tasks files on the fly from ES6 to ES5
require('babel-register');

// require all tasks
require('require-dir')('./tools/gulp-tasks', { recurse: true });
