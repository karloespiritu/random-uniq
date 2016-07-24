# random-uniq

Generates random integers that are unique successively. Useful for generating random items that you don't want to appear consecutively after each call.

## Install

```js
npm install --save random-uniq
```

## Usage

```
const randomUniq = require('random-uniq')
const randomInt = randomUniq(0, 15)

console.log(randomInt(), randomInt(), randomInt(), randomInt())
// prints - 10, 3, 9
```
