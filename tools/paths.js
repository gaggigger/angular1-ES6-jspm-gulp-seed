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
        basePath:       `${root}/client/`,
        app: {
            basePath:   `${root}/client/app`,
            app:        `${root}/client/app/app.js`
        },
        styles: {
          basePath:     `${root}/client`,
          styleguide:   `${root}/client/styleguide.scss`,
          global:       `${root}/client/styles/global.scss`,
          globalCss:    `${root}/client/styles/**/*.css`,  // clean task
          all:          [`${root}/client/**/*.scss`, `!${root}/client/jspm_packages/**/*`], // styleguide
          app:          `${root}/client/app/**/*.scss`
        },
        fonts:          `${root}/client/**/*.{eot,svg,ttf,woff,woff2}`,
        images:         `${root}/client/images/**/*.{png,gif,jpg,jpeg}`,
        svg:            `${root}/client/svg/**/*.svg`,
        components:     `${root}/client/app/components/`,
        UIDK:           `${root}/client/UIDK/`,
        html: [
                        `${root}/client/app/**/*.html`,
                        `${root}/client/index.html`
        ],
        css:            `${root}/client/app/**/*.css`
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
        reference:      `${root}/generator/reference.js`
    },

    dist:               `${root}/dist/`,

    watch: {
        styles:         `${root}/app/**/*.scss`,
        js:             `${root}/app/**/*.js`,
        html:           `${root}/app/**/*.html`
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
        styles:         `${root}/.tmp/styles/`,
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
            styles:     `${root}/build/dist/styles/`,
            scripts:    `${root}/build/dist/scripts/`
        },
        docs:           `${root}/build/docs/`,
        testReports:    `${root}/build/test-reports/`
    }
};

export default paths;
