'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

while (attemptsLeft > 0) {
  let input = prompt('Введите пароль:');

  if (input === null) {
    alert('Отменено пользователем');
    break;
  }

  if (passwords.includes(input)) {
    alert('Добро пожаловать!');
    break;
  }

  attemptsLeft -= 1;

  if (attemptsLeft === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  } else {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
}
