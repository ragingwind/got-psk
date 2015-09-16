# psk-got [![Build Status](https://travis-ci.org/ragingwind/psk-got.svg?branch=master)](https://travis-ci.org/ragingwind/psk-got)

> Get [Polymer Starter Kit](https://goo.gl/xWC7vj) with variety options


## Install

```
$ npm install --save psk-got
```

## Usage

```js
var pskGot = require('psk-got');

pskGot(opts).then(function (res) {
	console.log('installed path', res.dest);
});
```

## API

### pskGot(dest, [options])

#### dest

*Required*
Type: `string`

path to download and install

#### options

##### version

Type: `string`

version type of PSK to download and install. `master`, `light` and `full` are acceptable version set of version type. `light` and `full` also can be used with version number with `@`, if the number is not set, will download with `latest` version. see a sample to understand

- `master`: download from master branch at github
- 'full': download from full version released latest
- 'full@1.1.0': download from full version released with 1.1.0 tag
- 'light@1.0.3': download from light version released with 1.0.3 tag

## CLI

```
$ npm install --global psk-got
```

```
$ psk-got --help

  Usage
    psk-got [dest]

  Options
		--version		master, light<version>, full<version>, download PSK with <version> [Default: `full`]
		--strip			will remove `.git` directory after downloading
		--chromeapp customize a PSK project to suit Chrome Dev Editor
		
  Examples
		$ psk-got
		# will download PSK full version to current process path
		
		$ psk-got --strip
		# will download PSK full version to current process path
		
    $ psk-got ./psk-project --light --chromeapp
		# will download PSK light version and then customize the PSK project after unzip
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
