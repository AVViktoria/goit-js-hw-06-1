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
Array.prototype.forEach.call(ingredients, function(element) {
  const createList = document.createElement('li');
  
  createList.textContent = element;
  createList.classList.add ('item');
  addElementsToListHtml.append(createList);
  });


// createList.insertAdjacentHTML("afterbegin", addElementsToListHtml);
