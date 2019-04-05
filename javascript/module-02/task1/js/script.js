'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null) break;
  if (!Number.isNaN(+input) && input.trim() !== '') {
    numbers.push(+input);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== null);

if (numbers.length !== 0) {
  for (let number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
} else {
  alert('Не добавлено ни одного числа');
}
