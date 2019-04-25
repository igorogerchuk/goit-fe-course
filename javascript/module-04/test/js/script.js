'use strict';

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

// console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = { x: 5, j: 10, ...a, z: 15, ...b };

console.log(c); // {x: 0, j: 10, y: 2, z: 3}
