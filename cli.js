#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gotPsk = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ got-psk <dest> <version>',
		'',
		'Examples',
		'	$ got-psk .',
		'	# will download the latest version of PSK full version to current path',
		'',
		'	$ got-psk . light',
		'	# will download the latest version of PSK light version to current path',
		'',
		'$ got-psk . full@1.0.3',
		'	# will download the 1.0.3 version of PSK light version to current path'
	]
});

gotPsk(cli.input[0], cli.input[1]).then(function (res) {
	console.log('PSK download has completed. files are on ', res.dest);
}).catch(function (err) {
	console.error(err.toString(), err.stack);
});
