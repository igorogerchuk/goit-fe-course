'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';

let message = prompt('Введите пароль:');

if (message === null) {
  message = 'Отменено пользователем!';
} else if (message !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Добро пожаловать!';
}

alert(message);
