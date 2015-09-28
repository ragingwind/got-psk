'use strict';

var gotGhReleases = require('got-github-releases');
// var gotZip = require('./got-zip');
var download = require('./download');
var extract = require('./extract');
var rimraf = require('rimraf');

function makeUrl(version, semver) {
	if (version === 'full') {
		version = '';
	} else {
		version = '-' + version;
	}

	return 'https://github.com/PolymerElements/polymer-starter-kit/releases/download/v<semver>/polymer-starter-kit<version>-<semver>.zip'
		.replace(/<version>/g, version)
		.replace(/<semver>/g, semver);
}

	// split version to name and semver
function parseVersion(version) {
	version = version.split('@');
	return {
		version: version[0],
		semver: version[1] || 'latest'
	};
}

module.exports = function (dest, version) {
	if (!dest) {
		throw new Error('dest must be exist');
	} else if (!/^full|^light/.test(version)) {
		throw new Error('PSK version is invalid type');
	}

	version = parseVersion(version);

	return gotGhReleases('PolymerElements/polymer-starter-kit').then(function (rel) {
		var psk = rel[version.semver];

		if (!psk) {
			throw new Error('target version is not exist');
		}
		return download(makeUrl(version.version, psk.tag_name.slice(1)), dest);
	}).then(function (res) {
		return extract(res.file, res.dest);
	}).then(function (res) {
		// cleanup downloaded file
		rimraf.sync(res.zip);
		return res;
	}).catch(function (err) {
		console.log(err, err.stack);
	});
};
