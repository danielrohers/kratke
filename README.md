# kratke

Short with hash number

[![npm version](https://badge.fury.io/js/kratke.svg)](https://badge.fury.io/js/kratke)
[![npm](https://img.shields.io/npm/dt/kratke.svg)](https://www.npmjs.com/package/kratke)


## Install

```
$ npm install --save kratke
```


## Usage

```js
var kratke = require('kratke');

var name = 'http://www.thelongestdomainnameintheworldandthensomeandthensomemoreandmore.com/';

var code = kratke(name);

console.log(code); //3508356967
```

## API

### kratke(name)

#### name

Type: `string`
