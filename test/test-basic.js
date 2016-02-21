var testName = 'basic';
var tap      = require('tap');
var path     = require('path');
var config   = require('../');
var expected = require('./fixtures/expected/' + testName + '.json');
var configObj;

// augment `process.env` for stable testing`
process.env['NODE_ENV']    = 'staging';
process.env['EMPTY_VAR']   = '';
process.env['TESTLINEONE'] = 'ABC';
process.env['TESTLINETWO'] = 'XYZ';
process.env['JUST_VAR']    = 'A VAR';
process.env['VARPART1']    = 'COMBINED VAR 1/2';
process.env['VARPART2']    = 'COMBINED VAR 2/2';

configObj = config(path.join(__dirname, 'fixtures/config/' + testName));

tap.same(configObj, expected, 'expects to get proper config object');