import test from 'ava';
import gotPSK from './';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import fs from 'fs';
import path from 'path';

function access(file, cb) {
	fs.access(path.join(__dirname, '.tmp', file), fs.F_OK, err => {
		if (err) {
			console.log(err);
		}

		cb(err);
	});
}

test.before(t => {
	rimraf.sync('.tmp');
	t.end();
});

test('get the latest version of psk full version', t => {
	mkdirp('.tmp/full');

	gotPSK('.tmp/full', 'full').then(function () {
		access('full/gulpfile.js', e => {
			t.ok(!e);
			t.end();
		});
	}).catch(function (err) {
		t.fail(err);
		t.end();
	});
});

test('get the specific version of psk', t => {
	mkdirp('.tmp/full-1.0.3');

	gotPSK('.tmp/full-1.0.3', 'full@1.0.3').then(function (res) {
		t.not(res.zip.indexOf('1.0.3'), -1);
		access('full-1.0.3/gulpfile.js', e => {
			t.ok(!e);
			t.end();
		});
	}).catch(function (err) {
		t.fail(err);
		t.end();
	});
});

test('get the latest of light', t => {
	mkdirp('.tmp/light');

	gotPSK('.tmp/light', 'light').then(function () {
		access('light/app/bower_components', e => {
			t.ok(!e);
			t.end();
		});
	}).catch(function (err) {
		t.fail(err);
		t.end();
	});
});
