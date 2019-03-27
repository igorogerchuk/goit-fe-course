'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === null) break;
  if (isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(input));
  }
}

if (numbers.length !== 0) {
  for (let number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
} else {
  alert('Не добавлено ни одного числа');
}
