'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

while (true) {
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
    break;
  }

  alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
}
