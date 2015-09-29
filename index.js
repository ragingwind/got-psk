'use strict';

var gotGhReleases = require('got-github-releases');
var download = require('./lib/download');
var extract = require('./lib/extract');
var rimraf = require('rimraf');

function makeUrl(version, semver) {
	return 'https://github.com/PolymerElements/polymer-starter-kit/releases/download/v<semver>/polymer-starter-kit<version>-<semver>.zip'
		.replace(/<version>/g, (version === 'light' ? '-' + version : ''))
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

module.exports = function (dest, version, log) {
	if (!dest) {
		throw new Error('dest must be exist');
	}

	if (!/^full|^light/.test(version)) {
		throw new Error('PSK version is invalid type');
	}

	log = log || function () {};
	version = parseVersion(version);

	return gotGhReleases('PolymerElements/polymer-starter-kit').then(function (rel) {
		var psk = rel[version.semver];

		if (!psk) {
			throw new Error('target version is not exist');
		}

		var url = makeUrl(version.version, psk.tag_name.slice(1));

		log('Start downloading from', url, 'to', dest);

		return download(url, dest);
	}).then(function (res) {
		log('Downloading has completed. start extracting on', dest);

		return extract(res.file, res.dest);
	}).then(function (res) {
		log('Extracting has completed. zip file will be removed');

		rimraf.sync(res.zip);
		return res;
	}).catch(function (err) {
		log('Have got an err', err.toString(), err.stack);
	});
};
