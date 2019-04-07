'use strict';

const LOGIN_IS_NOT_VALID_ERROR_MESSAGE =
  'Ошибка! Логин должен быть от 4 до 16 символов';
const LOGIN_IS_NOT_UNIQUE_ERROR_MESSAGE = 'Такой логин уже используется!';
const LOGIN_SUCCESS_ADDING_MESSAGE = 'Логин успешно добавлен!';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length > 3 && login.length < 17;
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return LOGIN_IS_NOT_VALID_ERROR_MESSAGE;
  }

  if (!isLoginUnique(logins, login)) {
    return LOGIN_IS_NOT_UNIQUE_ERROR_MESSAGE;
  }

  allLogins.push(login);
  return LOGIN_SUCCESS_ADDING_MESSAGE;
};

// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
