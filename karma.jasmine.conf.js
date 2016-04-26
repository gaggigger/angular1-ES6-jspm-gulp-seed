'use strict';

var nocoverage = false, coveralls = false;
process.argv.forEach(function(val, index) {
    if (val.indexOf('--nocoverage') !== -1 || val.indexOf('--no-coverage') !== -1) {
        nocoverage = true;
    }
    if (val.indexOf('--coveralls') !== -1) {
        coveralls = true;
    }
});

module.exports = function(config) {

    nocoverage = (config.nocoverage !== undefined && config.nocoverage !== null) ? config.nocoverage : nocoverage;

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jspm', 'jasmine'],

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['mocha'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // list of files / patterns to load in the browser
        files: [],

        jspm: {
            // Edit this to your needs
            config: 'jspm.config.js',
            loadFiles: [
                'client/app/**/*.spec.js'
            ],
            serveFiles: [
                'client/app/**/*.js',
                'client/app/**/*.html',
                'client/app/**/*.css'
            ],
            paths: {
                '*': 'base/*.js'
            }
        },

        proxies: {
            '/jspm_packages': '/base/client/jspm_packages',
            '/app'  : '/base/client/app'
        },

        // list of files to exclude
        exclude: [],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        restartOnFileChange: true,

        //reporters: process.argv.slice(2).find((argv) => argv.includes('--nocoverage') || argv.includes('--no-coverage')) ? ['dots', 'junit'] : ['dots', 'junit', 'coverage'],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // use dots reporter, as Travis terminal does not support escaping sequences;
        // when using Travis publish coverage to coveralls
        reporters: coveralls ? ['junit', 'coverage', 'coveralls', 'spec'] : nocoverage ? ['spec'] : ['junit', 'coverage', 'spec'],

        specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false,  // do not print information about failed tests
            suppressPassed: false,  // do not print information about passed tests
            suppressSkipped: true,  // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },

        junitReporter: {
            outputDir: 'test-reports/unit-test-report/', // results will be saved as $outputDir/$browserName.xml
            suite: 'unit', // suite will become the package name attribute in xml testsuite element

            outputFile: '', // if included, results will be saved as $outputDir/$browserName/$outputFile
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined // function (browser, result) to customize the classname attribute in xml testcase element

        },

        preprocessors: {
            // source files, that you wanna generate coverage for - do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'client/app/**/!(*.spec|*.mock|*-mock|*.e2e|*.po|*.test).js': ['babel', 'coverage']
        },

        // transpile with babel since the coverage reporter throws error on ES6 syntax
        babelPreprocessor: {
            options: {
                sourceMap: 'inline'
            }
        },

        coverageReporter: {
            instrumenters: {isparta: require('isparta')},
            instrumenter: {
                'client/app/**/*.js': 'isparta'
            },
            dir: 'test-reports/coverage/',
            subdir: normalizationBrowserName,
            reporters: [
                {type: 'html'}, // will generate html report
                {type: 'json'}, // will generate json report file and this report is loaded to make sure failed coverage cause gulp to exit non-zero
                {type: 'lcov'}, // will generate Icov report file and this report is published to coveralls
                {type: 'text-summary'} // it does not generate any file but it will print coverage to console
            ]
        }

    });

    function normalizationBrowserName(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
    }
};
