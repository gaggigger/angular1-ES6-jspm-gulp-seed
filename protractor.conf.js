'use strict';

var path = require('path');

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: './test-reports/screenshots',
    filename: 'index.html',
    ignoreSkippedSpecs: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    showSummary: true,
    showQuickLinks: true,
    reportTitle: "Angular 1.x ES6 JSPM Gulp Seed",
    pathBuilder: function(currentSpec, suites, browserCapabilities) {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    }
});

exports.config = {

    directConnect: false,

    capabilities: {
        browserName: 'chrome'
    },

    // multiCapabilities: [
    //     // {
    //     // browserName: 'firefox'
    //     // },
    //     {
    //         browserName: 'chrome'
    //     }
    // ],
    framework: 'jasmine2',
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',

    specs: ['test/e2e/**/*.e2e.js'],

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {

        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'none',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displayFailuresSummary: true, // display summary of all failures after execution
            displayPendingSummary: true,  // display summary of all pending specs after execution
            displaySuccessfulSpec: true,  // display each successful spec
            displayFailedSpec: true,      // display each failed spec
            displayPendingSpec: false,    // display each pending spec
            displaySpecDuration: false,   // display each spec duration
            displaySuiteNumber: true,    // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }));

        /**
         * At this point, global 'protractor' object will be set up, and
         * jasmine will be available.
         *
         * The require statement must be down here, since jasmine-reporters
         * needs jasmine to be in the global and protractor does not guarantee
         * this until inside the onPrepare function.
         */
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'xmloutput',
            savePath: './test-reports/e2e-test-report'
        }));



        jasmine.getEnv().addReporter(reporter);

    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    }
};
