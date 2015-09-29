'use strict';

var fs = require('fs');
var path = require('path');
var Promise = require('pinkie-promise');
var yauzl = require('yauzl');
var mkdirp = require('mkdirp');

// filter a filename in PSK zip. skipping leading path or __MACOSX dir
function filter(filename) {
	if (/^polymer-starter-kit-/.test(filename)) {
		filename = filename.slice(filename.indexOf('\/'));
	}

	return /^__MACOSX\//.test(filename) ? null : filename;
}

// unzip downloaded zip file
module.exports = function (zip, dest) {
	return new Promise(function (resolve) {
		yauzl.open(zip, function (err, zipfile) {
			if (err) {
				throw err;
			}

			zipfile.on('end', function () {
				resolve({
					dest: dest,
					zip: zip
				});
			});

			zipfile.on('entry', function (entry) {
				var filename = filter(entry.fileName);

				if (!filename) {
					return;
				}

				filename = path.join(dest, filename);

				if (/\/$/.test(filename)) {
					mkdirp(filename);
					return;
				}

				zipfile.openReadStream(entry, function (err, readfile) {
					if (err) {
						console.error(err.toString(), err.stack);
					}

					var f = fs.createWriteStream(filename);
					f.on('error', function (err) {
						console.error(err.toString(), err.stack);
					});

					readfile.pipe(f);
					readfile.on('error', function (err) {
						console.error(err.toString(), err.stack);
					});
				});
			});
		});
	});
};
