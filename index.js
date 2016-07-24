'use strict';

module.exports = function(min, max) {
  // check if min & max are positive integers >= 0
  if ((typeof min !== 'number'
    || typeof max !== 'number')
    ||
    (min < 0
    ||
    max <= min)) {
    throw new TypeError('min & max parameters must be integers >= 0 and max > min')
  }
  // generates a random integer between min (inclusive) and max (inclusive)
  let random = Math.floor(Math.random() * (max - min + 1)) + min
  return function getRandomInt() {
    const next = Math.floor(Math.random() * (max - min + 1)) + min
    // generate another random number if random === next
    return random = next === random && min !== max ? getRandomInt() : next
  }
}

