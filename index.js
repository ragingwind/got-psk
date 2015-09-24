'use strict';

var ghReleases = require('got-github-releases');

function downloadPSK(verion) {
	return ghReleases('PolymerElements/polymer-starter-kit').then(function (rel) {
		console.log(rel.latest.zipball_url);
	});
}

module.exports = function () {
	return downloadPSK().then(function (tags) {
	});
};
