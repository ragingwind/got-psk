#!/usr/bin/env node
'use strict';
var meow = require('meow');
var pskGot = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ psk-got [input]',
		'',
		'Options',
		'  --foo  Lorem ipsum. [Default: false]',
		'',
		'Examples',
		'  $ psk-got',
		'  unicorns & rainbows',
		'  $ psk-got ponies',
		'  ponies & rainbows'
	]
});

console.log(pskGot(cli.input[0] || 'unicorns'));
