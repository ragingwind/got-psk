# got-psk [![Build Status](https://travis-ci.org/ragingwind/got-psk.svg?branch=master)](https://travis-ci.org/ragingwind/got-psk)

> Got [Polymer Starter Kit](https://goo.gl/xWC7vj) in variety options


## Install

```
$ npm install --save got-psk
```

## Usage

```js
var gotPSK = require('got-psk');

gotPSK('psk-project', 'full').then(function () {

});
```

## API

### gotPSK(dest, version)

#### dest

Type: `string`

path to download a zip file

#### version

Type: `string`

`light` or `full`, version types of PSK to download and install, are acceptable version set of version type. it also can be used with version number with `@`, if the number is not given, will download `latest` version. see a sample for understanding.

- 'full': download from full version released latest
- 'full@1.1.0': download from full version released with 1.1.0 tag
- 'light@1.0.3': download from light version released with 1.0.3 tag

## CLI

```
$ npm install --global got-psk
```

```
$ got-psk <dest> <version> --help

Usage
	$ got-psk <dest> <version>

Examples
	$ got-psk .
	# will download the latest version of PSK full version to current path

	$ got-psk . light
	# will download the latest version of PSK light version to current path

	$ got-psk . full@1.0.3
	# will download the 1.0.3 version of PSK light version to current path
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
