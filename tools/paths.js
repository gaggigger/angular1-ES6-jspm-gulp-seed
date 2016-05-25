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
        basePath:       `${root}/src/client`,
        app: {
            basePath:   `${root}/src/client/app`,
            app:        `${root}/src/client/app/app.js`
        },
        styles: {
          basePath:     `${root}/src/client/scss`,
          styleguide:   `${root}/src/client/styleguide.scss`,
          global:       `${root}/src/client/scss/global.scss`,
          globalCss:    `${root}/src/client/scss/**/*.css`,  // clean task
          all:          [`${root}/src/client/**/*.scss`, `!${root}/src/client/jspm_packages/**/*`], // styleguide
          app:          `${root}/src/client/app/**/*.scss`, 
          css:          `${root}/src/client/app/**/*.css`
        },
        fonts:          `${root}/src/client/scss/**/*.{eot,svg,ttf,woff,woff2}`,
        assets:         `${root}/src/client/assets/**/*`,
        components:     `${root}/src/client/app/components/`,
        services:       `${root}/src/client/app/services/`,
        views:          `${root}/src/client/app/views/`,
        layouts:        `${root}/src/client/app/layouts/`,
        UIDK:           `${root}/src/client/UIDK/`,
        json:           `${root}/src/client/app/**/*.json`,
        html: [
                        `${root}/src/client/app/**/*.html`,
                        `${root}/src/client/index.html`
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
      },
      unitcoverage: {
          chrome: {
              basePath:     `${root}/test-reports/coverage/chrome/`,
              css:          `${root}/test-reports/coverage/chrome/**/*.css`,
              html: [
                  `${root}/test-reports/coverage/chrome/**/*.html`,
                  `${root}/test-reports/coverage/chrome/index.html`
              ]
          }
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
        scss:           `src/client/app/**/*.scss`,
        js:             `src/client/app/**/*.js`,
        html:           `src/client/app/**/*.html`
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
        mock:           `${root}/src/client/app/**/*.mock.js`,
        unit:           `${root}/src/client/app/**/*.spec.js`,
        // e2e:            `[${root}/test/e2e/**/*.e2e.js, ${root}/src/client/app/**/*.e2e.js]`
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
