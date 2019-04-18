'use strict';

const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']
