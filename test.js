'use strict';

// Unit Tests
const test = require('tape');
const randomUniq = require('./index');


test('should generate a different number from previous result', function(t) {
    t.plan(2)
    const x = randomUniq(0, 5);

    t.notEqual(x(), x(), "test 1");
    t.notEqual(x(), x(), "test 2");
    t.end();
});

