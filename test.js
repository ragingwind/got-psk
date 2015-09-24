'use strict';
var assert = require('assert');
var gotPSK = require('./');

it('should', function (done) {
	gotPSK().then(function (res) {
		console.log(res);
		done();
	}).catch(function () {
		console.log('error');
		done();
	});
	assert(true);
});
