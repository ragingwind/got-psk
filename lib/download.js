'use strict';

var fs = require('fs');
var path = require('path');
var got = require('got');
var Promise = require('pinkie-promise');

module.exports = function (url, dest) {
	if (!url || !dest) {
		throw new Error('url of zip and dest are required');
	}

	dest = path.relative(process.cwd(), dest);

	return new Promise(function (resolve, reject) {
		var file = path.join(dest, path.basename(url));
		var zipfile = fs.createWriteStream(file);
		var headers = {
			headers: {
				'user-agent': 'https://github.com/ragingwind/node-got-psk'
			}
		};

		zipfile.on('finish', function () {
			resolve({
				dest: dest,
				file: file
			});
		});

		got.stream(url, headers).on('error', function (err) {
			reject(err);
		}).pipe(zipfile);
	});
};
