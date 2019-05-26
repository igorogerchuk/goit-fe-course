'use strict';
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
const categoriesList = document.querySelector('.categories');

const categories = categoriesList.children;

for (const category of categories) {
  console.log(`Категория: ${category.firstChild.textContent.trim()}`);
  console.log(
    `Количество вложенных li: ${category.lastElementChild.children.length}`,
  );
}
