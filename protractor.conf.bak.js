'use strict';

/**
 * Doc:
 * https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 * https://github.com/angular/protractor/blob/master/docs/api-overview.md
 * https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
 */

var path = require('path');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest:  './test-reports/screenshots',
    showSummary: true,
    showQuickLinks: true,
    pathBuilder: function(currentSpec, suites, browserCapabilities) {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    },
    captureOnlyFailedSpecs: true
});

exports.config = {
    seleniumArgs: ['-browserTimeout=60'],

    // ---------------------------------------------------------------------------
    // ----- How to set up browsers ----------------------------------------------
    // ---------------------------------------------------------------------------
    //
    // Protractor can launch your tests on one or more browsers. If you are
    // testing on a single browser, use the capabilities option. If you are
    // testing on multiple browsers, use the multiCapabilities array.

    // For a list of available capabilities, see
    // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
    //
    // In addition, you may specify count, shardTestFiles, and maxInstances.
    capabilities: {
        browserName: 'chrome',

        // Name of the process executing this capability.  Not used directly by
        // protractor or the browser, but instead pass directly to third parties
        // like BrowserStack and SauceLabs as the name of the job running this test
        name: 'Unnamed Job',

        // User defined name for the capability that will display in the results log
        // Defaults to the browser name
        logName: 'Chrome - English'

    },

    // specs: ['test/e2e/**/*.e2e.js', 'client/app/**/*.e2e.js'],
    specs: ['test/e2e/**/*.e2e.js'],


    noGlobals: false,

    framework: 'jasmine2',

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    /**
     * A callback function called once protractor is ready and available,
     * and before the specs are executed.
     *
     * You can specify a file containing code to run by setting onPrepare to
     * the filename string.
     */
    onPrepare: function() {
        browser.driver.manage().window().setSize(1024,768);


        var jasmineReporters = require('jasmine-reporters');

        /**
         * At this point, global 'protractor' object will be set up, and
         * jasmine will be available.
         *
         * The require statement must be down here, since jasmine-reporters
         * needs jasmine to be in the global and protractor does not guarantee
         * this until inside the onPrepare function.
         */
        // returning the promise makes protractor wait for the reporter config before executing tests
        return browser.getProcessedConfig().then(function(config) {
            // you could use other properties here if you want, such as platform and version
            var browserName = config.capabilities.browserName;

            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: './test-reports/e2e-test-report',
                // this will produce distinct xml files for each capability
                filePrefix: browserName + '-xmloutput',
                modifySuiteName: function(generatedSuiteName, suite) {
                    // this will produce distinct suite names for each capability,
                    // e.g. 'firefox.login tests' and 'chrome.login tests'
                    return browserName + '.' + generatedSuiteName;
                }
            });

            jasmine.getEnv().addReporter(junitReporter);

            jasmine.getEnv().addReporter(reporter);

        });

    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    // ----- Options to be passed to minijasminenode -----
    // Options to be passed to jasmine.
    //
    // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
    // for the exact options available.
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Function called to print jasmine results.
        print: function() {},
        // If set, only execute specs whose names match the pattern, which is
        // internally compiled to a RegExp.
        grep: 'pattern',
        // Inverts 'grep' matches
        invertGrep: false
    }

};
