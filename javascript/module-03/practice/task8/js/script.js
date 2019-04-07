'use strict';

const filterFromArray = (arr, ...numbers) => {
  for (const number of numbers) {
    if (arr.includes(number)) {
      arr.splice(arr.indexOf(number), 1);
    }
  }
  return arr;
};

console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
