# Decpl [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/decpl/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/decpl)

Get the amount of decimal places in a number. (Based on https://stackoverflow.com/a/9539746/8384910)

[![NPM Badge](https://nodei.co/npm/decpl.png)](https://npmjs.com/package/decpl)

## Install

```sh
npm install decpl
```

## Usage

```js
const decpl = require("decpl");

decpl(5555.0);
//=> 0

decpl(5555);
//=> 0

decpl(555.5);
//=> 1

decpl(555.50);
//=> 1

decpl(0.0000005);
//=> 7

decpl(5e-7);
//=> 7

decpl(0.00000055);
//=> 8

decpl(5.5e-7);
//=> 8
```

## API

### decpl(number)

#### number

Type: `number`

The number to process.
