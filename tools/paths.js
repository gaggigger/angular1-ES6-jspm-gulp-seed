/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import path from 'path';

//root ---> /Users/jerryorta-dev/Dev/UIUXEngineering/ANGULAR-ES6-JSPM-GULP/angular1-ES6-jspm-gulp-seed
const root = path.dirname(__dirname);

const paths = {
    root: root,


    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks.
     *
     * - 'styles'       contains all project css styles
     * - 'images'       contains all project images
     * - 'fonts'        contains all project fonts
     * - 'scripts'      contains all project javascript except config-env.js and unit test files
     * - 'html'         contains main html files
     * - 'templates'    contains all project html templates
     * - 'config'       contains Angular app config files
     */
    client: {
        basePath:       `${root}/client`,
        app: {
            basePath:   `${root}/client/app`,
            app:        `${root}/client/app/app.js`
        },
        styles: {
          basePath:     `${root}/client/scss`,
          styleguide:   `${root}/client/styleguide.scss`,
          global:       `${root}/client/scss/global.scss`,
          globalCss:    `${root}/client/scss/**/*.css`,  // clean task
          all:          [`${root}/client/**/*.scss`, `!${root}/client/jspm_packages/**/*`], // styleguide
          app:          `${root}/client/app/**/*.scss`, 
          css:          `${root}/client/app/**/*.css`
        },
        fonts:          `${root}/client/scss/**/*.{eot,svg,ttf,woff,woff2}`,
        assets:         `${root}/client/assets/**/*`,
        components:     `${root}/client/app/components/`,
        services:       `${root}/client/app/services/`,
        views:          `${root}/client/app/views/`,
        layouts:        `${root}/client/app/layouts/`,
        UIDK:           `${root}/client/UIDK/`,
        html: [
                        `${root}/client/app/**/*.html`,
                        `${root}/client/index.html`
        ]
    },

    docs: {
      styleguide:       `${root}/docs/styleguide/`,
      es6: {
          basePath:     `${root}/docs/es6/`,
          css:          `${root}/docs/es6/**/*.css`,
          html: [
                        `${root}/docs/es6/**/*.html`,
                        `${root}/docs/es6/index.html`
          ]
      }
    },

    blankTemplates: {
        component:      `${root}/generator/component/**/*.**`,
        factory:        `${root}/generator/factory/**/*.**`,
        view:           `${root}/generator/view/**/*.**`,
        layout:         `${root}/generator/layout/**/*.**`
    },

    dist:               `${root}/dist/`,

    watch: {
        scss:           `client/app/**/*.scss`,
        js:             `client/app/**/*.js`,
        html:           `client/app/**/*.html`
    },

    /**
     * This is a collection of file patterns that refer to our app unit and e2e tests code.
     *
     * 'config'       contains karma and protractor config files
     * 'testReports'  contains unit and e2e test reports
     * 'unit'         contains all project unit test code
     * 'e2e'          contains all project e2e test code
     */
    test: {
        basePath:       `${root}/test/`,
        config: {
            karma:      `${root}/karma.jasmine.conf.js`,
            protractor: `${root}/protractor.conf.js`
        },
        testReports: {
            basePath:   `${root}/test-reports/`,
            coverage:   `${root}/test-reports/coverage/`
        },
        platoReports:   `${root}/test/plato`,
        mock:           `${root}/client/app/**/*.mock.js`,
        unit:           `${root}/client/app/**/*.spec.js`,
        // e2e:            `[${root}/test/e2e/**/*.e2e.js, ${root}/client/app/**/*.e2e.js]`
        e2e:            `[${root}/test/e2e/**/*.e2e.js]`
    },
    /**
     * The 'tmp' folder is where our html templates are compiled to JavaScript during
     * the build process and then they are concatenating with all other js files and
     * copy to 'dist' folder.
     */
    tmp: {
        basePath:       `${root}/.tmp/`,
        styles:         `${root}/.tmp/scss/`,
        scripts:        `${root}/.tmp/scripts/`
    },


    /**
     * The 'build' folder is where our app resides once it's
     * completely built.
     *
     * - 'dist'         application distribution source code
     * - 'docs'         application documentation
     */
    build: {
        basePath:       `${root}/build/`,
        dist: {
            basePath:   `${root}/build/dist/`,
            fonts:      `${root}/build/dist/fonts/`,
            images:     `${root}/build/dist/images/`,
            styles:     `${root}/build/dist/scss/`,
            scripts:    `${root}/build/dist/scripts/`
        },
        docs:           `${root}/build/docs/`,
        testReports:    `${root}/build/test-reports/`
    }
};

export default paths;
