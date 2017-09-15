"use strict";

var util = require('util');
var events = require('events');
var junitViewer = require('junit-viewer');
var fs = require('fs');

var CustomReporter = function(options) {

    this.on('start', function() {
    });

    this.on('end', function() {
        // Generates HTML report from XML files
        var parsedData = junitViewer.parse('./reports');
        var parsedAndRenderedData = junitViewer.junit_viewer('./reports');
        fs.writeFileSync('./reports/wdio-report.html', parsedAndRenderedData);
    });

    this.on('suite:start', function(suite) {
    });

    this.on('suite:end', function(suite) {
    });

    this.on('test:start', function(test) {

    });

    this.on('test:end', function() {
    });

    this.on('hook:start', function() {
    });

    this.on('hook:end', function() {
    });

    this.on('test:pass', function() {
    });

    this.on('test:fail', function(test) {
    });

    this.on('test:pending', function(test) {
    });
};

CustomReporter.reporterName = 'CustomReporter';
/**
 * Inherit from EventEmitter
 */
util.inherits(CustomReporter, events.EventEmitter);

/**
 * Expose Custom Reporter
 */
//exports =
exports = module.exports = CustomReporter;
