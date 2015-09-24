# got-psk [![Build Status](https://travis-ci.org/ragingwind/node-got-psk.svg?branch=master)](https://travis-ci.org/ragingwind/node-got-psk)

> Got [Polymer Starter Kit](https://goo.gl/xWC7vj) in variety options


## Install

```
$ npm install --save got-psk
```

## Usage

```js
var gotPSK = require('got-psk');

gotPSK(path.join(__dirname, '/psk'), options).then(function (res) {
});
```

## API

### gotPSK([options])

#### options

##### version

Type: `string`

`light` or `full`, version types of PSK to download and install, are acceptable version set of version type. it also can be used with version number with `@`, if the number is not set, will download with `latest` version. see a sample to understand.

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
    got-psk <dest>

  Options
		--no-git keep `.git` directory after downloading
		--chromeapp customize a PSK project to suit Chrome Dev Editor

	<dest> Path for download PSK
	<version> Version of PSK released for download, master, light[@version], full[@version] [Default: `full`]

  Examples
		$ got-psk .
		# will download PSK full version to current process path

		$ got-psk --no-git
		# will download PSK latest github's master version and then remove .git

    $ got-psk . --light --chromeapp
		# will download PSK light version and then customize the PSK project to fit to Chrome App after unzip
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
