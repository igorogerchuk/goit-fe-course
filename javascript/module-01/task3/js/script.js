'use strict';

const country = 'Индия';

let price = 0;

switch (country) {
  case 'Китай':
    price = 100;
    break;
  case 'Южная Америка':
    price = 250;
    break;
  case 'Австралия':
    price = 170;
    break;
  case 'Индия':
    price = 80;
    break;
  case 'Ямайка':
    price = 120;
    break;
}

if (price === 0) {
  console.log('В вашей стране доставка не доступна');
} else {
  console.log(`Доставка в ${country} будет стоить ${price}`);
}
