# Vehicle Identification Number (VIN)
[![npm](https://img.shields.io/npm/v/vehicle-identification-number.svg?style=flat-square)](https://npmjs.com/vehicle-identification-number)
[![npm license](https://img.shields.io/npm/l/vehicle-identification-number.svg?style=flat-square)](https://npmjs.com/vehicle-identification-number)
[![npm downloads](https://img.shields.io/npm/dm/vehicle-identification-number.svg?style=flat-square)](https://npmjs.com/vehicle-identification-number)
[![build status](https://img.shields.io/travis/jhermsmeier/node-vehicle-identification-number.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-vehicle-identification-number)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save vehicle-identification-number
```

## Usage

```js
var VIN = require( 'vehicle-identification-number' )
```

```js
// German Porsche 993 GT2
var vin = VIN.parse( 'WP0ZZZ99ZTS392124' ) // OR
var vin = new VIN( 'WP0ZZZ99ZTS392124' )
```

```js
> VIN {
  region: 'EU',
  country: 'DE',
  assemblyPlant: 'S',
  checksum: null,
  modelYear: 'T',
  serialNumber: '92124',
  wmi: 'WP0',
  vds: 'ZZZ99Z',
  vis: 'TS392124'
}
```

```js
// You can also only get parts relevant to you
VIN.getCountry( 'WP0ZZZ99ZTS392124' ) // -> 'DE'
VIN.getRegion( 'WP0ZZZ99ZTS392124' ) // -> 'EU'
VIN.getChecksum( 'WP0ZZZ99ZTS392124' ) // -> null (Europe does not use checksums)
VIN.hasValidChecksum( 'WP0ZZZ99ZTS392124' ) // -> true

VIN.getCountry( '1GNSCJKC9FR264648' ) // -> 'US'
VIN.getChecksum( '1GNSCJKC9FR264648' ) // -> '9'
VIN.hasValidChecksum( '1GNSCJKC9FR264648' ) // -> true
VIN.calculateChecksum( '1GNSCJKC9FR264648' ) // '9'
```

```js
VIN.normalize( '1GN-SCJKC9-FR264648' ) // -> '1GNSCJKC9FR264648'
```

```js
vin.toString() // -> 'WP0ZZZ99ZTS392124'
```
