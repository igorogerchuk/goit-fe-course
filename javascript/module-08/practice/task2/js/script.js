'use strict';

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

const ul = document.querySelectorAll('.list > li');
console.log(ul[0]);

ul[0].style.color = 'red';
ul[ul.length - 1].style.color = 'blue';
