'use strict';

let credits = 23580;

const pricePerDroid = 3000;

let quantity = 3;

let totalPrice = quantity * pricePerDroid;

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
