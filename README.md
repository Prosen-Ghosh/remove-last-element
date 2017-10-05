# remove-last-element
JavaScript Package For Removing Last Element Of An Array. And It Also Return The Element.

![npm](https://img.shields.io/npm/v/remove-last-element.svg) ![license](https://img.shields.io/npm/l/remove-last-element.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/remove-last-element.svg) 


![travis-status](https://img.shields.io/travis/Prosen-Ghosh/remove-last-element.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/remove-last-element.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/remove-last-element.svg)

## Features

## Install

`npm install --save remove-last-element`


## Script Tag

#### For Development
```js
<script src=""></script>
```
#### For Production
```js
<script src=""></script>
```

## Usage

```js

const removeLast = require('remove-last-element');

let array = [1,2,3,4,"foo","baz",{},[]];
console.log(array);
//=> [ 1, 2, 3, 4, 'foo', 'baz', {}, [] ]

removeLast(array)
//=> []
console.log(array);
//=> [ 1, 2, 3, 4, 'foo', 'baz', {} ]

removeLast(array)
//=> {}
console.log(array);
//=> [ 1, 2, 3, 4, 'foo', 'baz' ]

removeLast(array)
//=> 'baz'
console.log(array);
//=> [ 1, 2, 3, 4, 'foo' ]

removeLast(array)
//=> 'foo'
console.log(array);
//=> [ 1, 2, 3, 4 ]

removeLast(array)
//=> 4
console.log(array);
//=> [ 1, 2, 3 ]

removeLast(array)
//=> 3
console.log(array);
//=> [ 1, 2 ]

removeLast(array)
//=> 2
console.log(array);
//=> [ 1 ]

removeLast(array)
//=> 1
console.log(array);
//=> []

removeLast(array)
//=> RangeError: Array Is Empty

removeLast([])
//=> RangeError: Array Is Empty

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
