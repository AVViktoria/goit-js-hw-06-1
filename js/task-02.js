// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обязательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const addElementsToListHtml = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
 const createList = document.createElement('li');
createList.textContent = ingredient;
 createList.classList.add ('item');
return createList;
});


addElementsToListHtml.append(...elements);
console.log(addElementsToListHtml);

// createList.insertAdjacentHTML("afterbegin", addElementsToListHtml);