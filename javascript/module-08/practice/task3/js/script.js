'use strict';

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const ul = document.querySelector('.list');
elements.forEach(element => {
  const li = document.createElement('li');
  li.textContent = element;
  ul.appendChild(li);
});
