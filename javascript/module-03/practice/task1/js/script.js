'use strict';

const checkNumberType = x => {
  if (x % 2) {
    return 'Odd';
  } else {
    return 'Even';
  }
};

console.log(checkNumberType(2)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'
